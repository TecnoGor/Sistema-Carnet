/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
// import Carnet from "examples/Cards/Carnet";

// Modals
import RegUsers from "examples/Modals/Usuarios";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Users() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("http://localhost:5001/api/users");
      setUsers(response.data);
    } catch (err) {
      console.log("Error al obtener usuarios", err);
      setError("Error al cargar los usuarios. Intentelo de nuevo.", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { Header: "ID", accessor: "id_persona", width: "10%" },
    { Header: "Nombres", accessor: "nombres", width: "25%" },
    { Header: "Apellidos", accessor: "apellidos", width: "15%" },
    { Header: "Cédula", accessor: "cedula", width: "15%" },
    { Header: "Nombre Usuario", accessor: "nombre_usuario", width: "15%" },
    { Header: "Acciones", accessor: "actions", width: "10%" },
  ];

  const rows = users.map((user) => ({
    id_persona: user.id,
    nombres: user.firstname,
    apellidos: user.secondname,
    cedula: user.ci,
    nombre_usuario: user.username,
    actions: (
      <MDBox display="flex" gap={1}>
        <MDButton variant="text" color="info" size="small">
          <Icon>edit</Icon>&nbsp;Editar
        </MDButton>
        <MDButton variant="text" color="error" size="small">
          <Icon>delete</Icon>&nbsp;Eliminar
        </MDButton>
      </MDBox>
    ),
  }));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDButton variant="gradient" color="dark" onClick={handleShow}>
                  <Icon sx={{ fontWeight: "bold" }}>person</Icon>
                  &nbsp;Registrar Usuarios
                </MDButton>
              </MDBox>
              <MDBox>
                <RegUsers hClose={handleClose} show={show} />
              </MDBox>
              <MDBox pt={3}>
                {/* <Carnet number={4562112245947852} holder="jack peterson" expires="11/22" /> */}
                <MDBox pt={3}>
                  {loading ? (
                    <MDBox p={3} textAlign="center">
                      <MDTypography variant="body2" color="text">
                        Cargando Usuarios...
                      </MDTypography>
                    </MDBox>
                  ) : error ? (
                    <MDBox p={3} textAlign="center">
                      <MDTypography variant="body2" color="error">
                        {error}
                      </MDTypography>
                      <MDButton color="info" onClick={fetchUsers} sx={{ mt: 2 }}>
                        <Icon>refresh</Icon>&nbsp;Reintentar
                      </MDButton>
                    </MDBox>
                  ) : users.length === 0 ? (
                    <MDBox p={3} textAlign="center">
                      <MDTypography variant="body2" color="text">
                        No hay usuarios registrados
                      </MDTypography>
                    </MDBox>
                  ) : (
                    <DataTable
                      table={{ columns, rows }}
                      isSorted={true}
                      entriesPerPage={true}
                      showTotalEntries={true}
                      noEndBorder
                      pagination={{ variant: "gradient", color: "info" }}
                    />
                  )}
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Users;
