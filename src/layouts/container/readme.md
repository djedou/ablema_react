## Container 

### Example
```
import './App.css';
import Container from './layouts/container/Container';


function App() {
  return (
    <Container styles={styles} classes={["sm", "customClass"]}>
        Aman
    </Container>
  );
}

// overide foo.color
const styles = {
    sm: {
      color: 'red',
      backgroundColor: 'blue'
    }
    customClass: {
      color: 'yellow
    }
};

export default App;

```
## Props:  
styles // to include your custom style  
classes // to specify the default classes or your custom classer or new classes  

NB: you can add your own Props  


## Classes  
all container classes are  
take one of them for your component  
const containerClasses = [  
    "fluid",  
    "xxl",  
    "xl",  
    "lg",  
    "md",  
    "sm",  
];  

NB: you can ovrride those classes and also create new classes for Container Component  