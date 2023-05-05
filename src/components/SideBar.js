import "./SideBarStyles.css";
import logo from "../assets/Logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsIcon from "@mui/icons-material/Settings";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import LockIcon from "@mui/icons-material/Lock";

const SideBar = () => {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="manageContainer">
          MANAGE
          <div className="dashboard">
            <DashboardIcon /> &nbsp;&nbsp;Dashboard
          </div>
          <div className="dashboard">
            <AccountBalanceWalletIcon /> &nbsp;&nbsp;Transaction
          </div>
          <div className="dashboard">
            <SwapHorizIcon /> &nbsp;&nbsp;My Wallet
          </div>
          <div className="dashboard">
            <PieChartIcon /> &nbsp;&nbsp;Analytics
          </div>
          <div className="settings">
            <SettingsIcon /> &nbsp;&nbsp; Settings
          </div>
        </div>
        <div className="otherContainer">
          OTHER
          <div className="theme">
            <ToggleOffIcon /> &nbsp;&nbsp; Theme
          </div>
          <div className="theme">
            <LockIcon /> &nbsp;&nbsp; Security
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
