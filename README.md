# Docker y Node.js con TypeScript - Guía de Setup

## 📋 Comandos Docker Básicos

Para más información detallada, consulta: [Comandos Docker - Docukelo ICESI](https://docukelo-icesi.onrender.com/docs/computacion-3/semana-1/docker-commands)

### Comandos Principales
```bash
# Iniciar contenedores en segundo plano
docker compose up -d

# Iniciar el servicio Docker (Linux)
sudo systemctl start docker

# Comandos de desarrollo
npm run dev
npm run build
npm install
```
public async login(email:string ): Promise<void>{
        const userExist = await UserModel.findOne({email});
        if(userExist=== null){
            throw new ReferenceError("Not Authorized")
        }
    }

---

## 🚀 Setup Inicial de Proyecto TypeScript

### 🔹 1. Crear la carpeta del proyecto
```bash
mkdir mi-proyecto-ts
cd mi-proyecto-ts
```

### 🔹 2. Inicializar Node.js
```bash
npm init -y
```
👉 Esto crea el archivo `package.json` con la configuración básica.

### 🔹 3. Instalar TypeScript y herramientas necesarias
```bash
npm install --save-dev typescript ts-node @types/node nodemon
```

**Dependencias instaladas:**
- `typescript` → compilador de TS
- `ts-node` → permite ejecutar .ts directamente sin compilar
- `@types/node` → tipos de Node.js para TypeScript
- `nodemon` → reinicia automáticamente la app al detectar cambios

### 🔹 4. Inicializar TypeScript
```bash
npx tsc --init
```
👉 Esto crea un archivo `tsconfig.json`.

Dentro de él, asegúrate de tener algo parecido a:
```json
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
```

### 🔹 5. Crear estructura del proyecto
```bash
mkdir src
touch src/index.ts
```

En `src/index.ts` escribe algo básico:
```typescript
console.log("Hola desde TypeScript 🚀");
```

### 🔹 6. Scripts en package.json
Agrega estos scripts en el `package.json`:
```json
"scripts": {
  "dev": "nodemon --watch src --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

### 🔹 7. Ejecutar en desarrollo
```bash
npm run dev
```
👉 Verás en consola:
```
Hola desde TypeScript 🚀
```

---

## 🏗️ Setup Backend con Express y MongoDB

### 1. Crear el proyecto base
```bash
mkdir backend-proyecto
cd backend-proyecto
npm init -y
```

### 2. Instalar dependencias principales
```bash
npm install express mongoose jsonwebtoken bcrypt
```

### 3. Dependencias de desarrollo
```bash
npm install --save-dev typescript ts-node @types/node @types/express @types/jsonwebtoken @types/bcrypt nodemon
```

### 4. Inicializar TypeScript
```bash
npx tsc --init
```

Configura `tsconfig.json` con:
```json
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
```

### 5. Estructura inicial del proyecto
```
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
```

---

## 📝 Notas Importantes

- Asegúrate de tener Docker instalado y ejecutándose antes de usar los comandos de Docker
- Los comandos `npm run dev`, `npm run build` y `npm install` son estándar para proyectos Node.js
- La estructura del backend es escalable y sigue buenas prácticas de organización de código
- Utiliza `nodemon` en desarrollo para recargas automáticas del servidor

