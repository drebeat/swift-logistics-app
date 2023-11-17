import React from "react";
import CircularWithValueLabel from "./CircularProgressWithLabel";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RightAdDashboard = () => {
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

      function createData(name: string, calories: string, fat: string) {
        return { name, calories, fat };
      }

      const rows = [
        createData("Adeleke James", "Ibadan", "Active"),
        createData("John Mark", "Oshodi", "UnAvailable"),
        createData("Eunice Mercy", "Iyana-Ipaja", "On-Route"),
        createData("Mike Daniels", "Egbeda", "Offline"),
        createData("Gabriel Mathew", "Ikorodu", "Active"),
      ];
  return (
    <div className="1/2 mt-6">
      <div className="flex flex-row justify-between items-center bg-white w-[500px] h-36 px-6 py-3 rounded-lg space-y-4">
        <div className="font-bold space-y-3">
          {" "}
          <div className="text-black">Revenue: N24,000</div>
          <div className="text-black">Grand Revenue: N100,000</div>
        </div>
        <div>
          <CircularWithValueLabel />
        </div>
      </div>
      <div className="flex justify-between py-6">
        <div className="font-bold text-md">Available Rider</div>
        <div className="text-sm underline">See All</div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">To</StyledTableCell>
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
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RightAdDashboard;
