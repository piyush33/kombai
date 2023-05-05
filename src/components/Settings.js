import "./SettingsStyles.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryptionOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUserOutlined";

const Settings = () => {
  return (
    <>
      <div className="setting">
        Settings
        <div className="personalInfo">
          Personal Info
          <div className="profileContainer">
            <div className="profile">
              <PersonOutlineIcon /> &nbsp; &nbsp;Edit Profile
            </div>
            <div className="chevron">
              <ChevronRightIcon />
            </div>
          </div>
          <div className="passwordContainer">
            <div className="password">
              <EnhancedEncryptionIcon /> &nbsp; &nbsp;Password
            </div>
            <div className="chevron">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <div className="general">
          General
          <div className="debitsContainer">
            <div className="debits">
              <AccountBalanceWalletIcon /> &nbsp; &nbsp;Direct Debits
            </div>
            <div className="chevron">
              <ChevronRightIcon />
            </div>
          </div>
          <div className="debitsContainer">
            <div className="debits">
              <CalendarMonthIcon /> &nbsp; &nbsp;Scheduled Transfer
            </div>
            <div className="chevron">
              <ChevronRightIcon />
            </div>
          </div>
          <div className="dataContainer">
            <div className="data">
              <VerifiedUserIcon /> &nbsp; &nbsp;Data Privacy
            </div>
            <div className="chevron">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <div className="upgradeContainer">
          <div className="upgradeTitle">Upgrade to PRO</div>
          <div className="upgradeBody">
            Get your pro feature by Subscribe <br /> FinPro and easy to manage your
            <br /> financial
          </div>
          <button className="upgradeButton">Upgrade</button>
        </div>
      </div>
    </>
  );
};

export default Settings;
