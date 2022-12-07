import Sidebar from "../../../components/sidebar/Sidebar";
import Navbars from "../../../components/navbar/Navbars";
import Chart from "../../../components/chart/Chart";
import arrowW from "../../../svg/arrowW.svg";
import tick from "../../../svg/tick.svg";
import "./Packdetails.scss";

// import addsquare from "../../../svg/addsquare.svg";
// import Arrow1 from "../../../svg/arrow1";

import stat from "../../../svg/stat.svg";
import arrow from "../../../svg/arrow.svg";

const Packdetails = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbars title="Package" />

          <div className="featured">
            <div
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                borderRadius: "16px 16px 16px 16px",
                alignItems: "center",
                maxWidth: "360px",
                minWidth: "360px",
                margin: "2%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D0FD3E",
                  borderRadius: "16px",
                  padding: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "1.7%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  Package Name
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  1 Month package
                </div>
              </div>

              <div className="featuredItem2">
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "5%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    padding: "2%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      marginLeft: "-5%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Duration
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        marginLeft: "-5%",
                        color: "#011627",
                      }}
                    >
                      30 Days
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "9%",
                    marginTop: "7.3%",
                    marginBottom: "5%",
                    padding: "0%",
                    paddingRight: "1.7%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      //   marginLeft: "-23%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Amount
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        // marginLeft: "-23%",
                        color: "#011627",
                      }}
                    >
                      ₹1000
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  left: "18%",
                  paddingBottom: "4%",
                }}
              >
                <div
                  style={{
                    padding: "3%",
                    display: "flex",
                    flexDirection: "row",
                    width: "55%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    border: "1px solid #D0FD3E",
                    backgroundColor: "#0038FF",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "29px",
                    }}
                  >
                    Edit Package
                  </h4>
                  <img
                    src={arrowW}
                    style={{
                      marginLeft: "6px",
                      width: "15%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                borderRadius: "16px 16px 16px 16px",
                alignItems: "center",
                maxWidth: "360px",
                minWidth: "360px",
                margin: "2%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D0FD3E",
                  borderRadius: "16px",
                  padding: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "1.7%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  Package Name
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  2 Month package
                </div>
              </div>

              <div className="featuredItem2" style={{}}>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "5%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    padding: "2%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      marginLeft: "-5%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Duration
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        marginLeft: "-5%",
                        color: "#011627",
                      }}
                    >
                      60 Days
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "9%",
                    marginTop: "7.3%",
                    marginBottom: "5%",
                    padding: "0%",
                    paddingRight: "1.7%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      //   marginLeft: "-23%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Amount
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        // marginLeft: "-23%",
                        color: "#011627",
                      }}
                    >
                      ₹2000
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  left: "18%",
                  paddingBottom: "4%",
                }}
              >
                <div
                  style={{
                    padding: "3%",
                    display: "flex",
                    flexDirection: "row",
                    width: "55%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    border: "1px solid #D0FD3E",
                    backgroundColor: "#0038FF",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "29px",
                    }}
                  >
                    Edit Package
                  </h4>
                  <img
                    src={arrowW}
                    style={{
                      marginLeft: "6px",
                      width: "15%",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                borderRadius: "16px 16px 16px 16px",
                alignItems: "center",
                maxWidth: "360px",
                minWidth: "360px",
                margin: "2%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D0FD3E",
                  borderRadius: "16px",
                  padding: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1.7%",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  Package Name
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  3 Month package
                </div>
              </div>

              <div className="featuredItem2" style={{}}>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "5%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    padding: "2%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      marginLeft: "-5%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Duration
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        marginLeft: "-5%",
                        color: "#011627",
                      }}
                    >
                      90 Days
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "9%",
                    marginTop: "7.3%",
                    marginBottom: "5%",
                    padding: "0%",
                    paddingRight: "1.7%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      //   marginLeft: "-23%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Amount
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        // marginLeft: "-23%",
                        color: "#011627",
                      }}
                    >
                      ₹3000
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  left: "18%",
                  paddingBottom: "4%",
                }}
              >
                <div
                  style={{
                    padding: "3%",
                    display: "flex",
                    flexDirection: "row",
                    width: "55%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    border: "1px solid #D0FD3E",
                    backgroundColor: "#0038FF",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "29px",
                    }}
                  >
                    Edit Package
                  </h4>
                  <img
                    src={arrowW}
                    style={{
                      marginLeft: "6px",
                      width: "15%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="featured">
            <div
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                borderRadius: "16px 16px 16px 16px",
                alignItems: "center",
                maxWidth: "360px",
                minWidth: "360px",
                margin: "2%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D0FD3E",
                  borderRadius: "16px",
                  padding: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "1.7%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1.7%",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  Package Name
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  1 Month package
                </div>
              </div>

              <div className="featuredItem2" style={{}}>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "5%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    padding: "2%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      marginLeft: "-5%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Duration
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        marginLeft: "-5%",
                        color: "#011627",
                      }}
                    >
                      30 Days
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "9%",
                    marginTop: "7.3%",
                    marginBottom: "5%",
                    padding: "0%",
                    paddingRight: "1.7%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      //   marginLeft: "-23%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Amount
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        // marginLeft: "-23%",
                        color: "#011627",
                      }}
                    >
                      ₹1000
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  left: "18%",
                  paddingBottom: "4%",
                }}
              >
                <div
                  style={{
                    padding: "3%",
                    display: "flex",
                    flexDirection: "row",
                    width: "55%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    border: "1px solid #D0FD3E",
                    backgroundColor: "#0038FF",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "29px",
                    }}
                  >
                    Edit Package
                  </h4>
                  <img
                    src={arrowW}
                    style={{
                      marginLeft: "6px",
                      width: "15%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                borderRadius: "16px 16px 16px 16px",
                alignItems: "center",
                maxWidth: "360px",
                minWidth: "360px",
                margin: "2%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D0FD3E",
                  borderRadius: "16px",
                  padding: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "1.7%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1.7%",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  Package Name
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  2 Month package
                </div>
              </div>

              <div className="featuredItem2" style={{}}>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "5%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    padding: "2%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      marginLeft: "-5%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Duration
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        marginLeft: "-5%",
                        color: "#011627",
                      }}
                    >
                      60 Days
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "9%",
                    marginTop: "7.3%",
                    marginBottom: "5%",
                    padding: "0%",
                    paddingRight: "1.7%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      //   marginLeft: "-23%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Amount
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        // marginLeft: "-23%",
                        color: "#011627",
                      }}
                    >
                      ₹2000
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  left: "18%",
                  paddingBottom: "4%",
                }}
              >
                <div
                  style={{
                    padding: "3%",
                    display: "flex",
                    flexDirection: "row",
                    width: "55%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    border: "1px solid #D0FD3E",
                    backgroundColor: "#0038FF",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "29px",
                    }}
                  >
                    Edit Package
                  </h4>
                  <img
                    src={arrowW}
                    style={{
                      marginLeft: "6px",
                      width: "15%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                marginLeft: "0px",
                backgroundColor: "white",
                borderRadius: "16px 16px 16px 16px",
                alignItems: "center",
                maxWidth: "360px",
                minWidth: "360px",
                margin: "2%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D0FD3E",
                  borderRadius: "16px",
                  padding: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "1.7%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  Package Name
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1%",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#011627",
                  }}
                >
                  3 Month package
                </div>
              </div>

              <div className="featuredItem2" style={{}}>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "5%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    padding: "2%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      marginLeft: "-5%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Duration
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        marginLeft: "-5%",
                        color: "#011627",
                      }}
                    >
                      90 Days
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginRight: "0%",
                    marginLeft: "9%",
                    marginTop: "7.3%",
                    marginBottom: "5%",
                    padding: "0%",
                    paddingRight: "1.7%",
                  }}
                >
                  <div
                    className="featuredTitle"
                    style={{
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      //   marginLeft: "-23%",
                      fontSize: "15.9px",
                      color: "#808A93",
                    }}
                  >
                    Package Amount
                  </div>
                  <div className="featuredMoneyContainer">
                    <span
                      className="featuredMoney"
                      style={{
                        fontFamily: "Gilroy",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "22px",
                        // marginLeft: "-23%",
                        color: "#011627",
                      }}
                    >
                      ₹3000
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  left: "18%",
                  paddingBottom: "4%",
                }}
              >
                <div
                  style={{
                    padding: "3%",
                    display: "flex",
                    flexDirection: "row",
                    width: "55%",
                    paddingBottom: "2.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    border: "1px solid #D0FD3E",
                    backgroundColor: "#0038FF",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "29px",
                    }}
                  >
                    Edit Package
                  </h4>
                  <img
                    src={arrowW}
                    style={{
                      marginLeft: "6px",
                      width: "15%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              top: "6%",
              marginLeft: "38.8%",
              // transform: "translateY(0px) translateX(0px)",
              paddingBottom: "4%",
            }}
          >
            <div
              style={{
                padding: "1%",
                paddingLeft: "3.5%",
                paddingRight: "3.5%",
                display: "flex",
                flexDirection: "row",
                width: "25%",
                minWidth: "23%",

                paddingBottom: "1%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                border: "1px solid #D0FD3E",
                backgroundColor: "#D0FD3E",
              }}
            >
              <h4
                style={{
                  color: "black",
                  fontFamily: "Gilroy",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "29px",
                }}
              >
                SAVE PACKAGE
              </h4>
              <img
                src={tick}
                style={{
                  marginLeft: "12px",
                  width: "11.3%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packdetails;
