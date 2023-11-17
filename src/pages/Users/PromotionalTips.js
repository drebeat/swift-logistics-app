import React from "react";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import Switch from "@mui/material/Switch";

const PromotionalTips = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange2 = (event) => {
    setChecked2(event.target.checked2);
  };
  return (
    <UsersLayout page="settings">
      <Helmet>
        <title>Promotional Tips | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div className="" style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}>
        <div className="flex items-center justify-center flex-col lg:items-start bg-amber-50 w-full h-screen px-12 py-10 overflow-hidden">
          <div className="font-bold text-fuchsia-700 text-xl">
            Promotional Tips
          </div>

          <div className="flex space-x-28 space-y-6 items-center py-4 mt-12">
            <div>Email</div>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="flex space-x-28 items-center">
            <div>Push</div>
            <Switch
              checked={checked2}
              onChange={handleChange2}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
      </div>
    </UsersLayout>
  );
};

export default PromotionalTips;
