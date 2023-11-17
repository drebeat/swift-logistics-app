import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/Password";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Helmet } from "react-helmet";

import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";

const Logout = () => {


  return (
    <AdminLayout page="logout">
      <Helmet>
        <title>Logout | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-white px-10"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="">
          <div className="text-fuchsia-700 text-xl font-bold py-8">Logout</div>
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
              <h2 className="font-bold pb-2">Email Address</h2>
              <TextField
                id="outlined-select-currency"
                select
                label="Email Address"
                defaultValue="Enter Email" // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PersonAddIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </div>
            <div>
              <h2 className="font-bold pb-2">Password</h2>
              <TextField
                id="outlined-select-currency"
                label="Password"
                defaultValue="Enter Password" // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </div>
          </Box>
        </div>
        <div
          className="w-full pt-16"
          style={{ display: "flex", justifyContent: "start" }}
        >
          <Stack direction="row">
            <Button variant="contained" sx={{ background: "#460042", px: 6 }}>
              Logout
            </Button>
          </Stack>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Logout;
