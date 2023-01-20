import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { userColumns, userRows } from "../../datatablesource";

const List = () => {
  const rows = [
    {
      id: 1,
      status: "Approved",
      date: "Dec 28, 2021"
    },
    {
      id: 2,
      date: "Dec 28, 2021",
      status: "Pending"
    },
    {
      id: 3,
      status: "Pending",
      date: "Aug 11, 2022"
    },
    {
      id: 4,
      status: "Approved",
      date: "Aug 11, 2022",
    },
    {
      id: 5,
      status: "Pending",
      date: "Nov 23, 2022"
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Submission ID</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Date</TableCell>
 
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>

              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
