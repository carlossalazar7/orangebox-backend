# OrangeBox Backend API

## Descripción

OrangeBox Backend es una API RESTful construida con Node.js, Express y Sequelize para la gestión de productos y proveedores. Utiliza una base de datos PostgreSQL y soporta operaciones CRUD, paginación, filtrado, ordenamiento y selección de campos.

---

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd orangebox-backend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   DB_HOST=dpg-............
   DB_USER=orangebox
   DB_PASS=vfzm55v......
   DB_NAME=productos_db_qitz
   DB_PORT=5432
   DB_SSL=true
   ```

4. **Configurar Sequelize**
   El archivo `config/config.json` ya está preparado para usar la base de datos remota con SSL.

5. **Migraciones y seeders**
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. **Iniciar el servidor**
   ```bash
   npm start
   ```
   El servidor estará disponible en `http://localhost:3000`.

---

## Endpoints Principales

### Productos

- **GET /products**  
  Lista todos los productos.

- **GET /products/:id**  
  Obtiene un producto por ID.

- **POST /products**  
  Crea un nuevo producto.

- **PUT /products/:id**  
  Actualiza un producto existente.

- **DELETE /products/:id**  
  Elimina un producto.

### Proveedores

- **GET /providers**  
  Lista todos los proveedores.

- **GET /providers/:id**  
  Obtiene un proveedor por ID.

- **POST /providers**  
  Crea un nuevo proveedor.

- **PUT /providers/:id**  
  Actualiza un proveedor existente.

- **DELETE /providers/:id**  
  Elimina un proveedor.

---

## Características Avanzadas

### a. Selección de campos (fields)
Devuelve solo las propiedades especificadas.
```http
GET /products?fields=name,price
```

### b. Paginación
Devuelve una página específica de resultados.
```http
GET /products?page=2&limit=5
```

### c. Ordenamiento
Ordena los resultados por una o varias propiedades.
```http
GET /products?sort=-price
GET /products?sort=name,-price
```

### d. Filtrado
Filtra los resultados por cualquier propiedad.
```http
GET /products?providerId=1
GET /products?price=1200
```

---

## Ejemplos de Uso (Colección Postman)

La colección `orangebox_api_collection.json` incluye ejemplos de todas las rutas y características avanzadas. Puedes importarla en Postman para probar la API fácilmente.

---

## Estructura de Carpetas

```
orangebox-backend/
│
├── config/
│   └── config.json
├── controllers/
│   ├── productController.js
│   └── providerController.js
├── migrations/
├── models/
├── seeders/
├── .env
├── orangebox_api_collection.json
└── ...
```

---

## Scripts útiles

- **Migrar base de datos:**  
  `npx sequelize-cli db:migrate`

- **Ejecutar seeders:**  
  `npx sequelize-cli db:seed:all`

- **Revertir migraciones:**  
  `npx sequelize-cli db:migrate:undo:all`

- **Revertir seeders:**  
  `npx sequelize-cli db:seed:undo:all`

---

## Notas

- La API está preparada para funcionar tanto en local como en producción (Render).
- Recuerda mantener tus credenciales seguras y no exponerlas en repositorios públicos.

---

## Autor

Carlos Peñate
---