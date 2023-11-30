import React from "react";
import { FcDonate, FcStatistics, FcDocument, FcGoodDecision, FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";

const NAVIGATION = [
  { id: 0, name: "Dashboard", path: "/", icon: <FcStatistics /> },
  { id: 1, name: "Billing Trends", path: "/billing-trends", icon: <FcDonate /> },
  { id: 2, name: "Total Reciept Trends", path: "/total-receipt-trends", icon: <FcDocument /> },
  {
    id: 4,
    name: "Insurance Billing Trends",
    path: "/insurance-billing-trends",
    icon: <FcGoodDecision />
  },
  {
    id: 5,
    name: "Ip Concession Trends",
    path: "/ip-concession-trends",
    icon: <FcManager />
  },
];

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-lg text-base";

function SidebarLinks({ item }) {
  return (
    
    <Link to={item.path} className={linkClasses}>
      <span className="text-xl">{item.icon}</span>
      {item.name}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="h-screen border-r border-grey-200 w-64 px-5 bg-slate-800 text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        {/* <FcPieChart fontSize={24} /> */}
        <span className="text-neutral-100 text-lg">Business Intelligence</span>
      </div>
      <div className="flex-1">
        {NAVIGATION.map((item) => {
          return <SidebarLinks item={item} />;
        })}
      </div>
    </div>
  );
}
