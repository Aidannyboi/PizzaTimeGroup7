import { useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import GetPizzas from "../components/getPizzas"


const UpdatePizza = () => {

    const [crust, setCrust] = useState("")
    const [size, setSize] = useState("")
    const [toppings, setToppings] = useState("none")

    const navigate = useNavigate();

    const {id} = useParams();
    
    const submitHandler= (e) => {
        e.preventDefault();
        console.log(crust +" "+ size +" "+ toppings)
    axios.put("http://localhost:8000/api/pizzas/"+id,{
        crust,
        size,
        toppings,
    })
    .then(res => {
        console.log(res)
        console.log(res.data);
        navigate('/pizzaHub')
    }).catch((err) => {
        console.log(err);
        //Working on Addressing Paramters For Login Credentials
    })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas/'+ id, {withCredentials: true})
            .then((res) => {
                setCrust(res.data.crust)
                setSize(res.data.size)
                setToppings("none")
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return(
        <>
            <Header/>

            <div className="BodyStyle">
                <form className="formStyle" onSubmit={submitHandler}>
                    <h2>UPDATE-A-PIZZA</h2>
                    <div>
                        <div>
                            <label>METHOD:</label>
                            <select id="Delivery" name="">
                                <option value={"Delivery"}>Delivery</option>
                                <option value={"Carryout"}>PickUp</option>
                            </select>
                        </div>

                        <div className="optionsStyle">
                            <label>SIZE:</label>
                            <select id="size" value={size} name="" onChange={(e) => setSize(e.target.value)}>
                                <option>Select Size</option>
                                <option value="Large">Large</option>
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                            </select>

                            <label>CRUST:</label>
                            <select id="Crust" value={crust} name="" onChange={(e) => setCrust(e.target.value)}>
                                <option>Select Crust</option>
                                <option value="Thin Crust">Thin Crust</option>
                                <option value="Stuffed Crust">Stuffed Crust</option>
                                <option value="Thick Crust">Thick Crust</option>
                            </select>
                        </div>

                        <div className="toppings">
                                <h3>TOPPINGS:</h3>
                                
                                <div>
                                    <label>pepperoni:</label>
                                    <input type="checkbox" id="pepperoni" name="" value="pepperoni" onChange={(e) => setToppings(e.target.value)}/>
                                </div>

                                <div>
                                    <label>sausage:</label>
                                    <input type="checkbox" id="sausage" name="" value="sausage" onChange={(e) => setToppings(e.target.value)}/>
                                </div>
                                
                                <div>
                                    <label>olives:</label>
                                    <input type="checkbox" id="olives" name="" value="olives" onChange={(e) => setToppings(e.target.value)}/>
                                </div>
                                
                                <div>
                                    <label>basil:</label>
                                    <input type="checkbox" id="basil" name="" value="basil" onChange={(e) => setToppings(e.target.value)}/>
                                </div>

                                <div>
                                <label>chicken:</label>
                                <input type="checkbox" id="chicken" name="" value="chicken" onChange={(e) => setToppings(e.target.value)}/>
                                </div>
                                
                                <div>
                                    <label>ham:</label>
                                    <input type="checkbox" id="ham" name="" value="ham" onChange={(e) => setToppings(e.target.value)}/>
                                </div>

                                <div>
                                    <label>bacon:</label>
                                    <input type="checkbox" id="bacon" name="" value="bacon" onChange={(e) => setToppings(e.target.value)}/>
                                </div>

                                <div>
                                    <label>pineapple:</label>
                                    <input type="checkbox" id="pineapple" name="" value="pineapple" onChange={(e) => setToppings(e.target.value)}/>
                                </div>

                                <div>
                                    <label>extra cheese:</label>
                                    <input type="checkbox" id="extra cheese" name="" value="extra cheese" onChange={(e) => setToppings(e.target.value)}/>
                                </div>
                        </div>

                        <button>Update Pizza</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdatePizza

