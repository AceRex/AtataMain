import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: '"Quicksand", sans-serif',
  },
  details: {
    overflowX: "hidden",
    overflowY: "scroll",
    height: 150,
    fontSize: 14,
    fontFamily: '"Quicksand", sans-serif',
    padding: 7,
  },
  td: {
    padding: 7,
    fontWeight: 700,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Product Details</Typography>
        </AccordionSummary>
        <div className={classes.details}>
          This fabric is a elegant, first class quality fabric, graceful color
          
          * fabric: available in many colors, you pick up the color
          
          * Soft and Romantic.
          
          * This fabric is perfect for Hoodies sweatshirts Sweaters 
          
          <h5>Features</h5>
          
          *Brand: Smart wear
          
          *Sleeve:Regular sleeve
          
          *Style: Casual
          
          *length:regular length
          
          *Design: Blue-Navy Color, regular Sleeve Sweater
          
        </div>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Product Overview</Typography>
        </AccordionSummary>
        <div className={classes.details}>
          <table>
            <tr>
              <td className={classes.td}>Supply Type:</td>
              <td>OEM service</td>
              <td className={classes.td}>Place of Origin:</td>
              <td>Ghana</td>
            </tr>
            <tr>
              <td className={classes.td}>Brand Name:</td>
              <td>Smart wear</td>
              <td className={classes.td}>Model Number:</td>
              <td>1234</td>
            </tr>
            <tr>
              <td className={classes.td}>Feature:</td>
              <td>Breathable</td>
              <td className={classes.td}>Material:</td>
              <td>COTTON</td>
            </tr>
            <tr>
              <td className={classes.td}>Technics:</td>
              <td>Computer Knitted</td>
              <td className={classes.td}>Style:</td>
              <td>Pullover</td>
            </tr>
            <tr>
              <td className={classes.td}>Pattern Type:</td>
              <td>Solid</td>
              <td className={classes.td}>Sleeve Style:</td>
              <td>Regular</td>
            </tr>
            <tr>
              <td className={classes.td}>Collar:</td>
              <td>O-Neck</td>
              <td className={classes.td}>Hooded:</td>
              <td>No</td>
            </tr>
            <tr>
              <td className={classes.td}>Thickness:</td>
              <td>Standard</td>
              <td className={classes.td}>Closure Type:</td>
              <td>None</td>
            </tr>
            <tr>
              <td className={classes.td}>Sleeve Length(cm):</td>
              <td>Full</td>
              <td className={classes.td}>MOQ:</td>
              <td>50 Piece</td>
            </tr>
            <tr>
              <td className={classes.td}>Packing:</td>
              <td>1pc/polybag</td>
              <td className={classes.td}>Delivery time:</td>
              <td>50 Piece</td>
            </tr>
          </table>
        </div>
      </Accordion>
    </div>
  );
}
