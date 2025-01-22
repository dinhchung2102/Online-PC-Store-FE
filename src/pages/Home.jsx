
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



function Home() {
    return (
        <Container>
            <h1>Hello my friend <FontAwesomeIcon icon={faHeart} /></h1>
            
            <Button>Click me!</Button>
        </Container>
    );
}

export default Home;