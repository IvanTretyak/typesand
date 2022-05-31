import React, {FC} from 'react';
import {Box, Typography, Button} from "@mui/material"

interface TestProps {
    width: string
    height?: string
    children: React.ReactChild | React.ReactNode
}

const Test: FC<TestProps> =
    ({width, height, children}) => {
        return (
            <>
                <Button variant="contained">rffef</Button>
                <Box width={width} height={height} sx={{border: "2px solid red"}}>
                    <Typography variant="h2">dfssfsfds</Typography>
                </Box>
                {children}
            </>
        );
    }
;

export default Test;
