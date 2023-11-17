import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import InputAdornment from "@mui/material/InputAdornment";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";

import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { Helmet } from "react-helmet";

import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Promotions = () => {
  const options = ["SMS", "Email"];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <AdminLayout page="promotion">
      <Helmet>
        <title>Promotion | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="px-10">
          <div className="text-fuchsia-700 text-xl font-bold py-8">
            Promotion
          </div>
        </div>
        <div className="px-10">
          <Stack
            direction="row"
            // spacing={58}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button></Button>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              sx={{ background: "#fff", color: "#000", fontWeight: 700 }}
            >
              Add New Promotion
            </Button>
          </Stack>
        </div>
        <div className="py-4 px-10">
          <div>
            <h2 className="font-semibold py-3">
              Please Select Promotional Tools
            </h2>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Promotional Tools"
                  defaultValue={options[0]} // Set the default selected option
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BroadcastOnHomeIcon />
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
              </div>
            </Box>
          </div>
          <div>
            <h2 className="font-semibold mt-6">
              Enter Promotional Description
            </h2>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Box sx={{ p: 2 }}>
                <TextareaAutosize
                  placeholder="Type in here…"
                  minRows={2}
                  maxRows={4}
                  style={{ width: "60ch", background: "#F6F6F6" }} // Set the width to 100% to make it responsive
                />
              </Box>
            </Box>
          </div>

          <div className="mt-6">
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>

          <div
            className="w-full pt-16"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Stack direction="row">
              <Button
                variant="contained"
                sx={{ background: "#460042", px: 6 }}
                onClick={openModal}
              >
                Send
              </Button>
            </Stack>
          </div>
          <Dialog open={isModalOpen} onClose={closeModal}>
            <DialogTitle>Promotion Pushed</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Your promotion has been pushed successfully.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={closeModal}
                variant="contained"
                sx={{ background: "#460042", px: 6 }}
              >
                Continue
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Promotions;
