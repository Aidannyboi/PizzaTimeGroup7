import { useState } from "react"

import axios from "axios"
import { useNavigate } from "react-router-dom"


const UserForm = () => {

    const [first_name, set_First_name] = useState("")

    const [last_name, set_Last_Name] = useState("")

    const [address, set_address] = useState("")

    const [city, set_city] = useState("")

    const [state, set_state] = useState("")

    const [email, set_email] = useState("")

    const [password, set_password] = useState("")

    const [confirm, set_confirm] = useState("")

    const [orders, set_orders] = useState([])

    const navigate = useNavigate();
    const handleFirstName = (e) => {
        set_First_name(e.target.value)
    }

    const handleLastName = (e) => {
        set_Last_Name(e.target.value)
    }

    const handleAdress = (e) => {
        set_address(e.target.value)
    }

    const handleCity = (e) =>{
        set_city(e.target.value)
    }

    const handleState = (e) => {
        set_state(e.target.value)
    }

    const handleEmail = (e) => {
        set_email(e.target.value)
    }

    const handlePassword = (e) => {
        set_password(e.target.value)
    }

    const handleConfirm = (e) => {
        set_confirm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9999/api/user/signin',user,{ withCredentials: true})
        .then(res => {
            console.log(res)
            console.log(res.data);
            navigate('/pizzaHub')
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <div className="Header">
                <h1>PaPas Pizzaria</h1>
            </div>

            <div className="BodyStyle">
                <div>
                    <form onSubmit={submitHandler}>
                        <div className="inputStyle">
                            <p>First Name:</p>
                            <p>{}</p>
                            <input type="text" onChange={handleFirstName} value={first_name}/>
                        </div>

                        <div className="inputStyle">
                            <p>Last Name:</p>
                            <p>{}</p>
                            <input type="text" onChange={handleLastName} value={last_name}/>
                        </div>

                        <div className="inputStyle">
                            <p>Address:</p>
                            <p>{}</p>
                            <input type="text" onChange={handleAdress} value={address}/>
                        </div>

                        <div className="inputStyle">
                            <p>City:</p>
                            <p>{}</p>
                            <input type="text" onChange={handleCity} value={city}/>
                        </div>

                        <div className="inputStyle">
                            <p>State:</p>
                            <p>{}</p>
                            <input type="text" onChange={handleState} value={state}/>
                        </div>

                        <div className="inputStyle">
                            <p>Email:</p>
                            <p>{}</p>
                            <input type="text" onChange={handleEmail} value={email}/>
                        </div>
                            <p>Password:</p>
                            <p>{}</p>
                            <input type="text" onChange={handlePassword} value={password}/>
                        <div className="inputStyle">
                            <p>Confirm Password</p>
                            <p>{}</p>
                            <input type="text" onChange={handleConfirm} value={confirm}/>
                        </div>

                        <button>Create User</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserForm