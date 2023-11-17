import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import TextField from "@mui/material/TextField";

const EditProfile = () => {
  return (
    <div className="bg-amber-50 w-[900px] h-screen px-12 py-10 overflow-hidden">
      <div className="flex space-x-2">
        <div className="w-16 h-16">
          <img
            src={require("../../assets/profile.jpg")}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="font-bold">
          <p className="">Hi</p>
          <p className="text-fuchsia-700 text-xl">Temitope</p>
        </div>
      </div>
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
              label="First Name"
              defaultValue="Edit First Name"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <ManageAccountsIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Last Name"
              defaultValue="Edit Last Name"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <PersonAddIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              label="Email"
              defaultValue="Edit Email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <MarkEmailReadIcon />
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

export default EditProfile;
