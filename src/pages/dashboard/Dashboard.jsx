import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import "./Dashboard.scss";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import { userData } from "../../dummyData";
import stat from "../../svg/stat.png";
import arrow from "../../svg/arrow.svg";

const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar title="Dashboard" />

          <div
            className="featured"
            style={{
              marginTop: "1.5%",
            }}
          >
            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#FDFFF7",
                  marginRight: "8%",
                  // backgroundColor: "green",
                  padding: "4%",
                }}
              >
                <img
                  src={stat}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    height: "32px",
                    width: "32px",

                    // marginRight: "11%",
                    // borderRadius: "50%",
                    // overflow: "visible",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "1%",
                }}
              >
                <div
                  className="featuredTitle"
                  style={{
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",

                    color: "#BFC5C9",
                  }}
                >
                  Total Teacher
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "600",

                      color: "#011627",
                    }}
                  >
                    25
                  </span>
                </div>
              </div>
            </div>

            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#FDFFF7",
                  marginRight: "9%",
                  // backgroundColor: "green",
                  padding: "4%",
                }}
              >
                <img
                  src={stat}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    height: "32px",
                    width: "32px",
                    // marginRight: "11%",
                    // borderRadius: "50%",
                    // overflow: "visible",
                  }}
                />
              </div>
              <div>
                <div
                  className="featuredTitle"
                  style={{
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",

                    color: "#BFC5C9",
                  }}
                >
                  Total Student
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "600",

                      color: "#011627",
                    }}
                  >
                    452
                  </span>
                </div>
              </div>
            </div>

            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#FDFFF7",
                  marginRight: "9%",
                  // backgroundColor: "green",
                  padding: "4%",
                }}
              >
                <img
                  src={stat}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    height: "32px",
                    width: "32px",
                    // marginRight: "11%",
                    // borderRadius: "50%",
                    // overflow: "visible",
                  }}
                />
              </div>
              <div>
                <div
                  className="featuredTitle"
                  style={{
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",

                    color: "#BFC5C9",
                  }}
                >
                  Present Average
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "600",

                      color: "#011627",
                    }}
                  >
                    89%
                  </span>
                </div>
              </div>
            </div>

            <div
              className="featuredItem"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#FDFFF7",
                  marginRight: "9%",
                  // backgroundColor: "green",
                  padding: "4%",
                }}
              >
                <img
                  src={stat}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    height: "32px",
                    width: "32px",
                    // marginRight: "11%",
                    // borderRadius: "50%",
                    // overflow: "visible",
                  }}
                />
              </div>
              <div>
                <div
                  className="featuredTitle"
                  style={{
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",

                    color: "#BFC5C9",
                  }}
                >
                  Abesent Average
                </div>
                <div className="featuredMoneyContainer">
                  <span
                    className="featuredMoney"
                    style={{
                      // paddingLeft: "26.5%",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "600",

                      color: "#011627",
                    }}
                  >
                    11%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Chart title="6165" dataKey="Active User" />

          <span>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "MonumentExtended",
                  color: "#011627",
                  fontStyle: "Normal",
                  fontWeight: "400",
                  forntSize: "30.5px",
                  lineHeight: "37px",

                  paddingTop: "3%",
                  paddingLeft: "2.5%",
                  paddingBottom: "1%",
                }}
              >
                Availables
              </h1>

              <p
                style={{
                  display: "flex",
                  width: "84%",
                  border: "0.5px solid #011627",
                  marginTop: "25px",
                  marginLeft: "52px",
                  marginRight: "32px",
                }}
              ></p>
            </div>
          </span>

          <div className="featured-bottom">
            <div
              className="featuredItem2"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "400px",
                minWidth: "400px",
                // padding: "2.5%",
              }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#FDFFF7",
                  marginRight: "0%",
                  marginLeft: "5%",
                  marginTop: "5%",
                  marginBottom: "5%",
                  padding: "4%",
                }}
              >
                <img
                  src={stat}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    height: "32px",
                    width: "32px",
                    // marginRight: "11%",
                    // borderRadius: "50%",
                    // overflow: "visible",
                  }}
                />
              </div>
              <div
                className="featuredTitle"
                style={{
                  paddingRight: "9%",
                  padding: "2.5% 4.4%",
                }}
              >
                <h3>New</h3> <h3>Registration</h3>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  backgroundColor: "rgb(194, 194, 247)",
                  borderRadius: "0 28px 28px 0",
                  maxWidth: "100px",
                  // padding: "0 6%",
                }}
              >
                <img
                  src={arrow}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    // marginLeft: "1%",
                    // marginRight: "11%",
                    // margin: "auto 0",
                    alignSelf: "center",
                    display: "block",
                    backgroundColor: "rgb(194, 194, 247)",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <div
              className="featuredItem2"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "400px",
                minWidth: "400px",
                // padding: "2.5%",
              }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#FDFFF7",
                  marginRight: "0%",
                  marginLeft: "5%",
                  marginTop: "5%",
                  marginBottom: "5%",
                  padding: "4%",
                }}
              >
                <img
                  src={stat}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    height: "32px",
                    width: "32px",
                    // marginRight: "11%",
                    // borderRadius: "50%",
                    // overflow: "visible",
                  }}
                />
              </div>
              <div
                className="featuredTitle"
                style={{
                  paddingRight: "12%",
                  padding: "2.5% 4.4%",
                }}
              >
                <h3>Department</h3>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  backgroundColor: "rgb(194, 194, 247)",
                  borderRadius: "0 28px 28px 0",
                  // padding: "0 6%",
                  maxWidth: "100px",
                }}
              >
                <img
                  src={arrow}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    // marginLeft: "1%",
                    // marginRight: "11%",
                    // margin: "auto 0",
                    alignSelf: "center",
                    display: "block",
                    backgroundColor: "rgb(194, 194, 247)",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <div
              className="featuredItem2"
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                alignItems: "center",
                maxWidth: "400px",
                minWidth: "400px",
                // justifyContent: "space-between",
                // padding: "2.5%",
              }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#FDFFF7",
                  marginRight: "0%",
                  marginLeft: "5%",
                  marginTop: "5%",
                  marginBottom: "5%",
                  padding: "4%",
                }}
              >
                <img
                  src={stat}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    height: "32px",
                    width: "32px",
                    // marginRight: "11%",
                    // borderRadius: "50%",
                    // overflow: "visible",
                  }}
                />
              </div>
              <div
                className="featuredTitle"
                style={{
                  paddingRight: "7%",
                  padding: "2.5% 4.4%",
                }}
              >
                <h3>Student Details</h3>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  backgroundColor: "rgb(194, 194, 247)",
                  borderRadius: "0 28px 28px 0",
                  maxWidth: "100px",
                  // padding: "0 6%",
                }}
              >
                <img
                  src={arrow}
                  alt=""
                  srcset=""
                  className="image"
                  style={{
                    // marginLeft: "1%",
                    // marginRight: "11%",
                    // margin: "auto 0",
                    alignSelf: "center",
                    display: "block",
                    backgroundColor: "rgb(194, 194, 247)",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
