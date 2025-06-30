import AppRouter from './routes/AppRouter'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import useUserStore from './stores/userStore'
import { useEffect } from 'react'
import isTokenExpired from './components/isTokenExpired.js'
 
function App() {
  const token = useUserStore(state=>state.token)
  const logout = useUserStore(state=>state.logout)
  useEffect( ()=> {
    if(isTokenExpired(token)) {
      logout()
    }
  }, [])

  return (
    <div>
     <AppRouter />
      <ToastContainer
       position="top-center"
       style={{ zIndex: 9999 }}
     />

    </div>
  )
}

export default App
