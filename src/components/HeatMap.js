import React, { Component } from "react";
import Rect from "./Rect";
export class HeatMap extends Component {
  randomNbr = () => {
    let r = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
    return r;
  };
  generateAray() {
    let ran = [];
    for (let i = 0; i < this.props.value; i++) {
      ran.push(this.randomNbr());
    }
    return ran;
  }
  generateMap = () => {
    let recTags = [],
      x = 0,
      y = 0;
    let arr = this.generateAray();
    for (let i = 0; i < this.props.value; i++) {
      if (arr[i] >= 0) {
        recTags.push(
          <Rect
            width="8"
            height="8"
            key={i}
            x={x}
            y={y}
            data-count={arr[i]}
            fill={"rgb(255 0 0 / " + arr[i] + "%)"}
          ></Rect>
        );
        y += 11;
      } else {
        recTags.push(
          <Rect
            width="8"
            height="8"
            key={i}
            x={x}
            y={y}
            fill={"rgb(0 255 0 / " + -arr[i] + "%)"}
          ></Rect>
        );
        y += 11;
      }

      if (y % 7 == 0) {
        x += 11;
        y = 0;
      }
    }
    return recTags;
  };
  render() {
    return ( <div>
        <svg width="auto" height="auto" className="js-calendar-graph-svg">
            <g>
                {this.generateMap()}  
            </g>
        </svg>
    </div>)
  }
}
export default HeatMap;
