import React, { Component } from "react";
import '../productMain.css'

class Color extends Component {
  render() {
    return (
      <div className='color-select'>
          <div className="color">
            <table style={{ width: "100%" }}>
              <tr>
                <td>
                  <p className="Name"> Available Sizes: </p>
                </td>
                <td>
                  <div className="Select"></div>
                </td>
              </tr>
            </table>
          </div>
      </div>
    );
  }
}

export default Color;
