import React, { useEffect } from "react";
import {Container, Heading, Button, Flex} from "theme-ui";
import netlifyIdentity from 'netlify-identity-widget';

// netlifyIdentity.init({});

export default props => {
    useEffect(() => {
        netlifyIdentity.init({});
    });
    return (
        <Container>
            <Flex sx={{ flexDirection: "column" }}>
                <Heading as="h1">Organiza tus listas</Heading>
                <Button 
                sx={{ marginTop: 2}}
                onClick={() => {
                    netlifyIdentity.open();
                }}
                >
                    Log In
                    </Button>
            </Flex>        
        </Container>
    );
}
    