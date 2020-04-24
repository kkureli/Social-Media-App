import React from "react";
import moment from "moment";
import style from "./notifStyle.css";
import { colors } from "@material-ui/core";
const Notifications = (props) => {
  const { notifications } = props;

  return (
    <div
      style={{
        listStyleType: "none",
        border: "1px white solid",
        backgroundColor: "white",
        width: "250px",
        height: "250px",
        overflow: "scroll",
        borderRadius: "20px",
      }}
      className="notif"
    >
      <ul>
        {" "}
        <span style={{ color: "rgb(27,157,226" }}> Last Activities</span>
        {notifications &&
          notifications.map((item) => {
            return (
              <li key={item.id}>
                <span style={{ display: "block" }}>{item.user}</span>
                <span>{item.content}</span>
                <div className="grey-text note-date">
                  {moment(item.time.toDate()).fromNow()}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notifications;
