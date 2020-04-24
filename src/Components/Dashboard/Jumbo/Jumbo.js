import React from "react";
import style from "./jumboStyle.css";
const Jumbo = () => {
  return (
    <div className="jumbo" style={{ textAlign: "center" }}>
      <img
        style={{
          border: "solid 1px white",
          borderRadius: "20px",
          marginTop: "0px",
        }}
        width="1168px"
        height="230px"
        src={require("./jum.png")}
        // src="https://picsum.photos/1168/230.jpg"
      />
    </div>
  );
};

export default Jumbo;
// 1272x427

// 1168x230
//co
