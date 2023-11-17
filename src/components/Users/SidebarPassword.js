import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import KeyIcon from "@mui/icons-material/Key";
import TextField from "@mui/material/TextField";

const SidebarPassword = () => {
  return (
    <div className="bg-amber-50 w-[900px] h-screen px-12 py-10 overflow-hidden">
      <div className="font-bold text-fuchsia-700 text-xl">Change Password</div>

      <div className="py-4">
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
  );
};

export default SidebarPassword;
