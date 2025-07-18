const express = require('express');
const https = require('https');
const fs = require('fs');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { Key } = require('@mui/icons-material');
// const { default: data } = require('layouts/tables/data/authorsTableData');
require('dotenv').config({ path: '.env.production' });

const app = express();
const port = process.env.REACT_APP_API_PORT;
const options = {
  key: fs.readFileSync(process.env.REACT_APP_KEY_CERT),
  cert: fs.readFileSync(process.env.REACT_APP_CERT),
  passphrase: process.env.REACT_APP_PARAPHRASE_CERT // Opcional si usaste contraseña
};

const SECRET_KEY = process.env.REACT_APP_API_KEY;
const corsOptions = {
  origin: [
    process.env.REACT_APP_ORIGIN_URL,
    process.env.REACT_APP_ORIGIN_LOCAL,
    process.env.REACT_APP_ORIGIN_HOST
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.use(cors({
//   origin: [
//     'https://localhost:3001',  // Frontend
//     'http://localhost:3000'   // Para desarrollo
//   ],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

const pool = new Pool({
    user: process.env.REACT_APP_DB_USER,
    host: process.env.REACT_APP_DB_HOST,
    database: process.env.REACT_APP_DB_NAME,
    password: process.env.REACT_APP_DB_PASSWORD,
    port: process.env.REACT_APP_DB_PORT,
});

const secondPool = new Pool({
    user: process.env.REACT_APP_DB_SECOND_USER,
    host: process.env.REACT_APP_DB_SECOND_HOST,
    database: process.env.REACT_APP_DB_SECOND_NAME,
    password: process.env.REACT_APP_DB_SECOND_PASSWORD,
    port: process.env.REACT_APP_DB_SECOND_PORT,
});

// Función para encriptar la contraseña en SHA-256
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Inicio API SIGESP

app.get('/empleado/:ced', async (req, res) => {
  const { ced } = req.params;

  try {
    const result = await secondPool.query("SELECT DISTINCT p.cedper, p.nacper, p.fecingper, p.nomper, p.apeper, pn.sueper, ac.denasicar, c.descar, u.desuniadm, pn.ofiuniadm, pn.codnom, ptc.dentippersss, trim(g.denger) as denger, n.codnom, n.peractnom FROM sno_personal p INNER JOIN sno_hnomina n on n.peractnom in (select max(codperi) from sno_hperiodo where codnom = n.codnom and (numpernom = 24 or numpernom = 52)) INNER JOIN sno_hpersonalnomina pn on p.codper = pn.codper and pn.codnom = n.codnom and pn.staper in ('1', '2') AND pn.codperi = n.peractnom LEFT JOIN sno_hasignacioncargo ac on n.codemp = ac.codemp AND n.codnom = ac.codnom AND pn.codasicar = ac.codasicar AND ac.codperi = n.peractnom LEFT JOIN sno_hunidadadmin u on u.minorguniadm = pn.minorguniadm and u.ofiuniadm = pn.ofiuniadm and u.uniuniadm = pn.uniuniadm and u.depuniadm = pn.depuniadm and u.prouniadm = pn.prouniadm AND u.codperi = n.peractnom and u.codnom = pn.codnom LEFT JOIN srh_gerencia g on g.codger = p.codger LEFT JOIN sno_hcargo c on pn.codemp = c.codemp AND pn.codnom = c.codnom AND pn.codcar = c.codcar AND c.codperi = n.peractnom LEFT JOIN sno_hasignacioncargo a on a.codasicar = pn.codasicar and a.codnom = pn.codnom AND a.codperi = n.peractnom INNER JOIN sno_tipopersonalsss ptc on p.codtippersss = ptc.codtippersss AND pn.staper in ('1', '2') LEFT JOIN sno_concepto conc ON conc.codnom = n.codnom LEFT JOIN sno_hconceptopersonal cp ON cp.codemp=pn.codemp AND cp.codper=pn.codper AND cp.codnom=pn.codnom AND cp.aplcon = 1 AND cp.codperi = n.peractnom and cp.codconc = conc.codconc LEFT JOIN sno_hsalida csal ON csal.codemp = pn.codemp AND csal.codper = pn.codper AND csal.tipsal = 'A' AND csal.codperi = n.peractnom AND csal.codconc = conc.codconc WHERE p.cedper = $1 GROUP BY p.cedper, p.nacper, p.fecingper, p.nomper, p.apeper, pn.sueper, ac.denasicar, c.descar, u.desuniadm, pn.ofiuniadm, pn.codnom, ptc.dentippersss, g.denger, n.codnom, n.peractnom, p.cedper, pn.sueintper, n.desnom;", [ced]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Empleado no encontrado');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al consultar la base de datos.');
  }
});

// Fin API SIGESP

app.get('/verify-token', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.json({ valid: false });

        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await pool.query('SELECT * FROM users WHERE codper = $1', [decoded.userId]);
        
        if (user.rows.length === 0) return res.json({ valid: false });

        res.json({ 
            valid: true,
            user: {
                codper: user.rows[0].codper,
                firstname: user.rows[0].firstname,
                rol: user.rows[0].rol
            }
        });
    } catch (err) {
        res.json({ valid: false });
    }
});

// Ruta para logout
app.post('/logout', (req, res) => {
    // Aquí podrías invalidar el token si usas una lista negra
    res.json({ success: true });
});

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
    const { firstname, secondname, ci, mail, phone, username, password, status, rol } = req.body;
    const passwordHash = hashPassword(password);

    try {
        const result = await pool.query(
            'INSERT INTO users (firstname, secondname, ci, mail, phone, username, password, status, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [firstname, secondname, ci, mail, phone, username, passwordHash, status, rol]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const passwordHash = hashPassword(password);

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, passwordHash]
        );
        if (result.rows.length > 0) {
            const token = jwt.sign({ userId: result.rows[0].codper }, SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token});
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para consultar los usuarios
app.get('/api/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT id, firstname, secondname, ci, mail, phone, username, status, rol FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(501).send('Error al obtener los datos');
    }
});

// Ruta para guardar las fotos
app.post('/api/guardar-foto', async (req, res) => {
    try {
        const { cedula, foto } = req.body;

        if (!cedula || !foto) {
            return res.status(400).json({ 
                success: false,
                message: 'Cédula y foto son requeridos' 
            });
        }

        const result = await pool.query(
            `INSERT INTO personal(codpersonal, foto)
             VALUES ($1, $2)
             ON CONFLICT (codpersonal)
             DO UPDATE SET foto = EXCLUDED.foto
             RETURNING *`,
            [cedula, foto]
        );

        return res.status(200).json({
            success: true,
            data: result.rows[0],
            message: 'Foto guardada exitosamente'
        });

    } catch (error) {
        console.error('Error al guardar foto:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
});

app.get('/api/color_ger/:ofiuniadm', async (req, res) => {
  const { ofiuniadm } = req.params;
  try {
    // console.log(`Consultando codger: ${ofiuniadm}`); // Log para depuración
    
    const result = await pool.query(
      'SELECT codger, color FROM gerencia_color WHERE codger = $1', 
      [ofiuniadm]
    );
    
    // console.log(`Resultados encontrados: ${result.rows.length}`); // Log para depuración
    
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.json({});
    }
  } catch (err) {
    console.error('Error detallado:', {
      message: err.message,
      stack: err.stack,
      query: 'SELECT codger, color FROM gerencia_color WHERE codger = $1',
      parametro: ofiuniadm
    });
    res.status(500).json({ 
      error: 'Error al consultar la base de datos',
      detalle: err.message 
    });
  }
});

app.get('/api/buscarFoto/:ced', async (req, res) => {
  try {
    // console.log(`Consultando codger: ${ofiuniadm}`); // Log para depuración
    const { ced } = req.params;

    const result = await pool.query(
      'SELECT foto FROM personal WHERE codpersonal = $1', 
      [ced]
    );
    
    // console.log(`Resultados encontrados: ${result.rows.length}`); // Log para depuración
    
    if (result.rows.length > 0 && result.rows[0].foto) {
      res.status(200).json({
        success: true,
        foto: result.rows[0].foto
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Foto no encontrada",
      });
    }
  } catch (err) {
    console.error('Error al buscar foto:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno al buscar la foto'
    });
  }
});

app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK');
});

// https.createServer(options, app).listen(port, '0.0.0.0', () => {
//   console.log('API HTTPS en https://10.16.12.47:5001');
// })
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});