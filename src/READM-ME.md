# 🌀 Rick & Morty App

Aplicación web desarrollada con React que consume la API pública de Rick & Morty para explorar personajes del multiverso, realizar búsquedas, navegar entre páginas y gestionar una colección de favoritos.

---

## 🚀 Características

### 👥 Personajes

- Listado de personajes obtenido desde la API de Rick & Morty.
- Tarjetas dinámicas con información del personaje.
- Modal con información detallada al hacer clic en una tarjeta.
- Indicadores visuales para:
  - Estado (Alive, Dead, Unknown).
  - Género.
  - Especie.

### 🔍 Búsqueda

- Filtro por nombre.
- Búsqueda en tiempo real utilizando parámetros de consulta de la API.

### 📄 Paginación

- Navegación entre páginas de resultados.
- Botones Previous y Next.
- Deshabilitación automática cuando no existen más resultados.

### ❤️ Favoritos

- Agregar y eliminar personajes favoritos.
- Persistencia mediante Local Storage.
- Vista exclusiva para visualizar la colección de favoritos.

### 🎨 Diseño

- Temática inspirada en Rick & Morty.
- Navbar personalizada con iconografía.
- Tarjetas interactivas con efectos hover.
- Animaciones para favoritos.
- Modal reutilizable para detalles.
- Landing page animada con portal interdimensional y personajes orbitando alrededor.

---

## 🛠️ Tecnologías utilizadas

- React
- React Router
- JavaScript
- CSS Modules
- Lucide React
- Fetch API
- Local Storage
- Rick and Morty API

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/slathercordova/rick-and-morty-react
```

### 2. Ingresar al proyecto

```bash
cd nombre-del-proyecto
```

### 3. Instalar dependencias

```bash
yarn install
```

### 4. Ejecutar en desarrollo

```bash
yarn dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

---

## 🌐 API utilizada

Rick and Morty API

https://rickandmortyapi.com/

### Endpoint principal

```http
GET https://rickandmortyapi.com/api/character
```

### Búsqueda por nombre

```http
GET https://rickandmortyapi.com/api/character?name=rick
```

### Paginación

```http
GET https://rickandmortyapi.com/api/character?page=2
```

---

## 📁 Estructura del proyecto

```text
src/
│
├── app/
│
├── common/
│   ├── components/
│   │   ├── character-card/
│   │   ├── modal/
│   │   ├── navbar/
│   │   └── overlay/
│   │
│   ├── images/
│   │
│   ├── layout/
│   │
│   └── styles/
│
├── features/
│   ├── landing/
│   ├── favoritos/
│   └── rick-and-morty/
│       ├── hooks/
│       ├── pages/
│       └── services/
│
├── router/
│
├── App.jsx
│
└── main.jsx
```

---

## ❤️ Gestión de favoritos

Los favoritos se almacenan en Local Storage.

Ejemplo:

```json
[
  {
    "id": 1,
    "name": "Rick Sanchez"
  }
]
```

Esto permite mantener la colección incluso después de cerrar el navegador.

---

## 📸 Funcionalidades implementadas

- [x] Consumo de API
- [x] Renderizado dinámico
- [x] Componentización
- [x] Custom Hooks
- [x] Paginación
- [x] Búsqueda por nombre
- [x] Modal reutilizable
- [x] Favoritos
- [x] Persistencia con Local Storage
- [x] Landing Page animada
- [x] Diseño responsive básico

---

## 🎓 Objetivo académico

Proyecto desarrollado para practicar:

- React
- Componentes reutilizables
- Hooks personalizados
- Consumo de APIs REST
- Manejo de estado
- React Router
- Persistencia local
- CSS Modules
- Buenas prácticas de organización de proyectos

---

## 👨‍💻 Autor

Desarrollado como proyecto de aprendizaje por Slather Córdova utilizando React y la Rick & Morty API.