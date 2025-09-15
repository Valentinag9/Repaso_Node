Comandos Docker 
https://docukelo-icesi.onrender.com/docs/computacion-3/semana-1/docker-commands


docker compose up -d

sudo systemctl start docker


npm run dev

npm run build

npm install


🔹 1. Crear la carpeta del proyecto
mkdir mi-proyecto-ts
cd mi-proyecto-ts

🔹 2. Inicializar Node.js
npm init -y


👉 Esto crea el archivo package.json con la configuración básica.

🔹 3. Instalar TypeScript y herramientas necesarias
npm install --save-dev typescript ts-node @types/node nodemon


typescript → compilador de TS.

ts-node → permite ejecutar .ts directamente sin compilar.

@types/node → tipos de Node.js para TypeScript.

nodemon → reinicia automáticamente la app al detectar cambios.

🔹 4. Inicializar TypeScript
npx tsc --init


👉 Esto crea un archivo tsconfig.json.
Dentro de él, asegúrate de tener algo parecido a:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

🔹 5. Crear estructura del proyecto
mkdir src
touch src/index.ts


En src/index.ts escribe algo básico:

console.log("Hola desde TypeScript 🚀");

🔹 6. Scripts en package.json

Agrega estos scripts en el package.json:

"scripts": {
  "dev": "nodemon --watch src --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

🔹 7. Ejecutar en desarrollo
npm run dev


👉 Verás en consola:

Hola desde TypeScript 🚀


1. Crear el proyecto base
mkdir backend-proyecto
cd backend-proyecto
npm init -y


Instalar dependencias principales:

npm install express mongoose jsonwebtoken bcrypt


Dependencias de desarrollo:

npm install --save-dev typescript ts-node @types/node @types/express @types/jsonwebtoken @types/bcrypt nodemon


Inicializar TypeScript:

npx tsc --init


Configura tsconfig.json con algo así:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}


Estructura inicial del proyecto:

backend-proyecto/
│── src/
│   ├── index.ts
│   ├── config/
│   │   └── db.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── Project.ts
│   │   └── Task.ts
│   ├── routes/
│   │   ├── user.routes.ts
│   │   ├── project.routes.ts
│   │   └── task.routes.ts
│   ├── controllers/
│   │   ├── user.controller.ts
│   │   ├── project.controller.ts
│   │   └── task.controller.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── roles.ts
│   └── utils/
│       └── generateJWT.ts
