import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEye } from "react-icons/fa";
import { Box } from "@mui/material";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { timestampToYYYYMMDD } from "../../utils/helpers";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const LeftDashboard = ({ dataUser }) => {
  const [data, setData] = useState([]);
  const [dataBalance, setDataBalance] = useState({});
  const [accoutDetails, setAccountDetails] = useState([]);
  const [showPassword, setShowPassword] = useState(true);
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
        .get("/wallets/users/get/", request)
        .catch(async (err) => {
          console.error(err?.response);
        });
      if (res?.data?.wallet) {
        isMounted && setData(res?.data?.wallet);
      }
    };

    const getDataBalance = async () => {
      const res = await axiosPrivate
        .get("/wallets/users/balance", request)
        .catch(async (err) => {
          console.error(err?.response);
        });
      if (res?.data) {
        isMounted && setDataBalance(res?.data);
      }
    };

    const getAccountDetails = async () => {
      const res = await axiosPrivate
        .get("/wallets/users/account", request)
        .catch(async (err) => {
          console.error(err?.response);
        });
      if (res?.data?.details) {
        isMounted && setAccountDetails(res?.data?.details);
      }
    };
    getData();
    getDataBalance();
    getAccountDetails();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken, axiosPrivate]);

  // console.log({ dataBalance });

  const show = showPassword ? (
    <BsEyeSlash
      color=" #1E3A8A"
      size={18}
      icon={showPassword ? "eye-slash" : "eye"}
      onClick={() => setShowPassword((visibility) => !visibility)}
    />
  ) : (
    <BsEye
      color=" #1E3A8A"
      size={18}
      icon={showPassword ? "eye-slash" : "eye"}
      onClick={() => setShowPassword((visibility) => !visibility)}
    />
  );

  return (
    <div className="w-full lg:w-1/4 drop-shadow-2xl">
      <div className="flex flex-col">
        <div className="w-full space-y-1">
          <div className="bg-limeBg w-full lg:w-64 h-32 px-3 py-3 flex items-center space-x-2 rounded-md">
            <div className="w-16 h-16">
              <img
                src={require("../../assets/profile.jpg")}
                alt=""
                className="rounded-full"
              />
            </div>
            <div>
              <div className="font-bold">Hi</div>
              <div className="text-fuchsia-700 font-bold space-x-0.6">
                <span>{dataUser.firstName}</span>{" "}
                <span>{dataUser.lastName}</span>
              </div>
            </div>
          </div>
          <div className="bg-pink-300 w-full lg:w-64 h-32 px-3 py-3 flex justify-between items-center rounded-md">
            <div>
              <div className="font-bold">Available balance</div>
              <input
                type={showPassword ? "password" : "text"}
                className="font-bold"
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                }}
                value={showPassword ? "* * *" : dataBalance.balance}
                readOnly // Make the input read-only to prevent editing
              />
            </div>

            <div className="relative md:right-6"> {show}</div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[260px]">
        <div className="flex justify-between py-6">
          <div className="font-bold text-md">Recent Transactions</div>
          <Link to="/wallet" className="text-sm underline">
            See All
          </Link>
        </div>
        <div className="w-full">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Package</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
                {Array.isArray(data) && data.length === 0 ? (
                  <StyledTableRow>
                    <StyledTableCell colSpan={3} align="center">
                      No recent transactions
                    </StyledTableCell>
                  </StyledTableRow>
                ) : (
                  Array.isArray(data) &&
                  data.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.balance}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.created_at}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                )}
              </TableBody> */}

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {data.accountName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {data.bankName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {timestampToYYYYMMDD(data.created_at)}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default LeftDashboard;
