import React from "react";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import RiderComponent from "../../components/Users/RiderComponent";
import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";

const LiveTracker = () => {
  return (
    <AdminLayout page="admtrack-rider/livetracker">
      <Helmet>
        <title>Live Tracker | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <RiderComponent />
      </div>
    </AdminLayout>
  );
};

export default LiveTracker;
