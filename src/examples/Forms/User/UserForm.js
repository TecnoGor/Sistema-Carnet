import React from "react";
import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserForm({ formData, handleChange }) {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="tipoCed.ControlSelect1">
            <Form.Label>Tipo de Cedula</Form.Label>
            <Form.Select
              value={formData.typeCi || ""}
              onChange={handleChange}
              name="typeCi"
              aria-label="Default example"
            >
              <option>Seleccione...</option>
              <option value="V">V</option>
              <option value="E">E</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="cedula.ControlInput1">
            <Form.Label>Cedula</Form.Label>
            <Form.Control
              value={formData.ci || ""}
              onChange={handleChange}
              name="ci"
              type="number"
              placeholder="12345678"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="nombres.ControlInput2">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              value={formData.firstname || ""}
              onChange={handleChange}
              name="firstname"
              type="text"
              placeholder="Nombres"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="apellidos.ControlInput3">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              value={formData.secondname || ""}
              onChange={handleChange}
              name="secondname"
              type="text"
              placeholder="Apellidos"
            />
          </Form.Group>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="correo.ControlInput4">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              value={formData.mail || ""}
              onChange={handleChange}
              name="mail"
              type="mail"
              placeholder="Correo Electronico"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="telefono.ControlInput4">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              value={formData.phone || ""}
              onChange={handleChange}
              name="phone"
              type="text"
              placeholder="Numero de Telefono"
            />
          </Form.Group>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="nomuser.ControlInput5">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              value={formData.username || ""}
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Nombre de Usuario"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="nomuser.ControlInput5">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              value={formData.password || ""}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="nomuser.ControlInput5">
            <Form.Label>Confirmación</Form.Label>
            <Form.Control
              value={formData.password2 || ""}
              onChange={handleChange}
              name="password2"
              type="password"
              placeholder="Ingrese de nuevo"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="tipoCed.ControlSelect1">
            <Form.Label>Rol</Form.Label>
            <Form.Select
              value={formData.rol || ""}
              onChange={handleChange}
              name="rol"
              aria-label="Default example"
            >
              <option>Seleccione...</option>
              <option value="2">Administrador</option>
              <option value="3">Analista</option>
              <option value="4">Recepcionista</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

UserForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UserForm;
