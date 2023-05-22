import { RouterProvider } from 'react-router-dom'
import './App.css'
import Base from './Components/Base/Base'
import NavBar from './Components/NavBar/NavBar'
import MaskProvider from './global/mask/MaskProvider'
import { router } from './Routes/routes'

function App() {

  return (
    <>
      <MaskProvider>
        <Base>
          <NavBar />
          <RouterProvider router={router} />
        </Base>
      </MaskProvider>
    </>
  )
}

export default App
