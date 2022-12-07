import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

import nextArrow from "../../svg/nextArrow.svg";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const New = ({ title }) => {
  const [viewFiles1, setViewFiles1] = useState(false);
  const [viewFiles2, setViewFiles2] = useState(false);
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  // const [feeds, setFeeds] = useState({
  //   imageOne: "",
  //   imageTwo: "",
  // });

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file1.name;
      console.log(name);
      // const storageRef = ref(storage, file1.name);
      const storageRef = ref(storage, file1.name);
      const uploadTask = uploadBytesResumable(storageRef, file1);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file1 && uploadFile();
  }, [file1]);
  console.log(data);
  const reset1 = () => {
    console.log("[reset1]");
    setFile1("");
    setViewFiles1(false);
    // ref1.current.value = "";
  };
  const reset2 = () => {
    console.log("[reset2]");
    setFile2("");
    setViewFiles2(false);
  };
  function handleFileOpen() {
    document.getElementById("file").click();
  }

  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{ firstName: "", rollnumber: "", email: "", mobile: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("*name is required"),
          rollnumber: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("*Roll number is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("*email-id is required"),
          mobile: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("*mobile number is required"),
          gender: "",
          department: "",
          selectfaculty: "",
          img: "",
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            alert(JSON.stringify(values, null, 2));
            try {
              await addDoc(collection(db, "users"), values);
            } catch (error) {}
            setSubmitting(false);
            navigate("/table");
          }, 400);
        }}
      >
        <div className="new">
          <Sidebar />
          <div className="newContainer">
            {/* <Navbar /> */}
            <Navbar title="Registration" />

            <div className="bottom">
              <div className="right">
                <div className="newUser">
                  <p
                    style={{
                      color: "#011627",
                      padding: "1.9% 0% 3% 35%",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "20px",
                      weigth: "462px",
                      height: "36px",
                    }}
                  >
                    Enter the details to add new user
                  </p>

                  <Form className="newUserForm">
                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="firstName">Name</label>
                      <Field
                        name="firstName"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="firstName">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="mobile">Mobile Number</label>
                      <Field
                        name="mobile"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="mobile">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="email">Email address</label>
                      <Field
                        name="email"
                        type="email"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="email">Roll Number</label>
                      <Field
                        name="rollnumber"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="rollnumber">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label>Gender</label>
                      <Field
                        as="select"
                        className="newUserSelect"
                        defaultValue=""
                        name="gender"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </Field>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label>Department</label>
                      <Field
                        as="select"
                        className="newUserSelect"
                        defaultValue=""
                        name="department"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Department & Course
                        </option>
                        <option value="CSE - Web Development">
                          CSE - Web Development
                        </option>
                        <option value="IT - Artificial Intelligence">
                          IT - Artificial Intelligence
                        </option>
                        <option value="ECE - Microprocessor and Microcontroller">
                          ECE - Microprocessor and Microcontroller
                        </option>
                        <option value=" MECH - New Product Development">
                          MECH - New Product Development
                        </option>
                      </Field>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label>Faculty</label>
                      <Field
                        as="select"
                        className="newUserSelect"
                        defaultValue=""
                        name="selectfaculty"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Choose Faculty
                        </option>
                        <option value="Dr.Shobana ">Dr.Shobana</option>
                        <option value="Mr.Sathish">Mr.Sathish</option>
                        <option value="Mr.Gowtham">Mr.Gowtham</option>
                        <option value="Mrs.Narmadha">Mrs.Narmadha</option>
                      </Field>
                    </div>

                    <div
                      className="newUserItem1"
                      style={{
                        width: "525px",
                        paddingRight: "40%",
                      }}
                    ></div>

                    <div
                      className="align"
                      style={{
                        backgroundColor: "",
                        paddingLeft: "35%",
                        paddingTop: "15px",
                      }}
                    >
                      <button
                        id="cancelB"
                        className="newUserButton-cancel"
                        style={{
                          color: "black",
                          background: "white",
                          weigth: "298px",
                          height: "50px",
                          borderWidth: "2px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Gilroy",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "17.4px",
                          }}
                        >
                          CANCEL
                        </p>
                      </button>

                      <span>
                        <button
                          className="newUserButton"
                          disabled={per !== null && per < 100}
                          type="submit"
                          style={{
                            color: "black",
                            background: "rgb(194, 194, 247)",
                            weigth: "298px",
                            height: "50px",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div>
                              <p
                                style={{
                                  fontFamily: "Gilroy",
                                  fontStyle: "normal",
                                  fontWeight: "500",
                                  fontSize: "17.4px",
                                }}
                              >
                                NEXT
                              </p>
                            </div>
                            <div>
                              <img
                                src={nextArrow}
                                style={{
                                  width: "60%",
                                  // marginLeft: "5%",
                                  marginTop: "12%",
                                }}
                              />
                            </div>
                          </div>
                        </button>
                      </span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default New;
