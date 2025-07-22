import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserForm() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="tipoCed.ControlSelect1">
            <Form.Label>Tipo de Cedula</Form.Label>
            <Form.Select aria-label="Default example">
              <option>Seleccione...</option>
              <option value="V">V</option>
              <option value="E">E</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="cedula.ControlInput1">
            <Form.Label>Cedula</Form.Label>
            <Form.Control type="number" placeholder="12345678" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="nombres.ControlInput2">
            <Form.Label>Nombres</Form.Label>
            <Form.Control type="text" placeholder="Nombres" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="apellidos.ControlInput3">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Apellidos" />
          </Form.Group>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="correo.ControlInput4">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="mail" placeholder="Correo Electronico" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="telefono.ControlInput4">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Numero de Telefono" />
          </Form.Group>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="nomuser.ControlInput5">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Nombre de Usuario" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="nomuser.ControlInput5">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="nomuser.ControlInput5">
            <Form.Label>Confirmación</Form.Label>
            <Form.Control type="password" placeholder="Ingrese de nuevo" />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default UserForm;
