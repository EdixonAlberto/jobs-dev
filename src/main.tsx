import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '~/styles/main.css'
import { Auth } from '~/views/Auth'
import { Header } from '~/components/Header'
import { Tabs } from '~/components/Tabs'
import { NotFound } from '~/views/NotFound'
// VIEWS
import { Login } from '~/views/Auth/Login'
import { Jobs } from '~/views/Jobs'
import { Profile } from '~/views/Profile'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Routes Private */}
        <Route
          element={
            <>
              <Header />
              <Auth />
              <Tabs />
            </>
          }
        >
          <Route path="/" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Routes Public */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
