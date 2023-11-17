import { useState, useEffect } from "react";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import TextField from "@mui/material/TextField";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const EditProfile = () => {
  const [data, setData] = useState([]);

  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const request = {
      signal: controller.signal,
      headers: {
        authorization: `Bearer ${auth?.accessToken}`,
      },
    };

    const getData = async () => {
      const res = await axiosPrivate
        .get("/users/profile/get", request)
        .catch(async (err) => {
          console.error(err?.response);
        });
      if (res?.data?.user) {
        isMounted && setData(res?.data?.user);
      }
    };

    getData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken, axiosPrivate]);

  return (
    <UsersLayout page="settings">
      <Helmet>
        <title>Edit Profile | Swift App</title>
      </Helmet>

      <UsersHeader />

      <div className="" style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}>
        <div className="bg-amber-50 w-full h-screen px-12 py-10 overflow-hidden">
          <div className="flex space-x-2">
            <div className="w-16 h-16">
              <img
                src={require("../../assets/profile.jpg")}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="font-bold">
              <p className="">Hi</p>
              <p className="text-fuchsia-700 text-xl space-x-0.6">
                {" "}
                <span>{data.firstName}</span> <span>{data.lastName}</span>
              </p>
            </div>
          </div>
          <div className="py-4 mt-12">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch", py: 4 },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="First Name"
                  defaultValue="Edit First Name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <ManageAccountsIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Last Name"
                  defaultValue="Edit Last Name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <PersonAddIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  defaultValue="Edit Email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <MarkEmailReadIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Box>
          </div>
        </div>
        );
      </div>
    </UsersLayout>
  );
};

export default EditProfile;
