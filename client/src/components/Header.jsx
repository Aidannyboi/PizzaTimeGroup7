import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const Header = () => {
    const [user, setUser] = useState([])

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
            <Link to={'/order/new'}><button>Order ({user.first_name})</button></Link>
            <Link to={'/user/account'}><button>Account</button></Link>
            <button>Logout</button>
        </div>
    </div>
    )
}

export default Header