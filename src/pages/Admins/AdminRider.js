import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";

import { Helmet } from "react-helmet";

const AdminRider = () => {
  const navigate = useNavigate();

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

  function createData(
    name: string,
    calories: string,
    fat: string,
    destination: string,
    status: string
  ) {
    return { name, calories, fat, destination, status };
  }

  const rows = [
    createData("Active", "Ben", "L123", "..."),
    createData("Active", "Ayo", "Y454", "..."),
    createData("Active", "Lucky", "P467", "..."),
    createData("Active", "James", "T769", "..."),
    createData("Active", "Akin", "L097", "..."),
  ];

  return (
    <AdminLayout page="admin-rider">
      <Helmet>
        <title>Admin Rider | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="flex justify-between items-center px-10">
          <div className="text-fuchsia-700 text-xl font-bold py-8">Rider</div>
          <div className="">
            <Button
              variant="contained"
              sx={{ background: "#ACD94C", color: "#1E1E1E", paddingX: 2 }}
              onClick={() => navigate("/admin-rider/add-rider")}
              startIcon={<AddIcon />}
            >
              Add Rider
            </Button>
          </div>
        </div>
        <div className="px-6">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <input type="checkbox" style={{ marginRight: "5px" }} />
                    Account Status
                  </StyledTableCell>

                  <StyledTableCell align="right">User Name</StyledTableCell>
                  <StyledTableCell align="right">Riders ID</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <input type="checkbox" style={{ marginRight: "5px" }} />{" "}
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img
                            src={require("../../assets/profile.jpg")}
                            alt="Avatar"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <span className="ml-2">{row.calories}</span>
                      </div>
                    </StyledTableCell>

                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.destination}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div
          className="w-full pt-16"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Stack direction="row">
            <Button
              variant="contained"
              sx={{ background: "#460042", px: 6 }}
              // onClick={openModal}
            >
              Proceed
            </Button>
          </Stack>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminRider;
