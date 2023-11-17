import { useState, useEffect } from "react";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import LeftDashboard from "../../components/Users/LeftDashboard";
import RightDashboard from "../../components/Users/RightDashboard";
import useAuth from "../../hooks/useAuth";
import { titleCase } from "../../utils/helpers";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const UsersDashboard = () => {
  const [dataUser, setDataUser] = useState([]);
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
        isMounted && setDataUser(res?.data?.user);
      }
    };

    getData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken, axiosPrivate]);

  return (
    <UsersLayout page="dashboard">
      <Helmet>
        <title>Dashboard | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="min-h-screen overflow-y-auto"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="px-10">
          <div className="text-fuchsia-700 text-md md:text-xl lg:text-2xl font-bold py-8">
            Welcome back{" "}
            <span className="text-slate-600">
              {titleCase(dataUser?.firstName)}
            </span>
          </div>
          <div className="w-full flex flex-col lg:flex lg:flex-row gap-3">
            <LeftDashboard dataUser={dataUser} />
            <RightDashboard />
          </div>
        </div>
      </div>
    </UsersLayout>
  );
};

export default UsersDashboard;
