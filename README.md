Dream Match
Este es un proyecto de Next.js que te permite crear y gestionar equipos de fútbol con tus jugadores favoritos.

Componentes
PlayerSearch: Componente que permite buscar jugadores en una base de datos y seleccionarlos para añadirlos a un equipo. Utiliza axios para realizar solicitudes a la API y muestra los resultados con imágenes y estadísticas de los jugadores.
MainContainer: Contenedor principal donde se gestionan los equipos. Permite añadir jugadores a los equipos y muestra el progreso de la formación de cada equipo.
WelcomeOverlay: Pantalla de bienvenida que se muestra al inicio, presentando la aplicación con un mensaje introductorio y un icono animado de fútbol.
RootLayout: Estructura principal de la aplicación que envuelve todas las páginas y establece metadatos y estilos globales.
Cómo correr en local
Para correr el proyecto en local, sigue estos pasos:

Clona el repositorio:

bash
Copiar código
git clone https://github.com/leandrofiadone/dream-match.git
cd dream-match
Instala las dependencias:

bash
Copiar código
npm install
# o
yarn install
Corre el servidor de desarrollo:

bash
Copiar código
npm run dev
# o
yarn dev
Abre http://localhost:3000 en tu navegador para ver la aplicación.
