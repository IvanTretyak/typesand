import {FC} from "react"
import {IUser} from "../types"
import map from "lodash/map"
import {Box} from "@mui/material"
import UserItem from "../usersList/user"

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({
                                         users
                                     }) => {

    return (
        <>
            {map(users, (user, index) => (
                <Box key={index}>
                    <UserItem user={user}/>
                </Box>
            ))}
        </>
    )
}
export default UserList
