import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const GetOneUser = () => {
    const [user, setUser] = useState("")

    const {id} = useParams()
    
    useEffect(() => {
        axios.get("http://localhost:9999/api/user/" + id)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
                console.log(test)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
        </>
    )
}