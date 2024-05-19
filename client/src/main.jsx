import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteProvider from './RouteProvider.jsx'
import './index.css'
import {AuthProvider} from "./context/AuthContext.jsx";
import {SocketProvider} from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <SocketProvider>
            <RouteProvider/>
          </SocketProvider>
      </AuthProvider>
  </React.StrictMode>,
)
