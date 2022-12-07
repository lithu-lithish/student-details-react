import "./sidebar.scss";
import React from "react";
import { logout } from "../../firebaseConfig";

import Attend from "../../svg/attend";
import Dashboard from "../../svg/dashboard";
import Register from "../../svg/register";

import Logo from "../../svg/logogym.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div
        style={{ margin: "8% 0 auto", paddingTop: "2%", textAlign: "center" }}
      >
        <h2
          className="logo"
          style={{
            fontFamily: "MonumentExtended",
            color: "#011627",
            fontStyle: "Normal",
            fontWeight: "800",
            forntSize: "30.5px",
            lineHeight: "37px",
            justifyContent: "center",
            alignItem: "center",
            // paddingTop: "10%",
            // paddingBottom: "3%",
          }}
        >
          STUDENT FORM
          <br />
        </h2>
      </div>

      <div style={{ paddingTop: "8%" }}>
        {/* <hr style={{}} /> */}
        <p
          style={{
            // width: "84%",
            border: "1px solid #E6E8E9",
          }}
        ></p>
      </div>
      <div className="center">
        <ul>
          <li>
            <Dashboard className="icon" />
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid rgb(194, 194, 247)" : "",
              })}
            >
              <span>Dashboard </span>
            </NavLink>
          </li>

          <li>
            <Register className="icon" />
            <NavLink
              to="/registration"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid rgb(194, 194, 247)" : "",
              })}
            >
              <span>New Registration</span>
            </NavLink>
          </li>

          <li>
            <Attend className="icon" />
            <NavLink
              to="/table"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid rgb(194, 194, 247)" : "",
              })}
            >
              <span>Student list</span>
            </NavLink>
          </li>

          <li
            onClick={logout}
            style={{ backgroundColor: "#d1d9e8" }}
            // style={{ backgroundColor: "rgb(194, 194, 247)" }}
            // style={{ backgroundColor: "rgb(249, 186, 186) " }}
          >
            <Attend className="icon" />
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid rgb(194, 194, 247)" : "",
              })}
            >
              <span>Log Out</span>
            </NavLink>
          </li>

          {/* <li
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          >
            <ExitToAppIcon
              className="icon"
              style={{
                color: "crimson",
              }}
            />
            <span
              style={{
                color: "crimson",
              }}
            >
              Logout
            </span>
          </li> */}
        </ul>
      </div>

      {/* <div className="bottom">
<div
className="colorOption"
onClick={() => dispatch({ type: "LIGHT" })}
></div>
<div
className="colorOption"
onClick={() => dispatch({ type: "DARK" })}
></div>
</div> */}
    </div>
  );
};

export default Sidebar;
