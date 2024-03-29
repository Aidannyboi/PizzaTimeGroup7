import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";


const GetPizzas = () => {
    const [pizzas, setPizzas] = useState([])

    const navigate = useNavigate();

    
    const DeleteButton = (id) => {
        console.log("Click")
        axios.get("http://localhost:8000/api/pizzas/" + id)
            .then((res) => {
                console.log(res.data);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pizzas")
            .then((res) => {
                setPizzas(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        pizzas.map((pizza, index) => (
            <div className="pizzaDisplay">
                <h2>Pizza {index + 1}</h2>
                <div>
                    <p>Crust: {pizza.crust}</p>
                    <p>Size: {pizza.size}</p>
                    <p>Toppings: {pizza.toppings}</p>
                </div>
                <button value={"delete"} id="delete"className="removePizza" onClick={() => {axios.delete("http://localhost:8000/api/pizzas/" + pizza._id); navigate("/pizzaHub")}}>Remove Pizza</button>
                <Link to={"/pizza/update/"+ pizza._id}><button className="removePizza">Update Pizza</button> </Link>
            </div>
        ))
    )
}

export default GetPizzas