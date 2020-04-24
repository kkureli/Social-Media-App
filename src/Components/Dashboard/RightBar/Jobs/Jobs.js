import React from "react";
import style from "./Jobs.css";
const Jobs = (props) => {
  const { jobs } = props;

  return (
    <div
      style={{
        listStyleType: "none",
        border: "1px white solid",
        backgroundColor: "white",
        width: "250px",
        borderRadius: "20px",
      }}
      className="jobs"
    >
      <ul>
        <li>
          <div>
            <span
              style={{
                color: "white",
                borderRadius: "9px",
                backgroundColor: "rgb(197,163,82)",
                width: "100px",
                padding: "7px",
              }}
            >
              {jobs && jobs.length}
            </span>
            <span className="ml-2">NEW</span>
          </div>
        </li>
        <li style={{ fontSize: "20px" }}>Recent Jobs</li>
        {jobs &&
          jobs.map((job) => {
            return (
              <ul>
                <li style={{ width: "200px" }}>
                  <div style={{ display: "flex" }}>
                    <span>
                      <img style={{ width: "45px" }} src={job.LogoUrl} />
                    </span>
                    <span>
                      <span style={{ color: "black", fontSize: "16px" }}>
                        {job.Title}
                      </span>{" "}
                      <p>{job.Company} </p>
                    </span>
                  </div>
                </li>
              </ul>
            );
          })}
        <li style={{ color: "black", fontSize: "18px" }}>
          {" "}
          <a href="">View Jobs</a>{" "}
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Jobs;
