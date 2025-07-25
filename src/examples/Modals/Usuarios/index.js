import React, { useState } from "react";
import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserForm from "examples/Forms/User/UserForm";
import axios from "axios";
import Swal from "sweetalert2";
// import PersonaForm from "examples/Cards/Forms/Persona";
// import DatosPersonales from "examples/Cards/Forms/DatosPersonales";

function RegUsers({ hClose, show }) {
  const API_Host = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    ci: "",
    email: "",
    password: "",
    password2: "",
    rol: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Validar que todos los campos estén completos
    const requiredFields = [
      "typeCi",
      "ci",
      "firstname",
      "secondname",
      "mail",
      "phone",
      "username",
      "password",
      "password2",
    ];
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
    if (formData.password !== formData.password2) {
      Swal.fire({
        title: "Error!",
        text: `Las contraseñas no coinciden`,
        icon: "error",
        draggable: true,
      });
      return false;
    }

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.mail)) {
      alert("Por favor ingrese un correo electrónico válido");
      return false;
    }

    return true;
  };

  const regUser = async () => {
    if (!validateForm()) return;
    try {
      const userData = {
        firstname: formData.firstname,
        secondname: formData.secondname,
        mail: formData.mail,
        phone: formData.phone,
        username: formData.username,
        password: formData.password,
        typeCi: formData.typeCi,
        ci: formData.ci,
        status: 1,
        rol: formData.rol,
      };

      const response = await axios.post(`${API_Host}/api/insertUsers`, userData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        Swal.fire({
          title: "Usuario Registrado!",
          text: "El usuario ha sido registrado con éxito",
          icon: "success",
          draggable: true,
        });
        hClose(); // Cerrar el modal después del registro exitoso
      }
    } catch (error) {
      console.error("Error al guardar al usuario: ", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || "Error al registrar usuario"}`);
      } else {
        alert("Error de conexión con el servidor");
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
        <UserForm formData={formData} handleChange={handleChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={regUser}>
          Registrar
        </Button>
        <Button variant="secondary" onClick={hClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

RegUsers.defaultProps = {
  show: false,
};

RegUsers.propTypes = {
  show: PropTypes.bool,
  hClose: PropTypes.func,
};

export default RegUsers;
