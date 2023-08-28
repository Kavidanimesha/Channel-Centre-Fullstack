import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import DvrIcon from '@mui/icons-material/Dvr';
import MedicationIcon from '@mui/icons-material/Medication';
import InventoryIcon from '@mui/icons-material/Inventory';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import NavBar from "../pages/NavBar";
import { Grid } from "@mui/material";

const drawerWidth = 240;

function SideBar(props) {
  const navigate = useNavigate();

  const [Item1, setItem1] = React.useState("");
  const [Item2, setItem2] = React.useState("");
  const [Item3, setItem3] = React.useState("");
  const [Item4, setItem4] = React.useState("");
  const [Item5, setItem5] = React.useState(""); 
  const [Item6, setItem6] = React.useState(""); 
  const [Item7, setItem7] = React.useState(""); 

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
      <Grid item xs={12} align='center'>
        <img src="/images/Logo.jpg" alt="logo"  style={{height:'51px', width: '51px'}}/>
      </Grid> 
      <List style={{ backgroundColor: "#0d47a1", flex:1 }}>
        
        <ListItem
          style={{ marginBottom: "8px" }}
          onClick={() => {
            navigate("/cashier-bill-form");
            setItem1("/cashier-bill-form");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={{
                color: Item1 === "/cashier-bill-form" ? "black" : "white",
              }}
            >
              <MonetizationOnSharpIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Cashier Bill"}
              style={{
                color: Item1 === "/cashier-bill-form" ? "black" : "white",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          style={{ marginBottom: "8px" }}
          onClick={() => {
            navigate("/create-patient-records");
            setItem6("/create-patient-records");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={{
                color: Item6 === "/create-patient-records" ? "black" : "white",
              }}
            >
              <DvrIcon  />
            </ListItemIcon>
            <ListItemText
              primary={"Create Patient Records"}
              style={{
                color: Item6 === "/create-patient-records" ? "black" : "white",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          style={{ marginBottom: "8px" }}
          onClick={() => {
            navigate("/prescription");
            setItem2("/prescription");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={{
                color: Item2 === "/prescription" ? "black" : "white",
              }}
            >
              <MedicationIcon  />
            </ListItemIcon>
            <ListItemText
              primary={"Prescription"}
              style={{
                color: Item2 === "/prescription" ? "black" : "white",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          style={{ marginBottom: "8px" }}
           
          onClick={() => {
            navigate("/view-patient-records");
            setItem7("/view-patient-records");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={{
                color: Item7 === "/view-patient-records" ? "black" : "white",
              }}
            >
              <DvrIcon  />
            </ListItemIcon>
            <ListItemText
              primary={"Patient Records"}
              style={{
                color: Item7 === "/view-patient-records" ? "black" : "white",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          style={{ marginBottom: "8px" }}
           
          onClick={() => {
            navigate("/prescription-view-form");
            setItem3("/prescription-view-form");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={{
                color: Item3 === "/prescription-view-form" ? "black" : "white",
              }}
            >
              <MedicationIcon  />
            </ListItemIcon>
            <ListItemText
              primary={"Prescription View"}
              style={{
                color: Item3 === "/prescription-view-form" ? "black" : "white",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          style={{ marginBottom: "8px" }}
           
          onClick={() => {
            navigate("/pharmacy-bill-form");
            setItem4("/pharmacy-bill-form");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={{
                color: Item4 === "/pharmacy-bill-form" ? "black" : "white",
              }}
            >
              <MonetizationOnSharpIcon  />
            </ListItemIcon>
            <ListItemText
              primary={"Pharmacy Bill"}
              style={{
                color: Item4 === "/pharmacy-bill-form" ? "black" : "white",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          style={{ marginBottom: "8px" }}
           
          onClick={() => {
            navigate("/inventory");
            setItem5("/inventory");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={{
                color: Item5 === "/inventory" ? "black" : "white",
              }}
            >
              <InventoryIcon  />
            </ListItemIcon>
            <ListItemText
              primary={"Inventory"}
              style={{
                color: Item5 === "/inventory" ? "black" : "white",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideBar;
