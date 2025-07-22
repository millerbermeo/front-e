import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import MainLayout from '../layouts/MainLayout';
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../app/dashboard/Dashboard'));
const Producto = lazy(() => import('../pages/Producto'));
const Productos = lazy(() => import('../pages/Productos'));



const PrivateRoute = () => {
    const isAuthenticate = useAuthStore((state) => state.isAuthenticate)
    return isAuthenticate ? <Outlet /> : <Navigate to="/login" replace />
}


const AppRouter: React.FC = () => {


    return (
        <BrowserRouter>
            <Routes>

                {/* RUTAS PUBLICAS */}
                <Route path='/login' element={<Login />} />

                <Route element={<MainLayout />} >
                    <Route path='/' element={<Home />} />
                    <Route path='/productos' element={<Productos />} />
                    <Route path='/producto/:id' element={<Producto />} />
                </Route>
                {/* RUTAS PRIVADAS */}
                <Route element={<PrivateRoute />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>

                {/* NOT FOUND */}
                <Route path='*' element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter
