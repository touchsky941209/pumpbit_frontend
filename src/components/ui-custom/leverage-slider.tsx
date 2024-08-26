import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface LeverageSliderProps {
  onLeverageChange: (value: number) => void;
  leverage: number;
}

const LeverageSlider: React.FC<LeverageSliderProps> = ({
  onLeverageChange,
  leverage,
}) => {
  const marks = {
    1: {
      style: {
        color: "#eee",
      },
      label: <strong>1x</strong>,
    },
    5: {
      style: {
        color: "#eee",
      },
      label: <strong>5x</strong>,
    },
    10: {
      style: {
        color: "#eee",
      },
      label: <strong>10x</strong>,
    },
    25: {
      style: {
        color: "#eee",
      },
      label: <strong>25x</strong>,
    },
    50: {
      style: {
        color: "#eee",
      },
      label: <strong>50x</strong>,
    },
    75: {
      style: {
        color: "#eee",
      },
      label: <strong>75x</strong>,
    },
    100: {
      style: {
        color: "#eee",
      },
      label: <strong>100x</strong>,
    },
    200: {
      style: {
        color: "#eee",
      },
      label: <strong>200x</strong>,
    },
  };

  const handleChange = (value: any) => {
    onLeverageChange(value);
  };

  return (
    <div className="p-4">
      <Slider
        min={1}
        max={200}
        marks={marks}
        defaultValue={1}
        trackStyle={{ backgroundColor: "#ffffff" }}
        activeDotStyle={{ color: "white", border: "none" }}
        railStyle={{ backgroundColor: "hsl(247, 54%, 60%)" }}
        handleStyle={{
          height: 15,
          width: 15,
          border: "none",
          backgroundColor: "#ffffff",
          opacity: 1,
        }}
        value={leverage}
        onChange={handleChange}
      />
    </div>
  );
};

export default LeverageSlider;
