import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";

import MoneyIcon from "@mui/icons-material/Money";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import WalletHistory from "../../components/Users/WalletHistory";
import TransactionHistory from "../../components/Users/TransactionHistory";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const walletData = [
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAUoWroB279y3iZYWJie-47D0rwxxs7iRq3TWX0wB&s",
    title: "PayStack",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageURL:
      "https://sterling.ng/wp-content/uploads/2023/08/New-Sterling-Bank-Logo-1024x431.png",
    title: "Sterling",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn4sQxV1btsCB2rchB1Zm7xm4ZjKh3a4aIaD5iWx-bQ&s",
    title: "PayPal",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    imageURL:
      "https://www.fintechfutures.com/files/2021/09/Flutterwave-logo.png",
    title: "Flutter Wave",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

const Wallet = () => {
  const [dataBalance, setDataBalance] = useState({});
  const [accountDetails, setAccountDetails] = useState([]);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectWalletModalOpen, setIsSelectWalletModalOpen] = useState(false);
  const [isPaymentSuccessfulModalOpen, setIsPaymentSuccessfulModalOpen] =
    useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const request = {
      signal: controller.signal,
      headers: {
        authorization: `Bearer ${auth?.accessToken}`,
      },
    };

    const getBalance = async () => {
      const res = await axiosPrivate
        .get("/wallets/users/balance", request)
        .catch(async (err) => {
          console.error(err?.response);
        });
      if (res?.data) {
        isMounted && setDataBalance(res?.data);
      }
    };

    const getAccountDetails = async () => {
      const res = await axiosPrivate
        .get("/wallets/users/account", request)
        .catch(async (err) => {
          console.error(err?.response);
        });
      if (res?.data?.details) {
        isMounted && setAccountDetails(res?.data?.details);
      }
    };
    getBalance();
    getAccountDetails();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken, axiosPrivate]);

  // console.log({ dataBalance });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openWalletModal = () => {
    setIsSelectWalletModalOpen(true);
  };

  const openPaymentSuccessfulModal = () => {
    setIsPaymentSuccessfulModalOpen(true);
  };

  const closePaymentSuccessfulModal = () => {
    setIsPaymentSuccessfulModalOpen(false);
    setIsSelectWalletModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <UsersLayout page="wallet">
      <Helmet>
        <title>Wallet | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="bg-fuchsia-50 px-10">
          <div className="text-fuchsia-700 text-[32px] font-bold py-8">
            Wallet
          </div>
          <div className="bg-fuchsia-600  w-full h-auto space-y-4 px-6 pb-8 pt-4 rounded-lg">
            <div className="text-white">Main Account</div>
            <div className="text-white">{dataBalance.balance}</div>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                sx={{ background: "#fff", color: "#000", fontWeight: 700 }}
                onClick={openModal}
              >
                Fund Wallet
              </Button>
            </Stack>
          </div>
        </div>
        {/* Payment Modal  */}
        <Dialog open={isModalOpen}>
          <DialogTitle align="center" sx={{ fontWeight: "bold" }}>
            Fund Wallet
          </DialogTitle>
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
                    openWalletModal();
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

        {/* Select Wallet Modal  */}
        <Dialog open={isSelectWalletModalOpen}>
          <DialogTitle align="center" sx={{ fontWeight: "bold" }}>
            Fund Wallet
          </DialogTitle>
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
                defaultValue="20,000"
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <MoneyIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Box>
            {walletData.map((wallet, index) => (
              <div
                key={index}
                className="flex space-y-6 items-center space-x-2"
              >
                <div>
                  <img
                    src={wallet.imageURL}
                    alt={wallet.title}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <div className="font-bold">{wallet.title}</div>
                  <div>{wallet.text}</div>
                </div>
                {/* Add any other elements you want to display */}
              </div>
            ))}
            <div
              className="w-full mt-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Stack direction="row">
                <Button
                  onClick={() => {
                    openPaymentSuccessfulModal();
                  }}
                  variant="contained"
                  sx={{
                    background: "#460042",
                    px: 6,
                  }}
                >
                  Proceed
                </Button>
              </Stack>
            </div>
          </DialogContent>
        </Dialog>
        {/* Payment Successful Modal */}
        <Dialog
          open={isPaymentSuccessfulModalOpen}
          onClose={closePaymentSuccessfulModal}
        >
          <DialogTitle align="center" sx={{ fontWeight: "bold" }}>
            Payment Successful
          </DialogTitle>
          <DialogContent>
            <DialogContentText align="center">
              Thank you for your payment!
            </DialogContentText>
          </DialogContent>
          <DialogContent>
            <div
              className="w-full"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Stack direction="row">
                <Button
                  onClick={closePaymentSuccessfulModal}
                  variant="contained"
                  sx={{
                    background: "#460042",
                    px: 6,
                  }}
                >
                  Close
                </Button>
              </Stack>
            </div>
          </DialogContent>
        </Dialog>
        <div className="w-full flex flex-col lg:flex lg:flex-row gap-3">
          <WalletHistory accountDetails={accountDetails} />
          <TransactionHistory />
        </div>
      </div>
    </UsersLayout>
  );
};

export default Wallet;
