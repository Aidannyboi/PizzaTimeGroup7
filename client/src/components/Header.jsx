import { Link } from "react-router-dom"


const Header = () => {

    return(
        <div className="Header">
        <h1>PaPa Pizzeria</h1>
        <div>
            <Link to={'/pizzaHub'}><button>Home</button></Link>
            <Link to={'/order/new'}><button>Order</button></Link>
            <Link to={'/user/account'}><button>Account</button></Link>
            <button>Logout</button>
        </div>
    </div>
    )
}

export default Header