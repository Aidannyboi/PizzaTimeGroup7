import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import UserForm from './views/UserForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<UserForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
