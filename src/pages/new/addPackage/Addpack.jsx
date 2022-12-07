import Sidebar from "../../../components/sidebar/Sidebar";
import Navbars from "../../../components/navbar/Navbars";
import "./Addpack.scss";
import { Link } from "react-router-dom";
import addsquare from "../../../svg/addsquare.svg";
import Arrow1 from "../../../svg/arrow1";
import { NavLink } from "react-router-dom";

const Addpack = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbars title="Package" />

          <div className="featured">
            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                borderRadius: "3%",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "240px",
              }}
            >
              <div
                style={{
                  marginTop: "7%",
                  marginBottom: "9%",
                  marginLeft: "7%",
                  // margin: "5%",
                  padding: "1%",
                }}
              >
                <img
                  src={addsquare}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    // height: "10%",
                    width: "140px",
                    height: "80px",
                    marginLeft: "6%",
                  }}
                />
                <div
                  className="featuredTitle"
                  style={{
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",
                    marginLeft: "",
                    color: "#011627",
                    marginTop: "5%",
                    display: "flex",
                    flexDirection: "",
                    flexGrow: 1,
                  }}
                >
                  {/* <Link to="/packdetails">Add Package</Link> */}
                  <NavLink
                    to="/addpackform"
                    style={({}) => ({
                      textDecoration: "none",
                      color: "black",
                      width: "100%",
                    })}
                  >
                    Add Package
                  </NavLink>

                  <p
                    style={{
                      marginTop: "1%",
                      position: "relative",
                      left: "3%",
                    }}
                  >
                    <Arrow1 className="" />
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "4%",
                }}
              >
                <div className="featuredMoneyContainer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpack;
