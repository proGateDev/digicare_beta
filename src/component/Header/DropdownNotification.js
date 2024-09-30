import { useState, useEffect } from "react";
import Link from "next/link";
import ClickOutside from "../ClickOutside";
import { io } from "socket.io-client"; // Importing socket.io client
import { devURL } from '../../../contsants/endPoints';

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(false);
  const [userId, setUserId] = useState('66f2533350a2238acfb19892');
  const [notifications, setNotifications] = useState([]);
  let socket; // Declare socket here

  const handleNotification = (notification) => {
    const newNotification = {
      message: notification,
      date: new Date().toLocaleString(),
      id: Date.now(), // Unique ID for each notification
    };
    setNotifications((prev) => [...prev, newNotification]);
    setNotifying(true);
  };

  useEffect(() => {
    // Initialize the socket connection when the component mounts
    socket = io("http://192.168.0.172:8000", {
      transports: ['websocket'], // Force WebSocket transport
    });

    // Listen for notifications
    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
      socket.emit('joinRoom', userId); // Join the room with the userId

      socket.on('notification', (notify) => handleNotification(notify))
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
    });

    return () => {
      // Cleanup on component unmount
      socket.disconnect();
    };
  }, [userId]);

  // Function to mark a specific notification as read
  const markAsRead = (id) => {
    setNotifications((prev) => prev.filter(notification => notification.id !== id));
    // Optionally update notifying state based on notifications length
    if (notifications.length === 1) {
      setNotifying(false); // If this was the last notification
    }
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <Link
          onClick={() => {
            setNotifying(false); // Reset notifying when user opens the dropdown
            setDropdownOpen(!dropdownOpen);
          }}
          href="#"
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        >
          <span
            className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? "hidden" : "inline"}`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>

          {/* Your icon */}
          <svg
            className="fill-current duration-300 ease-in-out"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">
                Notifications
              </h5>
            </div>

            <ul className="flex h-auto flex-col overflow-y-auto">
              {notifications?.length === 0 ? (
                <li className="flex justify-center py-2">
                  <p className="text-sm text-gray-500">No notifications</p>
                </li>
              ) : (
                notifications.map((notification) => (
                  <li key={notification.id}>
                    <Link
                      className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                      href="#"
                    >
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs">{notification.date}</p>
                      <button
                        onClick={() => {

                          console.log(notification.id)
                          markAsRead(notification.id)
                        }} // Call markAsRead with the specific notification id
                        className="text-xs text-red-500 hover:underline"
                      >
                        Mark as Read
                      </button>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownNotification;
