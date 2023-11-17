import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";
// import useAuth from "../hooks/useAuth";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Box, TextField, Button } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { axiosPrivate } from "../../api/axios";
import { titleCase } from "../../utils/helpers";

const validationSchema = yup.object().shape({
  profile_logo: yup.lazy((value) => {
    switch (typeof value) {
      case "string":
        return yup.string().required("This field is required.");
      case "object":
        return yup.mixed().required("This field is required.");
      default:
        return yup.string().required("This field is required.");
    }
  }),
  first_name: yup.string().required("This field is required."),
  profile_email: yup
    .string()
    .email("Enter a valid email")
    .required("This field is required."),

  phone_number: yup.string().required("This field is required."),
});

const AdminMenu = () => {
  const [profile, setProfile] = useState();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      profile_logo: profile?.profile_logo,
      first_name: profile?.first_name,
      profile_email: profile?.profile_email,
      phone_number: profile?.phone_number,
    },
    enableReinitialize: true,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      if (typeof values.profile_logo === "object") {
        const formData = new FormData();
        formData.append("file", values.profile_logo);
        const res = await axiosPrivate
          .post(`storage/upload-image`, formData, {
            // headers: {
            //   "Content-Type": "multipart/form-data",
            //   authorization: `Bearer ${auth?.accessToken}`,
            // },
          })
          .catch((err) => console.error(err));

        if (res) {
          const response = await axiosPrivate
            .put(`companies/`, {
              profile_logo: res.data.data.filename,
              first_name: values.first_name,
              profile_email: values.profile_email,
              phone_number: values.phone_number,
            })
            .catch((error) => {
              Swal.fire({
                toast: true,
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                position: "top",
                timer: 3000,
                showConfirmButton: false,
              });
            });

          if (response) {
            Swal.fire({
              toast: true,
              icon: "success",
              text: "Admin Profile updated successfully",
              position: "top",
              timer: 3000,
              showConfirmButton: false,
            });
            resetForm();
            navigate("/admin-dashboard/");
          }
        }
      } else {
        const response = await axiosPrivate
          .put(`companies/`, {
            profile_logo: values.profile_logo,
            first_name: values.first_name,
            profile_email: values.profile_email,
            phone_number: values.phone_number,
          })
          .catch((error) => {
            Swal.fire({
              toast: true,
              icon: "error",
              title: "Oops...",
              text: error.response.data.message,
              position: "top",
              timer: 3000,
              showConfirmButton: false,
            });
          });

        if (response) {
          Swal.fire({
            toast: true,
            icon: "success",
            text: "Admin Profile updated successfully",
            position: "top",
            timer: 3000,
            showConfirmButton: false,
          });
          resetForm();
          navigate("/admin-dashboard/");
        }
      }
    },
  });

  return (
    <div
      className="flex flex-col origin-top-right absolute top-0 right-0 mt-16 w-1/3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          width: "70%",
          mt: "1rem",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // "& .MuiTextField-root": { mt: "1rem" },
          "& .MuiSvgIcon-root": {
            color: "#000000",
          },
        }}
        onSubmit={formik.handleSubmit}
      >
        {/**profile logo */}
        <Box sx={{ width: "100%" }}>
          <input
            type="file"
            id=" profile_logo"
            accept="image/*"
            onChange={(e) => {
              formik.setFieldValue(" profile_logo", e.currentTarget.files[0]);
            }}
            hidden
          />

          <label
            htmlFor=" profile_logo"
            className={`${
              Boolean(formik.errors.profile_logo)
                ? "border-[#d32f2f]"
                : "border-[#cccccc]"
            } bg-white border rounded-[4px]  mt-4 text-black text-base w-full cursor-pointer flex items-center justify-between`}
          >
            <span className="py-[8.5px] px-[14px]">
              {formik.values.profile_logo?.name
                ? formik.values.profile_logo?.name
                : formik.values.profile_logo
                ? formik.values.profile_logo
                : "Choose a file..."}
            </span>
            <span className="flex items-center justify-end bg-gray-100 border-l border-[#cccccc] py-[8.5px] px-[14px]">
              <FaCloudUploadAlt style={{ marginRight: "8px" }} /> Choose Profile
              Picture
            </span>
          </label>

          {Boolean(formik.errors.profile_logo) && (
            <p className="text-[#d32f2f] text-xs my-1 ml-[14px] tracking-[0.0333em]">
              {formik.touched.profile_logo && formik.errors.profile_logo}
            </p>
          )}
        </Box>

        {/**first_name */}
        <Box sx={{ width: "100%", pt: 3 }}>
          <TextField
            required
            variant="outlined"
            fullWidth
            size="small"
            id="first_name"
            label="First Name"
            value={titleCase(formik.values.first_name)}
            onChange={formik.handleChange("first_name")}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
            InputLabelProps={{ shrink: true }}
            onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
          />
        </Box>

        {/*Profile Email */}
        <Box sx={{ width: "100%", pt: 3 }}>
          <TextField
            required
            variant="outlined"
            fullWidth
            size="small"
            id="profile_email"
            label="Profile Email"
            value={formik.values.profile_email}
            onChange={formik.handleChange("profile_email")}
            error={
              formik.touched.profile_email &&
              Boolean(formik.errors.profile_email)
            }
            helperText={
              formik.touched.profile_email && formik.errors.profile_email
            }
            InputLabelProps={{ shrink: true }}
            // disabled
          />
        </Box>

        <Box sx={{ width: "100%", pt: 3 }}>
          <PhoneInput
            inputProps={{
              id: "phone",
              required: true,
            }}
            inputStyle={{ width: "100%" }}
            country={"ng"}
            value={formik.values.phone_number}
            placeholder="+234 812 345 6789"
            onChange={(phone) => formik.setFieldValue("phone_number", phone)}
            autoComplete="off"
          />
        </Box>

        <Box
          sx={{
            mt: "1rem",
            pb: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            disabled={!formik.dirty}
            sx={{
              p: "0.75rem 3rem",
              backgroundColor: "#460042",
              "&:hover": {
                backgroundColor: "#3F51B5",
              },
            }}
            onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
          >
            SAVE CHANGES
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AdminMenu;
