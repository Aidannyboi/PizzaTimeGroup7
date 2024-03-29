import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import UserForm from './views/UserForm'
import Dashboard from './views/Dashboard'
import CreateOrder from './views/CreateOrder'
import UpdateUser from './views/UpdateUser'
import UserLogin from './views/useLogin'
import UpdatePizza from './views/UpdatePizza'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<UserForm/>}/>
          <Route path='/pizzaHub' element={<Dashboard/>}/>
          <Route path='/order/new' element={<CreateOrder/>}/>
          <Route path='/user/account' element={<UpdateUser/>}/>
          <Route path='/login' element={<UserLogin/>}/>
          <Route path='/pizza/update/:id' element={<UpdatePizza/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
