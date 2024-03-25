import { useEffect, useState } from "react"

import axios from "axios"
import { Link } from "react-router-dom"


const Dashboard = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/user')
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err)
            }),{ withCredentials: true}
    }, [])

    return (
        <>
            <div className="Header">
                <h1>PaPa Pizzeria</h1>
                <div>
                    <Link to={'/pizzaHub'}><button>Home</button></Link>
                    <Link to={'/order/new'}><button>Order</button></Link>
                    <button>Account</button>
                    <button>Logout</button>
                </div>
            </div>

            <div className="BodyStyle">
                <div className="itemCard">

                    <p className="desc">
                    Looking for new slice of life? You found the right place!
                    click the button below and start you new pizza journey!
                    </p>

                    <Link to={'/order/new'}><button>New Slice!</button></Link>

                </div>

                <div className="itemCard">

                    <p className="desc">
                    Looking for new slice of life? You found the right place!
                    click the button below and start you new pizza journey!
                    </p>

                    <Link to={'/order/fav'}><button>Fav Pizza!</button></Link>

                </div>

                <div className="itemCard">

                    <p className="desc">
                    Looking for new slice of life? You found the right place!
                    click the button below and start you new pizza journey!
                    </p>

                    <Link to={'/order/random'}><button>Suprise Pie!</button></Link>

                </div>
            </div>
        </>
    )
}

export default Dashboard