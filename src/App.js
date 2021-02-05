import './App.css';
import Container from './layouts/container/Container';



function App() {
  return (
    <Container styles={styles} classes={["md"]}>
        Aman
    </Container>
  );
}

// overide foo.color
const styles = {
    sm: {
      color: 'red',
      backgroundColor: 'blue'
    },
    md: {
      color: 'yellow',
      backgroundColor: 'green'
    }
};

export default App;
