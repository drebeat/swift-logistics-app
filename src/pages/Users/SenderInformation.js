import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import InputAdornment from "@mui/material/InputAdornment";
import { GiCheckMark } from "react-icons/gi";
import MoneyIcon from "@mui/icons-material/Money";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const SenderInformation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsModalOpen(false); // Close the transfer modal
    setIsSuccessModalOpen(false); // Close the success modal
  };

  return (
    <UsersLayout page="sendpackage">
      <Helmet>
        <title>Send Package | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="bg-fuchsia-50">
          <div className="text-fuchsia-700 text-[32px] font-bold py-8 px-10">
            Send Package
          </div>
        </div>
        <div className="text-black text-xl py-4 font-bold px-10">
          Sender's Information
        </div>
        <div className="">
          <div className="text-xl font-medium py-5 px-10">Delivery Method</div>
          <div className="flex justify-between px-10">
            <div className="space-x-1">
              {" "}
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="radio"
                value=""
                checked
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <select name="" id="" className="bg-transparent">
                <option value="">Express - Delivery</option>
                <option value="">Same Day Delivery</option>
                <option value="">Next Day Delivery</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pt-6 border-b-2 border-gray-400"></div>
        <div className="py-4 px-10">
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
                id="outlined-error"
                label="First Name"
                defaultValue="Enter Your First Name"
              />
              <TextField
                id="outlined-error"
                label="Last Name"
                defaultValue="Enter Your Last Name"
              />
            </div>
            <div>
              <TextField
                id="outlined-error"
                label="Email Address"
                defaultValue="Enter Your Email"
              />
              <TextField
                id="outlined-error"
                label="City"
                defaultValue="Enter Your City"
              />
            </div>
            <div>
              <TextField
                id="outlined-error"
                label="Phone Number"
                defaultValue="Enter Your Phone Number"
              />
              <TextField
                id="outlined-error"
                label="Email Address [Optional]"
                defaultValue="Enter Your Optional Email"
              />
            </div>
          </Box>
        </div>
        <div className="flex justify-center">
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-center" }}
          >
            <Button
              variant="contained"
              sx={{ background: "#460042", paddingX: 6 }}
              onClick={openModal}
              //   onClick={() => navigate("/payment-processing")}
            >
              SUBMIT
            </Button>
          </Stack>
        </div>
        <Dialog open={isModalOpen} onClose={closeSuccessModal}>
          <DialogTitle align="center">Transfer</DialogTitle>
          <DialogContent>
            <DialogContentText align="center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              asperiores delectus ut.
            </DialogContentText>
          </DialogContent>

          <DialogContent>
            <DialogContentText align="left">Enter Amount</DialogContentText>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-select-currency"
                label="Enter Amount"
                defaultValue=""
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <MoneyIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Box>
            <div
              className="w-full"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Stack direction="row">
                <Button
                  onClick={() => {
                    closeSuccessModal();
                    openSuccessModal();
                  }}
                  variant="contained"
                  sx={{
                    background: "#460042",
                    px: 6,
                  }}
                >
                  Pay
                </Button>
              </Stack>
            </div>
          </DialogContent>
        </Dialog>

        {/* Success Modal */}
        <Dialog open={isSuccessModalOpen} onClose={closeSuccessModal}>
          <DialogTitle align="center" className="text-black font-bold">
            Successful Transfer
          </DialogTitle>
          <DialogContent>
            <DialogContentText align="center">
              <div className="flex items-center justify-center">
                <GiCheckMark size={24} />
              </div>
              Your payment was successful!
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </UsersLayout>
  );
};

export default SenderInformation;
