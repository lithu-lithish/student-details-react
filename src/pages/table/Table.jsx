import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import searchTable from "../../svg/searchTable.svg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { db } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./table.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";

const List = () => {
  const [searched, setSearched] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  //get users
  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //get data in table
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log("check 1234", data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredRows = users.filter((user) => {
      return Object.keys(user).some((key) =>
        user[key].toLowerCase().includes(searchedVal)
      );
    });
    setUsers(filteredRows);
    const sets = setUsers(filteredRows);
    {
      (sets.length > 10 ? sets : users).map(getUser);
    }
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div
          style={{
            marginTop: "4%",
            margin: "2.3%",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "95%",
              height: "10%",

              margin: "2.5%",
              marginBottom: "0px",
              backgroundColor: "#011627",
              borderRadius: "12px",
            }}
          >
            <h1
              className="topHead"
              style={{
                color: "white",
                // color: "rgb(194, 194, 247)",
                justifyContent: "center",
                textAlign: "center",
                paddingTop: "1%",
                paddingBottom: "1%",

                fontFamily: "MonumentExtended",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "30.5px",
                lineHeight: "37px",
              }}
            >
              Student Details
            </h1>
          </div>

          <SearchBar
            className="searchField"
            placeholder="Searches"
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={(users) => getUser(users)}
            // onInput={async (e) => {
            //   await requestSearch(e.target.value);
            // }}
            style={{
              backgroundColor: "#FFFFFF",
              border: "0.8px solid #011627",
              borderRadius: "10px",
              color: "black",
              margin: "3.5%",
              width: "20%",
            }}
          />

          <div
            style={{
              borderTop: "1px solid #808080",
              // margin: "5%",
            }}
          >
            <TableContainer component={Paper} className="table">
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                options={{
                  search: true,
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCells">Name</TableCell>
                    <TableCell className="tableCells">Gender</TableCell>
                    <TableCell className="tableCells">Phone</TableCell>
                    <TableCell className="tableCells">Roll Number</TableCell>
                    <TableCell className="tableCells">Faculty Name</TableCell>
                    <TableCell className="tableCells">
                      Department & Course
                    </TableCell>
                    {/* <TableCell className="tableCells">Action</TableCell> */}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.firstName}>
                      <TableCell className="tableCell">
                        {user.firstName}
                      </TableCell>
                      <TableCell className="tableCell">
                        {/* <img src={row.img} alt="" className="image" /> */}
                        {user.gender}
                      </TableCell>
                      <TableCell className="tableCell">{user.mobile}</TableCell>
                      <TableCell className="tableCell">
                        {user.rollnumber}
                      </TableCell>
                      <TableCell className="tableCell">
                        {user.selectfaculty}
                      </TableCell>
                      <TableCell className="tableCell">
                        {user.department}
                      </TableCell>
                      {/* <TableCell className="tableCell">
                        <NavLink to={`/user/${user.id}`} className="view">
                          view profile
                        </NavLink>
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Stack
                spacing={2}
                style={{
                  marginLeft: "70%",
                  marginTop: "4%",
                }}
              >
                <Pagination count={10} variant="outlined" shape="rounded" />
              </Stack>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
