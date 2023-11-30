import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

export default function Layout() {
  return (
    <div>
      <div className="w-full min-h-screen bg-white grid grid-cols-6">
        <div className="col-span-1">
          <Sidebar />
        </div>

        <div
          className="px-8 flex-1 h-screen overflow-y-scroll"
          style={{ width: "500%" }}
        >
          <div className="sticky top-0 bg-white opacity-90 mb-5">
            <div className="flow-root">
              <span className="float-left">
                <h3 className="text-xl text-indigo-950 my-4">
                  Welcome back, Dummy hospital
                </h3>
              </span>
              <div className="float-right">
                <div className="flex pt-3 space-x-9 items-center">
                  <GrNotification width={20} />
                  {/* <BiUser width={20} /> */}
                  <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      datepicker
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-span-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
