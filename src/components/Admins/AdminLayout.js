import React from "react";
import SidebarContextProvider from "../../contexts/SidebarContext";
import AdminSidebar from "./AdminSidebar";


const AdminLayout = ({ children, page }) => {
  return (
    <SidebarContextProvider>
      <div
        className="flex w-full min-h-screen bg-slate-50 relative"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <AdminSidebar page={page} />
        <div className="lg:w-4/5 w-full ml-auto relative">{children}</div>
      </div>
    </SidebarContextProvider>
  );
};

export default AdminLayout;
