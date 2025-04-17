# Rick & Morty Explorer

![Rick & Morty Logo](./src/img/rick-morty.png)

## 📖 Descripción

Rick & Morty Explorer es una aplicación web desarrollada con React que permite explorar y conocer los personajes de la famosa serie "Rick & Morty". La aplicación utiliza la [Rick and Morty API](https://rickandmortyapi.com/) para obtener información detallada sobre los personajes de la serie.

## ✨ Características

- 🔍 Explorar todos los personajes de Rick & Morty
- 📊 Visualización de detalles como: especie, estado, episodios en los que aparece
- 🎨 Interfaz de usuario atractiva y responsiva
- 🔄 Manejo de estados de carga y errores

## 🚀 Comenzando

### Prerrequisitos

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior) o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/rick-morty-explorer.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd rick-morty-explorer
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```
   o
   ```bash
   yarn install
   ```

4. Inicia la aplicación en modo desarrollo:
   ```bash
   npm start
   ```
   o
   ```bash
   yarn dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

## 🏗️ Estructura del Proyecto

```
rick-morty-explorer/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── img/
│   │   └── rick-morty.png
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 📚 Funcionamiento de la Aplicación

### App.js
Componente principal que maneja:
- Estado de personajes
- Estado de carga de datos (loading)
- Estado de errores
- Lógica para obtener datos de la API
- Renderizado condicional de la interfaz de usuario

### Flujo de la aplicación:
1. Al iniciar, se muestra una imagen de Rick & Morty y un botón para buscar personajes.
2. Al hacer clic en el botón, se realiza una petición a la API de Rick & Morty.
3. Durante la carga, se muestra un indicador.
4. Si ocurre un error, se muestra un mensaje de error.
5. Cuando se cargan los datos correctamente, se muestran los personajes en tarjetas.
6. Cada tarjeta muestra:
   - Imagen del personaje
   - Nombre
   - Especie (con código de color)
   - Estado (vivo, muerto, desconocido)
   - Número de episodios en los que aparece
7. En la vista de personajes hay una opción para volver a la pantalla inicial.

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuario
- [Rick and Morty API](https://rickandmortyapi.com/) - API REST con información sobre Rick and Morty
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) - Para estilos y transiciones

## 🔧 Funcionalidades Implementadas

### Manejo de Estado
La aplicación maneja varios estados para controlar:
- Carga de datos (loading)
- Errores en la comunicación con la API
- Datos de personajes

### Diseño Responsivo
La interfaz se adapta a diferentes tamaños de pantalla mediante el uso de CSS Grid y Media Queries, optimizando la experiencia en dispositivos móviles y de escritorio.

### Experiencia de Usuario Mejorada
- Indicadores visuales durante los estados de carga
- Mensajes de error informativos
- Códigos de color para estados y especies
- Efectos de hover en tarjetas y botones

## 📱 Compatibilidad

La aplicación es compatible con:
- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Dispositivos móviles con iOS y Android

## 🔍 Posibles Mejoras Futuras

- Implementación de paginación para navegar entre más personajes
- Búsqueda de personajes por nombre
- Filtrado por especie, estado, etc.
- Detalles expandidos para cada personaje
- Separación en componentes más pequeños y reutilizables

## 🤝 Contribuir

1. Haz un Fork del proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add some AmazingFeature'`)
4. Haz Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 🙏 Agradecimientos

- [Rick and Morty API](https://rickandmortyapi.com/) por proporcionar los datos
- La comunidad de React por sus recursos y documentación