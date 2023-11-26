import React from "react";

import { Helmet } from "react-helmet";
import { FaWallet } from "react-icons/fa";
import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";
import LeftAdDashboard from "../../components/Admins/LeftAdDashboard";
import RightAdDashboard from "../../components/Admins/RightAdDashboard";

const AdminDashboard = () => {
  return (
    <AdminLayout page="dashboard">
      <Helmet>
        <title>Dashboard | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-pink-50 overflow-y-auto"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="px-10">
          <div className="text-fuchsia-700 text-md md:text-xl lg:text-2xl font-bold py-8">
            Welcome back
          </div>
          <div className="w-full flex gap-3"></div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col bg-lime-400 w-58 md:w-64 h-32 px-12 md:px-6 py-3 rounded-lg">
            <div className="bg-green-100 rounded-full p-3 w-12 h-12">
              <FaWallet size={24} className="mr-4" />
            </div>
            <div className="text-white">Total Orders</div>
            <div className="text-white">1,956</div>
          </div>
          <div className="flex flex-col bg-fuchsia-700 w-58 md:w-64 h-32 px-12 md:px-6 py-3 rounded-lg">
            <div className="bg-green-100 rounded-full p-3 w-12 h-12">
              <FaWallet size={24} className="mr-4" />
            </div>
            <div className="text-white">Total Orders</div>
            <div className="text-white">1,956</div>
          </div>
          <div className="flex flex-col bg-pink-700 w-58 md:w-64 h-32 px-12 md:px-6 py-3 rounded-lg">
            <div className="bg-green-100 rounded-full p-3 w-12 h-12">
              <FaWallet size={24} className="mr-4" />
            </div>
            <div className="text-white">Total Orders</div>
            <div className="text-white">1,956</div>
          </div>
        </div>
        <div className="w-full flex gap-3 px-10 pt-14">
          <LeftAdDashboard />
          <RightAdDashboard />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
