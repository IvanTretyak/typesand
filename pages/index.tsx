import {useState, useEffect} from "react"
import Test from "../src/components/test"
import {Button} from "@mui/material"
import {IUser} from "../src/components/types"
import UserList from "../src/components/usersList";
import axios from "axios"

function Home() {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <Test width="100%">
                <Button variant="contained">fsdfsdfsfsdfs</Button>
            </Test>
            <UserList users={users}/>
        </>
    )
}

export default Home
