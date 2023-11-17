import React from "react";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import RiderComponent from "../../components/Users/RiderComponent";

const TrackRider = () => {
  return (
    <UsersLayout page="tracker">
      <Helmet>
        <title>Track Rider | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <RiderComponent />
      </div>
    </UsersLayout>
  );
};

export default TrackRider;
