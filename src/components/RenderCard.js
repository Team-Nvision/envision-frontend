import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

    
function RenderCard(props) {
    return ( props.result.map((results, index) => {
            return (
                <Box key={index}>
                <Card >
                <CardContent sx={{backgroundColor:'#2979ff'}}>
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