import { useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"


const CreateOrder = () => {
    const [User, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/user')
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err)
            }),{ withCredentials: true}
    }, [])

    return(
        <>
            <Header/>

            <div className="BodyStyle">
                <form>
                    <h3>CRAFT-A-PIZZA</h3>
                    <div>
                        <div>
                            <lable>METHOD:</lable>
                            <select id="" name="">
                                <option>Delivery</option>
                                <option>PickUp</option>
                            </select>
                        </div>

                        <div>
                            <lable>SIZE:</lable>
                            <select id="" name="">
                                <option>Large</option>
                                <option>Medium</option>
                                <option>Small</option>
                            </select>

                            <lable>CRUST:</lable>
                            <select id="" name="">
                                <option>Thin Crust</option>
                                <option>Stuffed Crust</option>
                                <option>Thick Crust</option>
                            </select>

                            <lable>QTY:</lable>
                            <select id="" name="">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>

                        <div>
                            <form className="toppings">
                                <h3>TOPPINGS:</h3>
                                
                                <div>
                                    <lable>pepperoni:</lable>
                                    <input type="radio" id="pepperoni" name="" value=""/>
                                </div>

                                <div>
                                    <lable>sausage:</lable>
                                    <input type="radio" id="sausage" name="" value=""/>
                                </div>
                                
                                <div>
                                    <lable>olives:</lable>
                                    <input type="radio" id="olives" name="" value=""/>
                                </div>
                                
                                <div>
                                    <lable>basil:</lable>
                                    <input type="radio" id="basil" name="" value=""/>
                                </div>

                                <div>
                                <lable>chicken:</lable>
                                <input type="radio" id="chicken" name="" value=""/>
                                </div>
                                
                                <div>
                                    <lable>ham:</lable>
                                    <input type="radio" id="ham" name="" value=""/>
                                </div>

                                <div>
                                    <lable>bacon:</lable>
                                    <input type="radio" id="bacon" name="" value=""/>
                                </div>

                                <div>
                                    <lable>pineapple:</lable>
                                    <input type="radio" id="pineapple" name="" value=""/>
                                </div>

                                <div>
                                    <lable>extra cheese:</lable>
                                    <input type="radio" id="extra cheese" name="" value=""/>
                                </div>
                            </form>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateOrder