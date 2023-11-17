import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { GiCheckMark } from "react-icons/gi";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";

const Promotional = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  //  const openSuccessModal = () => {
  //    setIsSuccessModalOpen(true);
  //  };

  const closeSuccessModal = () => {
    setIsModalOpen(false); // Close the transfer modal
  };

  return (
    <UsersLayout page="promotional">
      <Helmet>
        <title>Promotional Ads | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="bg-fuchsia-50 min-h-screen px-10">
          <div className="text-fuchsia-700 text-[32px] font-bold py-8">
            Promotional Ads
          </div>
          <div className="bg-fuchsia-600 w-full h-auto space-y-4 px-6 pb-8 pt-4 rounded-lg">
            <div className="text-white font-bold text-xl">Get 10% discount</div>
            <div className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              in.
            </div>
            <div className="">
              <Stack direction="row" spacing={4}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    fontWeight: 700,
                  }}
                  onClick={openModal}
                >
                  Apply
                </Button>
              </Stack>

              {/* <img
                  src={require("../../assets/shopping.png")}
                  alt=""
                  className="w-1/2 object-cover absolute right-80"
                />
             */}
            </div>
          </div>

          {/* <div className="container mx-auto">
            <div className="carousel-wrapper pt-8">
              <Carousel
                infiniteLoop
                useKeyboardArrows
                showArrows
                autoPlay
                centerMode
                showStatus={false}
                showThumbs={false}
                // centerSlidePercentage={20}
              >
                <div>
                  <img
                    src={require("../../assets/shoppingx.jpg")}
                    className="rounded-xl"
                  />
                  <p className="legend">Shopping Spree</p>
                </div>
                <div>
                  <img
                    src={require("../../assets/bicycle.jpg")}
                    className="rounded-xl"
                  />
                  <p className="legend">Express Delivery</p>
                </div>
                <div>
                  <img
                    src={require("../../assets/delivery-woman.avif")}
                    className="rounded-xl"
                  />
                  <p className="legend">Personalized Services</p>
                </div>
              </Carousel>
            </div>
          </div> */}
        </div>
        <Dialog open={isModalOpen} onClose={closeSuccessModal}>
          <DialogTitle align="center" className="text-black font-bold">
            Applied Successfully
          </DialogTitle>
          <DialogContent>
            <DialogContentText align="center">
              <div className="flex items-center justify-center">
                <GiCheckMark size={24} />
              </div>
              Promotional Ads Applied Successfully!
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </UsersLayout>
  );
};

export default Promotional;
