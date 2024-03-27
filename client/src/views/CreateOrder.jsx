import { useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"


const CreateOrder = () => {
    const [User, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/user', { withCredentials: true})
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <>
            <Header/>

            <div className="BodyStyle">
                <form className="formStyle">
                    <h2>CRAFT-A-PIZZA</h2>
                    <div>
                        <div>
                            <label>METHOD:</label>
                            <select id="" name="">
                                <option>Delivery</option>
                                <option>PickUp</option>
                            </select>
                        </div>

                        <div className="optionsStyle">
                            <label>SIZE:</label>
                            <select id="" name="">
                                <option>Large</option>
                                <option>Medium</option>
                                <option>Small</option>
                            </select>

                            <label>CRUST:</label>
                            <select id="" name="">
                                <option>Thin Crust</option>
                                <option>Stuffed Crust</option>
                                <option>Thick Crust</option>
                            </select>

                            <label>QTY:</label>
                            <select id="" name="">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>

                        <div className="toppings">
                                <h3>TOPPINGS:</h3>
                                
                                <div>
                                    <label>pepperoni:</label>
                                    <input type="checkbox" id="pepperoni" name="" value=""/>
                                </div>

                                <div>
                                    <label>sausage:</label>
                                    <input type="checkbox" id="sausage" name="" value=""/>
                                </div>
                                
                                <div>
                                    <label>olives:</label>
                                    <input type="checkbox" id="olives" name="" value=""/>
                                </div>
                                
                                <div>
                                    <label>basil:</label>
                                    <input type="checkbox" id="basil" name="" value=""/>
                                </div>

                                <div>
                                <label>chicken:</label>
                                <input type="checkbox" id="chicken" name="" value=""/>
                                </div>
                                
                                <div>
                                    <label>ham:</label>
                                    <input type="checkbox" id="ham" name="" value=""/>
                                </div>

                                <div>
                                    <label>bacon:</label>
                                    <input type="checkbox" id="bacon" name="" value=""/>
                                </div>

                                <div>
                                    <label>pineapple:</label>
                                    <input type="checkbox" id="pineapple" name="" value=""/>
                                </div>

                                <div>
                                    <label>extra cheese:</label>
                                    <input type="checkbox" id="extra cheese" name="" value=""/>
                                </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateOrder