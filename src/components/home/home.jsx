import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import NavBar from "../../common/navBar";
import { Container } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "projectName", label: "Project Name", minWidth: 170 },
  { id: "details", label: "Details", minWidth: 100 },
  {
    id: "noOfDevelopers",
    label: "No Of Developers",
    minWidth: 170,
    align: "center",
  },
  {
    id: "technology",
    label: "Technology",
    minWidth: 170,
    align: "center",
  },
  {
    id: "view",
    label: "View",
    minWidth: 170,
    align: "center",
  },
];

function createData(
  id,
  projectName,
  details,
  noOfDevelopers,
  technology,
  view
) {
  return { id, projectName, details, noOfDevelopers, technology, view };
}

const rows = [
  createData(
    "100231",
    "Amigos",
    "IN",
    54,
    "Java",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Bladerunner",
    "CN",
    65,
    "Python",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Canary",
    "IT",
    73,
    "React",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Dagwood",
    "US",
    34,
    "React Native",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Early First",
    "CA",
    103,
    "Andoid",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Gemini",
    "AU",
    110,
    "iOS",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Husky Cat",
    "DE",
    50,
    "Spring",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Liberation",
    "IE",
    60,
    "Automation",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Malibu",
    "MX",
    91,
    "Cypress",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Mountaineers",
    "JP",
    30,
    "Angular",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Project X",
    "FR",
    10,
    ".net",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Sahara",
    "GB",
    57,
    "aws",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Topcat",
    "RU",
    44,
    "cloud",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Wombat",
    "NG",
    17,
    "java",
    <VisibilityIcon color="primary" />
  ),
  createData(
    "100231",
    "Zulu",
    "BR",
    125,
    "python",
    <VisibilityIcon color="primary" />
  ),
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Home() {
  const [page, setPage] = React.useState(0);
  const [searchText, setSearchText] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container maxWidth={false}>
      <NavBar />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />
      </Search>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .filter((element) => {
                  if (searchText === "") {
                    return element;
                  } else if (
                    element.projectName
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return element;
                  }
                })
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
