import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";
import { GiCheckMark } from "react-icons/gi";
import MoneyIcon from "@mui/icons-material/Money";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";

const PaymentProcessing = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
          <div className="flex items-center text-fuchsia-700 text-[32px] font-bold py-8 px-10">
            <div> Send Package</div> <PiArrowsLeftRightDuotone />{" "}
            <div>Payment Processing</div>
          </div>
        </div>

        <div className="w-2/5">
          <div className="px-10 space-y-6 pt-10">
            <div className="space-x-4">
              {" "}
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="radio"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="font-bold text-lg">Express Delivery</span>
            </div>
            <div className="px-8">
              {" "}
              <div className="font-bold text-md">Estimated Cost</div>
              <div className="flex justify-between">
                <div className="text-sm font-semibold">Total Cost</div>
                <div className="text-sm font-semibold">N200.00</div>
              </div>
            </div>
            <div className="space-x-4">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="radio"
                value=""
                className="w-4 h-4 text-slate-700 bg-gray-100 border-gray-300 rounded focus:ring-slate-700 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="font-bold text-md text-slate-700">
                Same Day Delivery
              </span>
            </div>
            <div className="space-x-4">
              {" "}
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="radio"
                value=""
                className="w-4 h-4 text-slate-700 bg-gray-100 border-gray-300 rounded focus:ring-slate-700 dark:focus:ring-slate-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="font-bold text-md text-slate-700">
                Next-Day Delivery
              </span>
            </div>
            <div className="mt-6">
              <Button
                component="label"
                variant="contained"
                sx={{ background: "#460042", paddingX: 6 }}
                // onClick={openModal}
                onClick={() => navigate("/receiver-information")}
              >
                Proceed
              </Button>
            </div>
          </div>
          {/* <Dialog open={isModalOpen} onClose={closeSuccessModal}>
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
          </Dialog> */}

          {/* Success Modal */}
          {/* <Dialog open={isSuccessModalOpen} onClose={closeSuccessModal}>
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
          </Dialog> */}
        </div>
      </div>
    </UsersLayout>
  );
};

export default PaymentProcessing;
