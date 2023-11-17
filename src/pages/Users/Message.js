import React from "react";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";

const Message = () => {
  return (
    <UsersLayout page="tracker">
      <Helmet>
        <title>Message | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      ></div>
    </UsersLayout>
  );
};

export default Message;
