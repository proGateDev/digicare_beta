import { FaMapMarkerAlt, FaClock, FaUserShield, FaChartLine, FaBell, FaMobileAlt } from 'react-icons/fa';
import FloatDiv from '../../FloatDiv';

const index = () => {
    return (
        <>
            <div
                className="flex items-center justify-center min-h-screen rounded-2xl"
                style={{
                    background: '#020024',
                }}
            >
                <div className="container mx-auto px-4">
                    <div
                        className="flex items-center justify-center min-h-screen w-full h-full h-120"
                        style={{
                            background: 'radial-gradient(circle, rgba(2,0,36,1) 11%, rgba(0,212,255,1) 60%, rgba(2,0,36,1) 92%);',
                        }}
                    >
                        <h1 className="text-3xl font-bold mt-8 text-white text-center">Digicare4u</h1>

                        <div className="relative">
                            <img
                                src="/images/earth.jpg"
                                alt="Earth"
                                className="object-cover rounded-full border-1 border-blue-400"
                            />
                            {/* Card 1 */}
                            <div
                                className="absolute top-10 left-10 p-1 rounded-lg shadow-lg max-w-xs hover:scale-105"
                                style={{ zIndex: 10 }}
                            >
                                <p className="text-sm text-gray-600 text-white ">Manak Nagar Kanausi lko, 226011</p>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="absolute top-40 left-60 p-1 rounded-lg shadow-lg max-w-xs hover:scale-105"
                                style={{ zIndex: 10 }}
                            >
                                {/* <h6 className="text-md font-semibold">Card 2 Title</h6> */}
                                <p className="text-sm text-gray-600 text-white">Manak Nagar Kanausi lko, 226011</p>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="absolute top-70 left-20 bg-gary p-1 rounded-lg shadow-lg max-w-xs hover:scale-105"
                                style={{ zIndex: 10 }}
                            >
                                <p className="text-sm text-gray-600 text-white">Manak Nagar Kanausi lko, 226011</p>
                            </div>
                            {/* Location markers on the earth image */}
                            <FaMapMarkerAlt
                                className="text-red-500 text-3xl absolute color-white"
                                style={{ top: '20%', left: '30%' }}
                            />
                            <FaMapMarkerAlt
                                className="text-red-500 text-3xl absolute"
                                style={{ top: '50%', left: '60%' }}
                            />
                            <FaMapMarkerAlt
                                className="text-red-500 text-3xl absolute"
                                style={{ top: '70%', left: '40%' }}
                            />
                        </div>
                    </div>

                    {/* Card Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6 rounded-full">
                        {/* Card */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 border-2 border-blue-500 max-w-xs mx-auto">
                            <div className="flex justify-start items-center ">
                                <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
                                <h2 className="text-xl text-white font-semibold">Real-Time Location</h2>
                            </div>
                            <p className="mt-2 text-white text-center text-sm flex text-justify">With our Real-Time Location feature, you can track the exact position of individuals or assets at any given moment. This feature ensures that you're always updated on the current location with pinpoint accuracy. Whether it's for personal or business use, real-time tracking is vital for monitoring movement and ensuring safety. The tracking data is updated continuously, giving you the most up-to-date information to make informed decisions.</p>
                        </div>

                        {/* Activity History Card */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 border-2 border-blue-500 max-w-xs mx-auto">
                            <div className="flex justify-start items-center ">
                                <FaClock className="text-blue-500 text-4xl mb-4" />
                                <h2 className="text-xl text-white font-semibold">Activity History</h2>
                            </div>

                            <p className="mt-2 text-white text-center text-sm text-justify">The Activity History feature provides a comprehensive record of movements over time. You can easily access past location data and see patterns of movement. This is especially useful for analyzing travel routes, tracking historical behavior, or reviewing data for security purposes. With easy-to-read charts and logs, you can identify trends and optimize processes based on real-time and past activities.</p>
                        </div>

                        {/* Privacy Protection Card */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 border-2 border-blue-500 max-w-xs mx-auto">
                            <div className="flex justify-start items-center ">
                                <FaUserShield className="text-blue-500 text-4xl mb-4" />
                                <h2 className="text-xl text-white font-semibold text-justify">Privacy Protection</h2>
                            </div>

                            <p className="mt-2 text-white text-center text-sm text-justify">We take privacy seriously, and our Privacy Protection feature ensures that all sensitive data is securely encrypted and stored. Your location data, as well as other personal information, is kept private, ensuring that no unauthorized access is possible. We adhere to the highest industry standards for data security and are committed to protecting your privacy. You can trust that your information remains safe with us.</p>
                        </div>

                        {/* Analytics Card */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 border-2 border-blue-500 max-w-xs mx-auto">
                            <div className="flex justify-start items-center ">
                                <FaChartLine className="text-blue-500 text-4xl mb-4" />
                                <h2 className="text-xl text-white font-semibold">Analytics</h2>
                            </div>

                            <p className="mt-2 text-white text-center text-sm text-justify">Our Analytics feature turns raw location data into actionable insights. By analyzing patterns, trends, and behaviors, you can gain valuable knowledge to improve decision-making. This feature provides detailed reports that highlight key metrics, such as frequent locations, time spent in specific areas, and much more. Whether you're tracking assets or monitoring personnel, analytics helps you optimize performance and make informed strategic decisions.</p>
                        </div>

                        {/* Custom Alerts Card */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 border-2 border-blue-500 max-w-xs mx-auto">
                            <div className="flex justify-start items-center ">
                                <FaBell className="text-blue-500 text-4xl mb-4" />
                                <h2 className="text-xl text-white font-semibold">Custom Alerts</h2>
                            </div>

                            <p className="mt-2 text-white text-center text-sm text-justify">Set up personalized notifications with our Custom Alerts feature. Whether you need to be notified of a specific location change or receive real-time alerts based on certain conditions, our system makes it easy to stay informed. You can customize your alerts based on time, location, and activity, giving you complete control over how and when you're notified. This feature helps you stay on top of important events without needing to constantly monitor data.</p>
                        </div>

                        {/* Mobile Access Card */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 border-2 border-blue-500 max-w-xs mx-auto">
                            <div className="flex justify-start items-center ">
                                <FaMobileAlt className="text-blue-500 text-4xl mb-4" />
                                <h2 className="text-xl text-white font-semibold text-justify">Mobile Access</h2>
                            </div>
                            <p className="mt-2 text-white text-center text-sm text-justify">With Mobile Access, you can track and manage your assets or individuals from anywhere, at any time, directly from your smartphone. Whether you're on the go or working from home, this feature ensures that you never miss an update. The mobile interface is designed for ease of use, making it simple to access tracking data, receive alerts, and review analytics from the convenience of your mobile device.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
