import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function SimpleCOntainer(){
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Typography component='div' style={{ backgroundColor: '#cfe8fc', height: '30vh'}} />

            </Container>
        </React.Fragment>
    )
}