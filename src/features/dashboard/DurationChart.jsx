import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  size,
  largest,
  large,
  medium,
  small,
  smallest,
} from "../../utils/media-queries";
import { css } from "styled-components";
import { useState, useEffect } from "react";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  ${largest(css`
    padding: 2.4rem 3.2rem;
    grid-column: 3 / span 2;
  `)}

  ${large(css`
    padding: 2.4rem 3.2rem;
    grid-column: 3 / span 2;
  `)}
  
  ${medium(css`
    padding: 2.4rem 3.2rem;
    grid-column: 1 / span 3;
  `)}
  
  ${small(css`
    padding: 1rem;
    grid-column: 1 / span 2;
    h2 {
      text-align: center;
    }
  `)}
  
  ${smallest(css`
    padding: 0.5rem;
    grid-column: 1 / span 1;

    /* &.recharts-wrapper {
      display: grid;
      grid-template-rows: 1fr 1fr;
    } */

    h2 {
      text-align: center;
    }
  `)}


  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#7e22ce",
  },
];

function prepareData(startData, stays) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  // See the start data lists above.  This function increases the value for each pie category color
  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  // Get the breakdown of how many stays based on the start data lists below, increment each one if found in actual data
  // Filter them for only days that have their value > 0
  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

/* eslint react/prop-types: 0 */
function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);

  // Pie chart characteristics based on viewport
  const [isSmallest, updateSmallest] = useState(
    window.innerWidth < parseInt(size.smallest)
  );

  const updateMedia = () => {
    updateSmallest(window.innerWidth < parseInt(size.smallest));
  };

  // Access DOM
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    // Cleanup
    return () => window.removeEventListener("resize", updateMedia);
  });

  let height = 240;
  let verticalAlign = "middle";
  let align = "right";
  let width = "30%";
  let layout = "vertical";
  let cx = "40%";

  if (isSmallest) {
    height = 300;
    verticalAlign = "bottom";
    align = "center";
    width = "100%";
    layout = "horizontal";
    cx = "50%";
  }

  return (
    <ChartBox>
      <Heading as="h2">Stay duration summary</Heading>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx={cx}
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          {/* Tooltip shows data on hover */}
          <Tooltip />
          <Legend
            verticalAlign={verticalAlign}
            align={align}
            width={width}
            layout={layout}
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
