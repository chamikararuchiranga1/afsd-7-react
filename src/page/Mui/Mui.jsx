import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import img from '../../assets/react.svg'
import { styled } from '@mui/system';

const MyComponent = styled('div')({
    color: 'red',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });

export default function Mui() {

    const [value, setValue] = useState(2);

    return (
        <div>
            <h1>Mui</h1>
            <Button sx={{ backgroundColor: '#000', color: 'white' }} variant="text">Text</Button>
            <Button variant="contained">Contained</Button>

            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <Typography
                sx={{ color: { xs: 'red', sm: 'blue', md: 'green' } }}
                variant='h3'
                component="legend"
            >
                Controlled
            </Typography>
            <Typography
                textAlign={'center'}
                variant='h3'
                component="legend"
            >
                Controlled
            </Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ backgroundColor: '#000', color: 'white' }} variant="text">Text</Button>
            </Box>

            <Avatar alt="Remy Sharp" src={img} />

            <MyComponent>ACPT</MyComponent>

        </div>
    )
}
