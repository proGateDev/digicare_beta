"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "../sidebar";
import Header from "../Header";

export default function DefaultLayout({
  isMember,
  profile,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar 
        sidebarOpen={sidebarOpen}
         setSidebarOpen={setSidebarOpen} 
         isMember={isMember}
         />
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          <Header
            profile={profile}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
