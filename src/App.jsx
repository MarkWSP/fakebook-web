import AppRouter from './routes/AppRouter'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <div className="">
     <AppRouter />
      <ToastContainer
       position="top-center"
       style={{ zIndex: 9999 }}
     />

    </div>
  )
}

export default App
