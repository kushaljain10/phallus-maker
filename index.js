const fs = import('fs');
import {generateBro} from './generate.js';
// import {fetchCSVData} from './random_generator.js';
import express from 'express';
import cors from 'cors';
const app = express();
// import http from 'http';
const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

app.use(cors());

app.get('/generate', generateBro)

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
