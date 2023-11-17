import React from "react";
import { Helmet } from "react-helmet";
import { FiEye } from "react-icons/fi";
import { TiArrowForward } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";
import CircularWithValueLabel from "../../components/Admins/CircularProgressWithLabel";

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

const WalletAdmin = () => {
  return (
    <AdminLayout page="admin-wallet">
      <Helmet>
        <title>Wallet | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-slate-50"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="px-10">
          <div className="text-fuchsia-700 text-xl font-bold py-8">Wallet</div>
          <div className="bg-white flex flex-col h-screen pt-10">
            <div className="flex justify-between mx-6 font-bold">
              <div></div>
              <div className="flex items-center space-x-1 pb-4">
                <FiEye />
                <div className="text-sm">View Wallet History</div>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="bg-fuchsia-700 w-1/3 h-42 px-6 pt-14 pb-12 rounded-2xl space-y-2">
                <div className="text-white text-md">Current Balance</div>
                <div className="text-white font-bold text-xl">N 500,956.67</div>
              </div>
              <div classsName="w-1/3">
                <div className="font-semibold text-md">Statistics</div>
                <div>
                  <CircularWithValueLabel />
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="flex justify-between space-x-2">
                      <div>
                        <div className="flex space-x-1 py-2">
                          <div className="bg-blue-500 rounded-full py-2 px-2"></div>
                          <div className="text-xs">N5,000</div>
                        </div>
                        <div className="text-xs">Miscelleanous</div>
                      </div>
                      <div>
                        <div className="flex space-x-1 py-2">
                          <div className="bg-fuchsia-700 rounded-full py-2 px-2"></div>
                          <div className="text-xs">N10,000</div>
                        </div>
                        <div className="text-xs">Expenses</div>
                      </div>
                      <div>
                        <div className="flex space-x-1 py-2">
                          <div className="bg-red-700 rounded-full py-2 px-2"></div>
                          <div className="text-xs">N15,000</div>
                        </div>
                        <div className="text-xs">Income</div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div classsName="w-1/3 flex flex-col">
                <div className="bg-fuchsia-600 w-52 h-auto px-6 py-6 my-auto rounded-xl drop-shadow-2xl">
                  <div className="flex justify-center items-center space-x-8">
                    <div>
                      <TiArrowForward />
                    </div>
                    <div>
                      <div className="text-white">Income</div>
                      <div className="text-white font-bold">N 200,000</div>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-700 w-52 h-auto px-6 py-6 my-auto rounded-xl drop-shadow-2xl mt-3">
                  <div className="flex justify-center items-center space-x-8">
                    <div>
                      <TiArrowBack />
                    </div>
                    <div>
                      <div className="text-white">Expenses</div>
                      <div className="text-white font-bold">N 50,000</div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg py-4">Overview</div>
              <div className="flex justify-between">
                <div className="flex justify-between space-x-8">
                  <div>
                    <div className="flex space-x-1 py-2">
                      <div className="bg-blue-500 rounded-full py-2 px-2"></div>
                      <div className="text-xs">Miscelleanous</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-1 py-2">
                      <div className="bg-red-700 rounded-full py-2 px-2"></div>
                      <div className="text-xs">Expenses</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-1 py-2">
                      <div className="bg-fuchsia-700 rounded-full py-2 px-2"></div>
                      <div className="text-xs">Income</div>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    sx={{ backgroundColor: "#00FF00" }} 
                  >
                
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default WalletAdmin;
