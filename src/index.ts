import express, { Express, Request, Response } from 'express';

import { db } from './config/connectionDB';
import { executionRouter, processRouter } from './routes';


const app: Express = express(); // Creación de una instancia de express

process.loadEnvFile(); // Process es un módulo de nodejs para manejar el entorno de ejecución, aquí cargamos las variables de entorno desde el archivo .env

const port = process.env.PORT || 3000; // Definimos el puerto en el que escuchará el servidor, si no se especifica en las variables de entorno, usará el puerto 3000 por defecto.

app.use(express.json()); // Módulo de Express para manejar solicitudes JSON
app.use(express.urlencoded({ extended: true })); // Módulo de Express para manejar solicitudes URL codificadas


app.use("/api/process", processRouter.router)
app.use("/api/execution", executionRouter.router)


app.get("/", (req: Request, res: Response) => { // Definimos una ruta raíz para probar que el servidor está funcionando correctamente.
    res.send('Hola Mundo');
});


// Conectamos a la base de datos y luego iniciamos el servidor
db.then(() =>
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
);