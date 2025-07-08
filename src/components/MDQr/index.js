import React from "react";
import { QRCodeSVG } from "qrcode.react";
import PropTypes from "prop-types";
// import { MDBox } from "components/MDBox";

const CarnetQR = ({ empleadoId }) => {
  const API_Host = process.env.REACT_APP_API_API_URL;
  if (!empleadoId) return null;

  const qrValue = `${API_Host}/?ced=${empleadoId}`;

  return (
    <div style={{ padding: "0", display: "absolute", justifyContent: "center" }}>
      <QRCodeSVG value={qrValue} size={60} level="H" includeMargin={true} />
    </div>
  );
};

CarnetQR.propTypes = {
  empleadoId: PropTypes.oneOfType([
    PropTypes.string, // Acepta string
    PropTypes.number, // o número
  ]).isRequired, // y es obligatorio
};

export default CarnetQR;
