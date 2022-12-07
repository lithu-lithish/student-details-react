import Head from "next/head";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import pic from "../../images/Image.png";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(255).required("First name is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      navigate("/dashboard");
    },
  });

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                variant="h4"
                position="absolute"
                height="43px"
                left="80px"
                top="54px"
                style={{ fontFamily: "MonumentExtended", color: "#011627" }}
                fontStyle="Normal"
                fontWeight="400"
                forntSize="36px"
                lineHeight="43px"
              >
                STUDENT LOGIN
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
                position="absolute"
                height="29px"
                left="230px"
                top="230px"
                style={{
                  fontFamily: "MonumentExtended",
                  color: "#011627",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24.4px",
                  lineHeight: "29px",
                }}
                font-style="normal"
                font-weight="400"
                line-height="29px"
              >
                Log In
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                position="absolute"
                width="432px"
                height="29px"
                left="230px"
                top="275px"
              >
                Let's start with some fact about you !
              </Typography>
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "230px",
                top: "355px",
              }}
            >
              <TextField
                // error={Boolean(
                //   formik.touched.firstName && formik.errors.firstName
                // )}
                // helperText={formik.touched.firstName && formik.errors.firstName}
                fullWidth
                label="Username"
                margin="normal"
                name="firstName"
                onBlur={formik.handleBlur}
                //
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                //
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{ background: "#F5F6F6", borderRight: "8px" }}
              />
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "230px",
                top: "430px",
              }}
            >
              <TextField
                // error={Boolean(
                //   formik.touched.password && formik.errors.password
                // )}
                // helperText={formik.touched.password && formik.errors.password}
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                //
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                //
                type="password"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                style={{ background: "#F5F6F6", borderRight: "8px" }}
              />
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "220px",
                top: "500px",
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                Remember me{" "}
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                position: "absolute",
                width: "432px",
                height: "29px",
                left: "230px",
                top: "580px",
              }}
            >
              <Button
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant=""
                style={{
                  background: "rgb(194, 194, 247)",
                  color: "black",
                  borderRadius: "10px",
                  width: "410px",
                  height: "60px",
                }}
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Log In
              </Button>
            </Box>
          </form>
        </Container>
        {/* <img
          src={pic}
          style={{
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            width: "50%",
            // left: "795px",
            right: "0px",
            bottom: "0px",
            top: "0px",
          }}
        /> */}
        <img
          src={pic}
          style={{
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            width: "48%",
            height: "100%",
            right: "0px",
            bottom: "0px",
          }}
        />
      </Box>
    </>
  );
};

export default Login;
