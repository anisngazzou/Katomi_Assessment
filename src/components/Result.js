import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FileSaver from "file-saver";
import HeatMap from "./HeatMap";

export class Result extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  svgToPng = (svg, width, height) => {
    return new Promise((resolve, reject) => {
      let canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");

      // Set background to white
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      let xml = new XMLSerializer().serializeToString(svg);
      let dataUrl = "data:image/svg+xml;utf8," + encodeURIComponent(xml);
      let img = new Image(width, height);

      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        let imageData = canvas.toDataURL("image/png", 1.0);

        resolve(imageData);
      };

      img.onerror = () => reject();

      img.src = dataUrl;
    });
  };

  handleDownload = async () => {
    const chart = this.currentChart;
    let chartSVG = ReactDOM.findDOMNode(chart).children[0];

    const pngData = await this.svgToPng(chartSVG, 600, 300);
    FileSaver.saveAs(pngData, "test.png");
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Success" />
            <h1> Your Result</h1>
           <b>{this.props.values.value>0  ? 'Votre HeatMap ' : 'X doit etre positive et <> 0'}</b>.
           
            <HeatMap
              ref={(chart) => (this.currentChart = chart)}
              value={this.props.values.value}
            />

{this.props.values.value>0  &&
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleDownload}
              startIcon={<SaveIcon />}
            >
             
              Save
            </Button> }

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              startIcon={<ArrowBackIosIcon />}
            >
              Back
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Result;
