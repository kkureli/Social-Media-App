import React, { useEffect } from "react";
import LeftBarCss from "./leftBar.css";
const LeftBar = () => {
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (document.location.pathname === "/") {
  //     document.body.addEventListener("scroll", myFunction);
  //   } else {
  //     document.body.removeEventListener("scroll", myFunction);
  //   }
  // });

  return (
    <>
      <ul
        className="leftUl"
        style={{
          listStyleType: "none",
          border: "1px white solid",
          backgroundColor: "white",
          width: "190px",
          borderRadius: "20px",
          // position: "fixed",
        }}
      >
        <li>
          <img src="https://img.icons8.com/material-outlined/24/000000/activity-feed-2.png" />
          Feed
        </li>
        <li>
          {" "}
          <img src="https://img.icons8.com/pastel-glyph/64/000000/teacher.png" />
          Mentoring
        </li>
        <li>
          <img src="https://img.icons8.com/android/24/000000/briefcase.png" />
          Jobs
        </li>
        <li>
          <img src="https://img.icons8.com/android/24/000000/picture.png" />
          Photos
        </li>
        <li>
          <img src="https://img.icons8.com/android/24/000000/groups.png" />
          Groups
        </li>
        <li>
          <img src="https://img.icons8.com/android/24/000000/tear-off-calendar.png" />
          Events
        </li>
      </ul>
    </>
  );
};

export default LeftBar;
