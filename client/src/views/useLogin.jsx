import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


const UserLogin = () => {
    //"/user/signin"

    const [email, set_email] = useState("")

    const [password, set_password] = useState("")

    const navigate = useNavigate()

    const handleEmail = (e) => {
        set_email(e.target.value)
    }

    const handlePassword = (e) => {
        set_password(e.target.value)
    }

    const submitHandler = (e) => {
        console.log(email)
        console.log(password)
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/signin',{
            "email": email,
            "password": password
    },{ withCredentials: true})
        .then(res => {
            console.log(res)
            console.log(res.data);
            navigate('/pizzaHub')
        }).catch((err) => {
            //Working on Addressing Paramters For Login Credentials
            console.log(err)
        })
    }

    return (
        <>
            <div className="Header login">
                <h1>PaPas Pizzaria</h1>
            </div>

            <div className="login">
                <div className="BodyStyle login">
                    <form onSubmit={submitHandler}>
                        <div className="inputStyle">
                            <p>Email:</p>
                            <p>{}</p>
                            <input type="text" onChange={handleEmail} value={email}/>
                        </div>

                        <div className="inputStyle">
                            <p>Password:</p>
                            <p>{}</p>
                            <input type="text" onChange={handlePassword} value={password}/>
                        </div>
                        <div className="ButtonOptions">
                            <button className="removePizza">Login</button>
                            <br/>
                            <h2>New to PaPas Pizzaria?</h2>
                            <Link to={"/user"}><button className="removePizza">Create Account</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserLogin;