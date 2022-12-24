import React from "react";
import classNames from "classnames";

function Pannel({ children, className, ...rest }) {
  return <div rest={...rest} style={{borderRadius:"10px",border:"1px solid black",padding:"10px", backgroundColor:"lightGray"}}>{children}</div>;
}

export default Pannel;
