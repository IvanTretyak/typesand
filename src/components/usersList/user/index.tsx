import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {IUser} from "../../types"

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <>
            <Box sx={{m: "30px"}}>
                <Typography variant="h3">{user.name}</Typography>
                <Typography variant="h3">{user.email}</Typography>
                <Typography variant="h5">{user.phone}</Typography>
            </Box>
        </>
    );
};

export default UserItem;
