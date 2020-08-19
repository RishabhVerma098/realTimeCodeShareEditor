import React from "react";
import "./ques.scss";
function Ques() {
  const question = [
    {
      style: "text",
      text: `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.`,
    },
    {
      style: "table",
      text: {
        heading: ["Symbol", "Value"],
        data: [
          ["I", "1"],
          ["V", "5"],
          ["X", "10"],
          ["L", "50"],
          ["C", "100"],
          ["D", "500"],
          ["M", "1000"],
        ],
      },
    },
    {
      style: "text",
      text: `For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

            Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:`,
    },
    {
      style: "point",
      text: [
        "I can be placed before V (5) and X (10) to make 4 and 9.",
        "X can be placed before L (50) and C (100) to make 40 and 90. ",
        "C can be placed before D (500) and M (1000) to make 400 and 900.",
      ],
    },
    {
      style: "text",
      text: `Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.`,
    },
    {
      style: "box",
      text: `Input: 3
      Output: "III"`,
      heading: `Example 1:`,
    },
    {
      style: "box",
      text: `Input: 4
      Output: "IV"`,
      heading: `Example 2:`,
    },
    {
      style: "box",
      text: `Input: 9
      Output: "IX"`,
      heading: `Example 3:`,
    },
  ];

  return (
    <div className="contain">
      <h2>Problem Statement</h2>
      {question.map((element) => {
        if (element.style === "text") {
          return <p className="text">{element.text}</p>;
        } else if (element.style === "table") {
          return (
            <table className="table">
              <tr>
                {element.text.heading.map((i) => {
                  return <th>{i}</th>;
                })}
              </tr>
              {element.text.data.map((i) => {
                return (
                  <tr>
                    {i.map((j) => {
                      return <th>{j}</th>;
                    })}
                  </tr>
                );
              })}
            </table>
          );
        } else if (element.style === "box") {
          return (
            <div className="box">
              <h4>{element.heading}</h4>
              <p
                style={{
                  padding: "1rem",
                  backgroundColor: "#002a36",
                  marginTop: "1rem",
                }}
              >
                {element.text}
              </p>
            </div>
          );
        }
        {
          /* else if (element.style === "point") {
          <ul>
            {element.text.map((i) => {
              return <li>{i}</li>;
            })}
          </ul>;
        } */
        }
      })}
    </div>
  );
}
export default Ques;

{
  /* <p
              className="table"
              style={{ padding: "1rem", backgroundColor: "#002a36" }}
            >
              {element.text}
            </p> */
}
