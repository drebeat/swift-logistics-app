import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLandingPage from "./pages/Users/UserLandingPage";

import ForgotPassword from "./components/Users/ForgotPassword";
import UsersDashboard from "./pages/Users/UsersDashboard";
import GetStarted from "./components/Users/GetStarted";
import PersistLogin from "./components/PersistLogin";
import RequireUser from "./layout/RequireUser";
import RequireAdmin from "./layout/RequireAdmin";

import ChangePassword from "./components/Users/ChangePassword";
import TrackRider from "./pages/Users/TrackRider";
import SendPackage from "./pages/Users/SendPackage";
import Wallet from "./pages/Users/Wallet";
import Promotional from "./pages/Users/Promotional";

import AdminDashboard from "./pages/Admins/AdminDashboard";
import AdmTrackRider from "./pages/Admins/AdmTrackRider";
import AssignOrder from "./pages/Admins/AssignOrder";
import Promotions from "./pages/Admins/Promotions";
import LiveTracker from "./pages/Admins/LiveTracker";
import OrderHistory from "./pages/Admins/OrderHistory";
import WalletAdmin from "./pages/Admins/WalletAdmin";
import Logout from "./pages/Admins/Logout";
import AdminRider from "./pages/Admins/AdminRider";
import ReceiverInformation from "./pages/Users/ReceiverInformation";
import PaymentProcessing from "./pages/Users/PaymentProcessing";
import UserRegistration from "./pages/Users/UserRegistration";
import AddRider from "./pages/Admins/AddRider";
import EmailVerification from "./pages/Users/EmailVerification";
import AdminRegistration from "./pages/Admins/AdminRegistration";
import UserSignin from "./pages/Users/UserSignin";
import AdminSignin from "./pages/Admins/AdminSignin";
import OtpVerification from "./pages/Users/OtpVerification";
import EditProfile from "./pages/Users/EditProfile";
import PromotionalTips from "./pages/Users/PromotionalTips";
import ChangePasswordSettings from "./pages/Users/ChangePasswordSettings";
import Notification from "./pages/Users/Notification";
import SenderInformation from "./pages/Users/SenderInformation";

function App() {
  return (
    <Routes>
      {/**public routes */}
      <Route path="/" element={<UserLandingPage />} />
      <Route path="/user-login" element={<UserSignin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password/" element={<ChangePassword />} />

      <Route path="/user-started" element={<GetStarted />} />
      <Route path="/user-registration" element={<UserRegistration />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/otp-verification" element={<OtpVerification />} />

      <Route path="/admin-registration" element={<AdminRegistration />} />
      <Route path="/admin-login" element={<AdminSignin />} />

      {/**User routes */}
      {/* <Route element={<PersistLogin allowedRole={["user"]} />}> */}
      {/* <Route element={<RequireUser allowedRole={["user"]} />}> */}
      <Route path="/users-dashboard" element={<UsersDashboard />} />
      <Route path="/settings/edit-profile" element={<EditProfile />} />
      <Route path="/settings/promotional-tips" element={<PromotionalTips />} />
      <Route
        path="/settings/change-password"
        element={<ChangePasswordSettings />}
      />
      <Route path="/track-rider" element={<TrackRider />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/send-package" element={<SendPackage />} />
      <Route path="/receiver-information" element={<ReceiverInformation />} />
      <Route path="/sender-information" element={<SenderInformation />} />
      <Route path="/payment-processing" element={<PaymentProcessing />} />

      <Route path="/promotional-ads" element={<Promotional />} />
      <Route path="/notification" element={<Notification />} />
      {/* </Route> */}
      {/* </Route> */}

      {/**Admin routes */}
      {/* <Route element={<PersistLogin allowedRole={["superAdmin"]} />}> */}
      {/* <Route element={<RequireAdmin allowedRole={["superAdmin"]} />}> */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      {/* </Route> */}
      {/* </Route> */}

      {/* <Route path="/settings" element={<Settings />} /> */}

      <Route path="/admtrack-rider" element={<AdmTrackRider />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/admtrack-rider/livetracker" element={<LiveTracker />} />
      <Route path="/assign-order" element={<AssignOrder />} />
      <Route path="/promotion" element={<Promotions />} />
      <Route path="/admin-wallet" element={<WalletAdmin />} />
      <Route path="/admin-rider" element={<AdminRider />} />
      <Route path="/admin-rider/add-rider" element={<AddRider />} />
      <Route path="/admin-logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
