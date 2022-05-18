import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function RenderCard(props) {
    return (
    <Box>
        <Card>
        <CardContent>
        <Typography>
          This is A Test{props.text} 
        </Typography>
        </CardContent>
        </Card>
    </Box>
    );
}

export default RenderCard;