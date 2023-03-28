import { useState } from "react";
import TurnLeft from "./TurnLeft";
import TurnRight from "./TurnRight";
import { WiWindDeg } from "react-icons/wi";
import { GiShrug, GiForest } from "react-icons/gi";
import image from "../../images/path.svg";

function ThePath() {
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);

  const handleToggleLeft = function () {
    setToggleLeft(!toggleLeft);
    setToggleRight(false);
    document.getElementById("right").disabled = true;
  };

  const handleToggleRight = function () {
    setToggleRight(!toggleRight);
    setToggleLeft(false);
    document.getElementById("left").disabled = true;
  };

  return (
    <div>
      <h1>The Mysterious Island</h1>

      <div
        className="games"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div style={{ background: "white", opacity: "80%", padding: '5px' }}>
          <p>
            <GiForest size="4rem" />
          </p>
          <h3>The Path</h3>
          <div style={{ margin: "5px", padding: "5px" }}>
            <p>
              Refreshed you stand up again, stepping over the small stream and
              follow the path father into the forest, until you come to a fork.
              You can turn left or right. Looking down both paths, they seem to be largely the same. No help for it though, you'll have to pick a direction...
            </p>
          </div>
        </div>
        <div className="games" style={{ background: "white", opacity: "80%" }}>
        <h3>Turn left or right?</h3>
          {toggleRight === false ? (
            <button id="right">
              <WiWindDeg
                onClick={handleToggleRight}
                size="4rem"
                style={{ transform: "rotate(90deg)" }}
              />
            </button>
          ) : (
            <TurnRight />
          )}

          <p>
            <GiShrug size="4rem" />
          </p>

          {toggleLeft === false ? (
            <button id="left">
              <WiWindDeg
                onClick={handleToggleLeft}
                size="4rem"
                style={{ transform: "rotate(270deg)" }}
              />
            </button>
          ) : (
            <TurnLeft />
          )}
        </div>
      </div>
    </div>
  );
}

export default ThePath;
