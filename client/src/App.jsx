import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import UserForm from './views/UserForm'
import GetOneUser from './components/getOneUser'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<UserForm/>}/>
          <Route path='/user/:id' element={<GetOneUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
