import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '~/scss/main.scss'
import { Auth } from '~/views/Auth'
import { Home } from '~/views/Home'
import { Login } from '~/views/Auth/Login'
import { NotFound } from '~/views/NotFound'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Routes Private */}
        <Route element={<Auth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Routes Public */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
