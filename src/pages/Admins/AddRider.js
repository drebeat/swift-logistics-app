import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import CategoryIcon from "@mui/icons-material/Category";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PlaceIcon from "@mui/icons-material/Place";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import CallIcon from "@mui/icons-material/Call";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Helmet } from "react-helmet";

import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";

const AddRider = () => {
  const options = ["Active", "Inactive"];
  const navigate = useNavigate();
  return (
    <AdminLayout page="admin-rider">
      <Helmet>
        <title>Add Rider | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-white px-10"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="">
          <div className="text-fuchsia-700 text-xl font-bold py-8">
            Add Rider
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
            <div className="pb-8">
              <TextField
                id="outlined-select-currency"
                // select
                label="First Name"
                defaultValue="Andrew"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PersonAddIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                id="outlined-select-currency"
                label="Last Name"
                defaultValue="West"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PersonAddIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </div>
            <div className="pb-8">
              <TextField
                id="outlined-select-currency"
                label="Rider's ID"
                defaultValue="West232"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PlaceIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                select
                id="outlined-select-currency"
                label="Status"
                defaultValue={options[0]} // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <TimeToLeaveIcon />
                    </InputAdornment>
                  ),
                }}
              >
                {" "}
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                id="outlined-select-currency"
                label="Enter Phone Number"
                defaultValue="+2348012345678" // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                id="outlined-select-currency"
                label="Enter Contact Information"
                defaultValue="Confidential" // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <ContactPageIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </div>
          </Box>
        </div>
        <div
          className="w-full pt-16"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Stack direction="row">
            <Button variant="contained" sx={{ background: "#460042", px: 6 }}>
              Add Rider
            </Button>
          </Stack>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddRider;
