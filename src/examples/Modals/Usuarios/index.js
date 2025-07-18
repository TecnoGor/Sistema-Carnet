import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserForm from "examples/Forms/User/UserForm";
// import PersonaForm from "examples/Cards/Forms/Persona";
// import DatosPersonales from "examples/Cards/Forms/DatosPersonales";

function RegUsers({ hClose, show }) {
  return (
    <Modal size="lg" show={show} onHide={hClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {currentStep === 1 && <PersonaForm />} */}
        {/* {currentStep === 2 && <DatosPersonales />} */}
        <UserForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Siguiente</Button>
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
