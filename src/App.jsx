//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import "./common/styles/global.css"
import { Router } from "./router/router"
import { RouterProvider } from "react-router";

export function App() {
  return <RouterProvider router={Router}/>;
}

export default App;