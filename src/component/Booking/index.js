import { Component } from "react";

import "./index.css";

const spotsList = {
  srmt: [
    1423,
    8790,
    5632,
    4198,
    7265,
    3084,
    9512,
    6748,
    2031,
    5876,
    1357,
    8642,
    6901,
    2478,
    5136,
    8024,
    3769,
    1584,
    4290,
    7653,
    6042,
    8913,
    2736,
    5108,
    7346,
    1962,
    8450,
    3279,
    6824,
    4591,
  ],

  jntk: [
    7130,
    2485,
    5863,
    9407,
    3712,
    6958,
    1306,
    8724,
    5049,
    3196,
    6783,
    4205,
    1538,
    9674,
    8413,
    5062,
    3927,
    1850,
    7314,
    6249,
    8906,
    4137,
    2768,
    5891,
    7042,
    1365,
    9487,
    3572,
    6210,
    8053,
  ],

  bhanugudi: [
    4628,
    3174,
    7890,
    2056,
    5381,
    9746,
    6308,
    8419,
    1530,
    7694,
    2845,
    5103,
    9376,
    4620,
    1958,
    6301,
    8742,
    3985,
    7512,
    6094,
  ],

  beach: [
    12,
    13,
    14,
    15,
    3248,
    5869,
    1703,
    9258,
    4391,
    7680,
    3512,
    6947,
    8025,
    1376,
  ],

  dmart: [
    16,
    17,
    18,
    8153,
    9640,
    2371,
    5709,
    4832,
    6194,
    3658,
    7082,
    1946,
    5321,
  ],
};

const subAreas = ["srmt", "jntk", "bhanugudi", "beach", "dmart"];

let localBtnList = localStorage.getItem("activeBtnList");
localBtnList = JSON.parse(localBtnList);

class Booking extends Component {
  state = { subArea: "", isSelected: false, activeBtnList: localBtnList };

  changeOption = (event) => {
    this.setState({ subArea: event.target.value, isSelected: true });
  };

  toggleBtn = (id) => {
    const { activeBtnList } = this.state;
    if (activeBtnList.includes(id)) {
      const filteredList = activeBtnList.filter((each) => each !== id);
      this.setState({ activeBtnList: filteredList });
    } else {
      this.setState((prevState) => ({
        activeBtnList: [...prevState.activeBtnList, id],
      }));
    }
  };

  onBook = () => {
    const { activeBtnList } = this.state;
    const jsonStr = JSON.stringify(activeBtnList);
    localStorage.setItem("activeBtnList", jsonStr);
    console.log(JSON.stringify(activeBtnList));
  };

  render() {
    const { subArea, isSelected, activeBtnList } = this.state;

    const spots = spotsList[subArea];
    return (
      <div className="spots-container">
        <select value={subArea} onChange={this.changeOption}>
          <option value="">Select Your Option</option>
          {subAreas.map((each) => (
            <option key={each} value={each}>
              {each}
            </option>
          ))}
        </select>
        <h1>Available Spots</h1>
        {isSelected && (
          <div>
            {spots.map((each) => {
              const isActive = activeBtnList.includes(each);
              const btnClassName = isActive
                ? `button-input active-btn`
                : "button-input";
              return (
                <input
                  key={each}
                  type="button"
                  className={btnClassName}
                  onClick={() => this.toggleBtn(each)}
                />
              );
            })}
          </div>
        )}
        <div>
          <button type="button" onClick={this.onBook}>
            Book
          </button>
        </div>
      </div>
    );
  }
}

export default Booking;
