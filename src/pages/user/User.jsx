import { db } from "../../firebaseConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { logDOM } from "@testing-library/react";

function User() {
  const [userData, setuserData] = useState();
  let { id } = useParams();
  //   console.log(id);

  //get data in table
  useEffect(() => {
    //get users
    const getUser = async () => {
      console.log(id);
      const user = doc(db, "users", id);
      const docSnap = await getDoc(user);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setuserData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      //   const result = data.docs.map((doc) => doc.data());
    };

    getUser();
  }, []);

  return (
    <div>
      <h1>Name:{userData?.firstName}</h1>
      <h1>Mobile:{userData?.mobile}</h1>
      <h1>Email:{userData?.email}</h1>
      <h1>Address:{userData?.address}</h1>
      <h1>Age:{userData?.age}</h1>
    </div>
  );
}

export default User;
