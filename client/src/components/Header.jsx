import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


const Header = () => {
    const [user, setUser] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/user', {withCredentials: true})
            .then((res) => {
                setUser(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    return(
        <div className="Header">
        <h1>PaPa Pizzeria</h1>
        <div>
            <Link to={'/pizzaHub'}><button>Home</button></Link>
            <Link to={'/order/new'}><button>Order ({user.first_name}'s)</button></Link>
            <Link to={'/user/account'}><button>Account</button></Link>
            <button onClick={() => {axios.delete("http://localhost:8000/api/user/logout"); navigate("/login")}}>Logout</button>
        </div>
    </div>
    )
}

export default Header