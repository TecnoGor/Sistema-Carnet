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
import EditUser from "examples/Modals/Usuarios/EditUser";
import Swal from "sweetalert2";

function Users() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [users, setUsers] = useState([]);
  const [showActive, setShowActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userEdit, setUserEdit] = useState({});
  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShow = () => setShow(true);
  const API_Host = process.env.REACT_APP_API_URL;

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

  const changeStatusUser = async (userId) => {
    // console.log(userId);
    if (showActive) {
      try {
        const userData = { id: userId, status: false };

        const response = await axios.post(`${API_Host}/api/statusUser`, userData, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 201) {
          Swal.fire({
            title: "Usuario Inhabilitado!",
            text: "El usuario ha sido deshabilitado.",
            icon: "success",
            draggable: true,
          });
          fetchUsers();
        }
      } catch (error) {
        if (error.response) {
          // alert(`Error: ${error.response.data.message || "Error al registrar usuario"}`);
          Swal.fire({
            title: "Error al inhabilitar el usuario",
            text: `Error: ${error.response.data.message || "Error al inhabilitar usuario"}`,
            icon: "error",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `Error: ${
              error || "Error de conexión con el servidor 🛠 , por favor intente mas tarde."
            }`,
            icon: "error",
            draggable: true,
          });
        }
      }
    } else {
      try {
        const userData = { id: userId, status: true };

        const response = await axios.post(`${API_Host}/api/statusUser`, userData, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 201) {
          Swal.fire({
            title: "Usuario habilitado!",
            text: "El usuario ha sido habilitado.",
            icon: "success",
            draggable: true,
          });
          fetchUsers();
        }
      } catch (error) {
        if (error.response) {
          // alert(`Error: ${error.response.data.message || "Error al registrar usuario"}`);
          Swal.fire({
            title: "Error al habilitar el usuario",
            text: `Error: ${error.response.data.message || "Error al habilitar el usuario"}`,
            icon: "error",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `Error: ${
              error || "Error de conexión con el servidor 🛠 , por favor intente mas tarde."
            }`,
            icon: "error",
            draggable: true,
          });
        }
      }
    }
  };

  const columns = [
    { Header: "ID", accessor: "id_persona", width: "10%" },
    { Header: "Nombres", accessor: "nombres", width: "25%" },
    { Header: "Apellidos", accessor: "apellidos", width: "15%" },
    { Header: "Cédula", accessor: "cedula", width: "15%" },
    { Header: "Nombre Usuario", accessor: "nombre_usuario", width: "15%" },
    { Header: "Acciones", accessor: "actions", width: "10%" },
  ];

  const handleEditClick = (user) => {
    setUserEdit(user);
    setShowEdit(true);
  };

  const filteredUsers = showActive
    ? users.filter((user) => user.status === true)
    : users.filter((user) => user.status === false);

  const rows = filteredUsers.map((user) => ({
    id_persona: user.id,
    nombres: user.firstname,
    apellidos: user.secondname,
    cedula: user.ci,
    nombre_usuario: user.username,
    actions: (
      <MDBox display="flex" gap={1}>
        <MDButton variant="text" color="info" size="small" onClick={() => handleEditClick(user.id)}>
          <Icon>edit</Icon>&nbsp;Editar
        </MDButton>
        {showActive ? (
          <MDButton
            variant="text"
            color="error"
            size="small"
            onClick={() => changeStatusUser(user.id)}
          >
            <Icon>delete</Icon>&nbsp;Inhabilitar
          </MDButton>
        ) : (
          <MDButton
            variant="text"
            color="success"
            size="small"
            onClick={() => changeStatusUser(user.id)}
          >
            <Icon>check</Icon>&nbsp;Habilitar
          </MDButton>
        )}
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
                &nbsp;&nbsp;&nbsp;
                <MDButton
                  variant="gradient"
                  color={showActive ? "dark" : "secondary"}
                  onClick={() => setShowActive(!showActive)}
                >
                  {showActive ? "Mostrar inactivos" : "Mostrar activos"}
                </MDButton>
              </MDBox>
              <MDBox>
                <RegUsers hClose={handleClose} show={show} />
                <EditUser
                  hClose={handleCloseEdit}
                  show={showEdit}
                  userData={userEdit}
                  refreshUsers={fetchUsers}
                />
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
                  ) : filteredUsers.length === 0 ? (
                    <>
                      {showActive ? (
                        <MDBox p={3} textAlign="center">
                          <MDTypography variant="body2" color="text">
                            No hay usuarios registrados activos
                          </MDTypography>
                        </MDBox>
                      ) : (
                        <MDBox p={3} textAlign="center">
                          <MDTypography variant="body2" color="text">
                            No hay usuarios registrados inactivos
                          </MDTypography>
                        </MDBox>
                      )}
                    </>
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
