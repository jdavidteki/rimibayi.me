import React from "react";
import "./Menu.css";

function Menu(props) {
  const { className } = props;

  return (
    <div className={`menu ${className || ""}`}>
      <div className="frame-17814">
        <div className="ng-2 poppins-medium-white-20px">
          <span className="spanz6rcl poppins-medium-white-20px">NG</span>
        </div>
        <img className="flags" src="/static/img/flags-1@2x.png" />
      </div>
      <div className="iconframe"></div>
    </div>
  );
}

export default Menu;
