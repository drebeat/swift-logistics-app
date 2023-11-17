import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Helmet } from "react-helmet";
import { FaWallet } from "react-icons/fa";
import AdminLayout from "../../components/Admins/AdminLayout";
import AdminHeader from "../../components/Admins/AdminHeader";

const AdmTrackRider = () => {
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
    createData("T123", "Ben", "Lagos", "Ibadan", "Offline"),
    createData("K456", "Ayo", "Lagos", "Ibadan", "Active"),
    createData("Y657", "Lucky", "Lagos", "Ibadan", "Available"),
    createData("I764", "James", "Lagos", "Ibadan", "On-Route"),
    createData("L456", "Akin", "Lagos", "Ibadan", "UnAvailable"),
  ];

  return (
    <AdminLayout page="tracker">
      <Helmet>
        <title>Track Rider | Swift App</title>
      </Helmet>

      <AdminHeader />
      <div
        className="min-h-screen bg-pink-50"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="flex justify-between items-center px-10">
          <div className="text-fuchsia-700 text-xl font-bold py-8">
            Track Riders
          </div>
          <div className="">
            <Button
              variant="contained"
              sx={{ background: "#ACD94C", color: "#1E1E1E", paddingX: 2 }}
              onClick={() => navigate("/admtrack-rider/livetracker")}
            >
              Live Tracking
            </Button>
          </div>
        </div>
        <div className="px-6">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Tracking ID</StyledTableCell>
                  <StyledTableCell align="right">Driver</StyledTableCell>
                  <StyledTableCell align="right">Origin</StyledTableCell>
                  <StyledTableCell align="right">Deestination</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.destination}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdmTrackRider;
