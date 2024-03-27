import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const UpdateUser = () => {

    const [first_name, set_First_name] = useState("")

    const [last_name, set_Last_Name] = useState("")

    const [address, set_address] = useState("")

    const [city, set_city] = useState("")

    const [state, set_state] = useState("")

    const [email, set_email] = useState("")

    const [password, set_password] = useState("")

    const [confirm, set_confirm] = useState("")

    const [error, set_error] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/user', {withCredentials: true})
            .then((res) => {
                set_First_name(res.data.first_name)
                set_Last_Name(res.data.last_name)
                set_address(res.data.address)
                set_city(res.data.city)
                set_state(res.data.state)
                set_email(res.data.email)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/user',{
            "first_name" : first_name,
            "last_name": last_name,
            "email": email,
            "state": state,
            "address": address,
            "city": city,
            "password": password,
            "confirm": confirm
    },{ withCredentials: true})
        .then(res => {
            console.log(res)
            console.log(res.data);
            navigate('/pizzaHub')
        }).catch((err) => {
            console.log(err);
            set_error(err.response)
            //Working on Addressing Paramters For Login Credentials
        })
    }

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

    return(
        <>
        <Header/>

        <div>
            <h2>Update Account!</h2>
        </div>
        <div className="login">
                <div className="BodyStyle login">
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

                        <div className="inputStyle">
                            <p>New Password:</p>
                            <p>{}</p>
                            <input type="text" onChange={handlePassword} value={password}/>
                        </div>

                        <div className="inputStyle">
                            <p>Confirm New Password:</p>
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

export default UpdateUser;