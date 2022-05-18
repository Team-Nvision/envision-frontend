import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

    
function RenderCard(props) {
    return ( props.result.map((results, index) => {
            return (
                <Box key={index}>
                <Card sx={{ 
                backgroundColor:'#FFFFF5',
                p: 1,
                mx: 'auto',
                my: 2,
                elevation: 20,
                }}>
                <CardContent >
                <Typography>
                {results}
                </Typography>
                </CardContent>
                {console.log(results)}
                </Card>
                </Box>
            )
            })
    );
}

export default RenderCard;