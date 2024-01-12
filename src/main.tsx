import React from 'react'
import ReactDOM from 'react-dom/client'
import RootProvider from './providers/RootProvider.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// Supports weights 400-700
import '@fontsource-variable/alkatra'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProvider />
  </React.StrictMode>
)
