import React from "react";
import UsersLayout from "../../components/Users/UsersLayout";
import UsersHeader from "../../components/Users/UsersHeader";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import KeyIcon from "@mui/icons-material/Key";
import TextField from "@mui/material/TextField";

const ChangePasswordSettings = () => {
  return (
    <UsersLayout page="settings">
      <Helmet>
        <title>Change Password | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div className="" style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}>
        <div className="flex items-center justify-center flex-col lg:items-start bg-amber-50 w-full h-screen px-12 py-10 overflow-hidden">
          <div className="font-bold text-fuchsia-700 text-xl">
            Change Password
          </div>

          <div className="py-4 mt-8">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="Current Password"
                  defaultValue="Enter Current Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="New Password"
                  defaultValue="Enter New Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Box>
          </div>
        </div>
      </div>
    </UsersLayout>
  );
};

export default ChangePasswordSettings;
