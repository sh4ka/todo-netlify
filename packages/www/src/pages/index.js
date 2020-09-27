import React from "react";
import {Container, Heading, Button, Flex} from "theme-ui";

export default props => (
    <Container>
        <Flex sx={{ flexDirection: "column" }}>
            <Heading as="h1">Organiza tus listas</Heading>
            <Button 
            sx={{ marginTop: 2}}
            onClick={() => {
                alert("Clicked");
            }}
            >
                Log In
                </Button>
        </Flex>        
    </Container>
);