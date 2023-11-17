import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import CategoryIcon from "@mui/icons-material/Category";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PlaceIcon from "@mui/icons-material/Place";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import CallIcon from "@mui/icons-material/Call";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Helmet } from "react-helmet";

import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";

const AssignOrder = () => {
  const options = ["Kelvin John", "Felix James", "Edmond Hanks"];

  return (
    <AdminLayout page="assign">
      <Helmet>
        <title>Assign Order | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-white px-10"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="">
          <div className="text-fuchsia-700 text-xl font-bold py-8">
            Assign Order
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
                id="outlined-select-currency"
                select
                label="Select Rider"
                defaultValue={options[0]} // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PersonAddIcon />
                    </InputAdornment>
                  ),
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency"
                label="Enter Item Details"
                defaultValue="iphone 15 plus" // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </div>
            <div>
              <TextField
                id="outlined-select-currency"
                label="Pick Up"
                defaultValue="Ikeja Avenue" // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PlaceIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                id="outlined-select-currency"
                label="City"
                defaultValue="Abuja" // Set the default selected option
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <TimeToLeaveIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
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
              Assign
            </Button>
          </Stack>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AssignOrder;
