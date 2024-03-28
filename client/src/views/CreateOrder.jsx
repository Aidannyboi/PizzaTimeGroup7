import { useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreateOrder = () => {

    const [crust, setCrust] = useState("")
    const [size, setSize] = useState("")
    const [toppings, setToppings] = useState("")
    const [num, setNum] = useState(0)

    const navigate = useNavigate();

    const submitHandler= (e) => {
        e.preventDefault();
        console.log(crust +" "+ size +" "+ toppings +" "+ num)
    axios.post("http://localhost:8000/api/pizzas",{
        crust,
        size,
        toppings,
        num
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
    return(
        <>
            <Header/>

            <div className="BodyStyle">
                <form className="formStyle" onSubmit={submitHandler}>
                    <h2>CRAFT-A-PIZZA</h2>
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
                            <select id="size" name="" onChange={(e) => setSize(e.target.value)}>
                                <option value="Large">Large</option>
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                            </select>

                            <label>CRUST:</label>
                            <select id="Crust" name="" onChange={(e) => setCrust(e.target.value)}>
                                <option value="Thin Crust">Thin Crust</option>
                                <option value="Stuffed Crust">Stuffed Crust</option>
                                <option value="Thick Crust">Thick Crust</option>
                            </select>

                            <label>QTY:</label>
                            <select id="Amount" name="">
                                <option value={1} onChange={(e) => setNum(e.target.value)}>1</option>
                                <option value={2} onChange={(e) => setNum(e.target.value)}>2</option>
                                <option value={3} onChange={(e) => setNum(e.target.value)}>3</option>
                                <option value={4} onChange={(e) => setNum(e.target.value)}>4</option>
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

                        <button>Create Button</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateOrder