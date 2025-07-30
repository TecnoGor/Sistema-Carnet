import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserForm from "examples/Forms/User/UserForm";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
// import PersonaForm from "examples/Cards/Forms/Persona";
// import DatosPersonales from "examples/Cards/Forms/DatosPersonales";

function EditUser({ hClose, show, userData, refreshUsers }) {
  const API_Host = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    username: "",
    ci: "",
    email: "",
    password: "",
    password2: "",
    rol: "",
  });
  const [loadingUser, setLoadingUser] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (show && userData) {
      const fetchUserData = async () => {
        try {
          setLoadingUser(true);
          const response = await axios.get(`${API_Host}/api/user/${userData}`);

          setFormData({
            firstname: response.data.firstname,
            secondname: response.data.secondname,
            username: response.data.username,
            typeCi: response.data.typeCi || "V",
            ci: response.data.ci,
            mail: response.data.mail,
            phone: response.data.phone,
            password: "",
            password2: "",
            rol: response.data.rol,
          });
        } catch (error) {
          console.error("Error al cargar los datos del usuario", error);
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Error al cargar los datos del usuario. Por favor, inténtelo de nuevo.",
          });
          hClose();
        } finally {
          setLoadingUser(false);
        }
      };
      fetchUserData();
    }
  }, [show, userData, API_Host, hClose]);

  const validateForm = () => {
    // Validar que todos los campos estén completos
    const requiredFields = ["typeCi", "ci", "firstname", "secondname", "mail", "phone", "username"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          title: "Error!",
          text: `Por favor complete todos los campos!`,
          icon: "error",
          draggable: true,
        });
        // alert(`Por favor complete el campo ${field}`);
        return false;
      }
    }
    // Validar que las contraseñas coincidan
    // if (formData.password !== formData.password2) {
    //   Swal.fire({
    //     title: "Error!",
    //     text: `Las contraseñas no coinciden`,
    //     icon: "error",
    //     draggable: true,
    //   });
    //   return false;
    // }

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.mail)) {
      alert("Por favor ingrese un correo electrónico válido");
      return false;
    }

    return true;
  };

  const updateUser = async () => {
    if (!validateForm()) return;
    try {
      const updateData = {
        id: userData,
        firstname: formData.firstname,
        secondname: formData.secondname,
        mail: formData.mail,
        phone: formData.phone,
        username: formData.username,
        password: formData.password,
        typeCi: formData.typeCi,
        ci: formData.ci,
        status: true,
        rol: formData.rol,
      };

      const response = await axios.post(`${API_Host}/api/updateUser`, updateData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        Swal.fire({
          title: "Usuario Actualizado!",
          text: "El usuario ha sido actualizado con éxito",
          icon: "success",
          draggable: true,
        });
        refreshUsers();
        hClose(); // Cerrar el modal después del registro exitoso
      }
    } catch (error) {
      console.error("Error al editar el usuario: ", error);
      if (error.response) {
        // alert(`Error: ${error.response.data.message || "Error al registrar usuario"}`);
        Swal.fire({
          title: "Error al actulizar el usuario",
          text: `Error: ${error.response.data.message || "Error al registrar usuario"}`,
          icon: "error",
          draggable: true,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error de conexión con el servidor 🛠 , por favor intente mas tarde.",
          icon: "error",
          draggable: true,
        });
      }
    }
  };

  return (
    <Modal size="lg" show={show} onHide={hClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {currentStep === 1 && <PersonaForm />} */}
        {/* {currentStep === 2 && <DatosPersonales />} */}
        {loadingUser ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <UserForm formData={formData} handleChange={handleChange} />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={updateUser}>
          Editar
        </Button>
        <Button variant="secondary" onClick={hClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

EditUser.defaultProps = {
  show: false,
};

EditUser.propTypes = {
  show: PropTypes.bool,
  hClose: PropTypes.func,
  userData: PropTypes.object,
  refreshUsers: PropTypes.func,
};

export default EditUser;
