import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import "./AddpackForm.scss";

import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import nextArrow from "../../../svg/nextArrow.svg";
import plusAdd from "../../../svg/plusAdd.svg";
const AddpackForm = ({ title }) => {
  const [viewFiles1, setViewFiles1] = useState(false);
  const [viewFiles2, setViewFiles2] = useState(false);

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
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
  // const formik = useFormik({
  //   onSubmit: () => {
  //   },
  // });

  return (
    <>
      <Formik
        initialValues={{ firstName: "", add: "", email: "", mob: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("*name is required"),
          add: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("*address is required"),

          mob: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("*mob number is Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("foo");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate("/packdetails");
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
                    Enter the details to add new package
                  </p>

                  <Form className="newUserForm">
                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                        // border: "1px solid #BFC5C9",
                      }}
                    >
                      <label htmlFor="firstName">Package Name</label>
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
                      <label htmlFor="mob">Package Duration</label>
                      <Field
                        name="mob"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="mob">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="email">Package Amount</label>
                      <Field
                        name="add"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="add">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

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
                            fontSize: "16px",
                          }}
                        >
                          CANCEL
                        </p>
                      </button>

                      <span>
                        <button
                          className="newUserButton"
                          type="submit"
                          style={{
                            color: "black",
                            background: "#D0FD3E",
                            weigth: "298px",
                            height: "50px",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            //   onClick={}
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
                                  fontSize: "16px",
                                }}
                              >
                                ADD PACKAGE
                              </p>
                            </div>
                            <div>
                              <img
                                src={plusAdd}
                                style={{
                                  width: "60%",

                                  marginTop: "15%",
                                  paddingLeft: "32%",
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

export default AddpackForm;
