import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import MainLayout from './layout/MainLayout'
import Courses from './pages/student/Courses'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/* Courses */}
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />
      }
    ],
  },
])


function App() {

  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App
