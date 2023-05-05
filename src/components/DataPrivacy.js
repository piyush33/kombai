import "./DataPrivacyStyles.css";
import user from "../assets/user.png";
import notifications from "../assets/notifications.png";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DataPrivacy = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="dataPrivacyContainer">
          <div className="heading">Data Privacy</div>
          <div className="navbar">
            <div className="searchBar">
              <SearchIcon className="searchIcon" />
              <input placeholder="Search..." className="search" />
            </div>
            <img src={notifications} className="notifications" />
            <img src={user} className="user" />
          </div>
        </div>
        <div className="accordion">
          <Accordion
            sx={{ marginBottom: "30px", border: "1px solid #ECF1F6", backgroundColor: "#FDFDFD", borderRadius: "10px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>What is personal data at FINDASH</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#9CA4AB" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "30px", border: "1px solid #ECF1F6", backgroundColor: "#FDFDFD", borderRadius: "10px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>Your Privacy Rights at FINDASH</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#9CA4AB" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "30px", border: "1px solid #ECF1F6", backgroundColor: "#FDFDFD", borderRadius: "10px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Personal Data FINDASH collects from you
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#9CA4AB" }}>
                In addition to this Privacy Policy, we provide data and privacy information embedded in our products and
                certain features that ask to use your personal information. This product-specific information is
                accompanied by our Data & Privacy Icon.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "30px", border: "1px solid #ECF1F6", backgroundColor: "#FDFDFD", borderRadius: "10px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Personal Data FINDASH Receives from other sources
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#9CA4AB" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "30px", border: "1px solid #ECF1F6", backgroundColor: "#FDFDFD", borderRadius: "10px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>FINDASH’s use of personal Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#9CA4AB" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "30px", border: "1px solid #ECF1F6", backgroundColor: "#FDFDFD", borderRadius: "10px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>FINDASH’s sharing of personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#9CA4AB" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "30px", border: "1px solid #ECF1F6", backgroundColor: "#FDFDFD", borderRadius: "10px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Protection of personal data at FINDASH
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#9CA4AB" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default DataPrivacy;
