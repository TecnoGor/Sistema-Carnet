const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sicven',
  password: 'postgres',
  port: 5432,
});

// Ruta para obtener los datos de la base de datos
app.get('/api/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT id, firstname, secondname, mail, phone, username, status, rol FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(501).send('Error al obtener los datos');
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

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});