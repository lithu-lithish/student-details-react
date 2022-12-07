import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbars = ({ title }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h1
          style={{
            fontFamily: "MonumentExtended",
            color: "#011627",
            fontStyle: "Normal",
            fontWeight: "400",
            forntSize: "30.5px",
            lineHeight: "37px",
            paddingTop: "2.5%",
            // paddingBottom: "5%",
          }}
        >
          {title}
        </h1>
        {/* <div className="items" style={{ marginTop: "2.5%" }}>
          <div className="item">
            <div className="search">
              <SearchOutlinedIcon
                className=""
                style={{
                  backgroundColor: "#F4F7FE",
                  // backgroundColor: "#700",
                  // height: "70%",
                  padding: "10px",
                  borderRadius: "50%",
                  left: "5%",
                  position: "absolute",
                }}
              />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  paddingLeft: "2.6rem",
                  paddingRight: "1rem",
                  margin: "0 .6rem",
                }}
              />

              <img
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: "6%",
                }}
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbars;
