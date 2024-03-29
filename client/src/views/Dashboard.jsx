import { useEffect, useState } from "react"

import axios from "axios"
import { Link } from "react-router-dom"
import Header from "../components/Header"


const Dashboard = () => {
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

    return (
        <>
            <Header/>
            <div className="BodyStyle">
                <div className="itemCard">

                    <p className="desc">
                    Looking for new slice of life? You found the right place!
                    click the button below and start you new pizza journey!
                    </p>

                    <Link to={'/order/new'}><button>New Slice!</button></Link>

                </div>

                <div className="itemCard" style={{backgroundImage: "url(https://media.istockphoto.com/id/1263227499/vector/yellow-and-black-danger-tape-blank-warning-vector-on-isolated-background-eps-10.jpg?s=612x612&w=0&k=20&c=rWdAy_7uUN2cAWMKehr5jr3THqWSGeue7lCCSvj23LA=)"}}>

                    <p className="desc">
                    Looking for new slice of life? You found the right place!
                    click the button below and start you new pizza journey!
                    </p>

                    <Link to={'/order/fav'}><button>Coming Soon!</button></Link>

                </div>

                <div className="itemCard" style={{backgroundImage: "url(https://media.istockphoto.com/id/1263227499/vector/yellow-and-black-danger-tape-blank-warning-vector-on-isolated-background-eps-10.jpg?s=612x612&w=0&k=20&c=rWdAy_7uUN2cAWMKehr5jr3THqWSGeue7lCCSvj23LA=)"}}>

                    <p className="desc">
                    Looking for new slice of life? You found the right place!
                    click the button below and start you new pizza journey!
                    </p>

                    <Link to={'/order/random'}><button>Coming Soon! </button></Link>

                </div>
            </div>
        </>
    )
}

export default Dashboard