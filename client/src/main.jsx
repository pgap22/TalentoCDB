import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { FadeIn } from './components/ui/fadeIn/fadeIn.jsx';
import { BackButton } from './components/ui/goBack/GoBack.jsx';
import "./index.css";

// Importaciones componentes - publicos
import { Header } from './components/Header/Header';
import { Welcome } from './pages/public/Welcome/welcome.jsx';
import { Login } from './pages/public/Login/login';
import { Error404 } from './pages/public/404Error/404err.jsx';
import Translate from './components/ui/translate/translate.jsx';

// Atleta - Rutas privadas
import { PlayerResults } from './pages/logged_in/Atleta/Results.jsx';
import { PlayerProfile } from './pages/logged_in/Atleta/PlayerProfile.jsx';


// Coach - Rutas privadas
import { Home } from './pages/public/Home/home.jsx';
import { Selecciones } from './pages/logged_in/Admin/Selecciones.jsx';
import { MiembrosCat } from './pages/ListasCategoria_revisar/MiembrosCat.jsx';
import { AtletasSelec } from './pages/logged_in/Coach/Jugadores/AtletasSeleccionados.jsx';
import { ReviewPlayer } from './pages/logged_in/Coach/Evaluaciones/CalificarRubrica/ReviewPlayer.jsx';

import { RegisterCategory } from './pages/logged_in/Coach/Evaluaciones/RegistrarCategoria/NuevaCategoria.jsx';
import { EditCategory } from './pages/logged_in/Coach/Evaluaciones/RegistrarCategoria/editarCategoria.jsx';
import { PerfilCoach } from './pages/logged_in/Coach/Perfil/perfilcoach.jsx'

import { ViewCategories } from './pages/logged_in/Coach/Jugadores/ListCategory.jsx';
import { RegisterAthlete } from './pages/logged_in/Coach/Evaluaciones/Registrar_Atleta/RegisterAthlete.jsx';
import { Registrar_Rubrica } from './pages/logged_in/Coach/Evaluaciones/Registrar_Rubrica/Registrar_Rubrica.jsx';
import { EditAthlete } from './pages/logged_in/Coach/Evaluaciones/Registrar_Atleta/EditAthlete.jsx';
import { Tabla_Resultados } from './pages/Tabla_Resultados/Tabla_Resultados';
import { SessionProvider } from './context/Session.jsx';

import Redirect from "./pages/redirect.jsx"
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx"

const router = createBrowserRouter([
  // Rutas publicas - acceso libre
  {
    path: "*",
    element: (
      <>

          <Error404 />

      </>
    ),
  },
  {
    path: "/redirect",
    element: <Redirect />
  },
  {
    path: "/",
    element: (
      <>
          <Welcome />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute needLogged={false}>
        <Translate />
          <Login />
      </ProtectedRoute>
    ),
  },
  // Fin de rutas publicas
  //
  //Inicio de rutas del atleta
  {
    path: "/atleta/perfilJugador",
    element: (
      <>
          <Header />
          <PlayerProfile />
      </>
    ),
  },
  {
    path: "/atleta/resultados",
    element: (
      <>
          <Header />
          <PlayerResults />
      </>
    ),
  },
  // Fin de rutas del atleta
  //
  // Inicio de rutas del Coach - Privadas
  {
    path: "/home",
    element: (
      <ProtectedRoute needLogged={true}>
          <Header />
          <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/perfil",
    element: (
      <ProtectedRoute needLogged={true}>

          <Header />
          <PerfilCoach />
          <BackButton />
      </ProtectedRoute>
    )
  },
  {
    path: "/coach/registrarRubrica",
    element: (
      <ProtectedRoute needLogged={true}>

          <Header />
          <Registrar_Rubrica />
          <BackButton />
      </ProtectedRoute>
    ),
  },
/*  {
    path: "/coach/registrarRubrica/nuevoCampo",
    element: (
      <>

          <Header />
          <BackButton />
      </>
    ),
  },*/
  {
    path: "/coach/categorias",
    element: (
      <ProtectedRoute needLogged={true}>

          <Header />
          <ViewCategories />
          <BackButton />

      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/categorias/editar/:id",
    element: (
      <ProtectedRoute needLogged={true}>

          <Header />
          <EditCategory />
          <BackButton />

      </ProtectedRoute>
    ),
  },

  {
    path: "/coach/categorias/nuevaCategoria",
    element: (
      <ProtectedRoute needLogged={true}>

          <Header />
          <RegisterCategory />
          <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/categorias/jugadores/:id",
    element: (
      <ProtectedRoute needLogged>

          <Header />
          <AtletasSelec />
          <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/categoria/:id/jugadores/nuevoJugador",
    element: (
      <ProtectedRoute needLogged={true}>

          <Header />
          <RegisterAthlete />
          <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/editarJugador/:id",
    element: (
      <ProtectedRoute needLogged={true}>

          <Header />
          <EditAthlete />
          <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/evaluarJugador",
    element: (
      <>

          <Header />
          <ReviewPlayer />
          <BackButton />
      </>
    ),
  },

  /*{
      path: "/jugadores",
     element: (
       <>
 
           <Header />
           <Players />

 
       </>
     ),
   }, 
  idk, hay que ver para que es esta o la logica xd*/
  // Fin de rutas del coach - privadas
  //
  // Rutas del Admin - Privadas
  {
    path: "/Selecciones",
    element: (
      <>

          <Header />
          <Selecciones />
      </>
    ),
  },
  {
    path: "/MiembrosCat",
    element: (
      <>

          <Header />
          <MiembrosCat />
      </>
    ),
  },
  {
    path: "/resultados",
    element: (
      <>

          <Header />
          <Tabla_Resultados />
      </>
    ),
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </React.StrictMode>
)
