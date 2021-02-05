import { useEffect, useState } from 'react';
import {containerStyles} from './style';
import HeadlessComponent from '../../headlessComponent/HeadlessComponent';

const Container = ({styles, classes, children, ...resProps}) => {

    const [newStyle, setNewStyles] = useState(styles);
    const [newClasses, setNewClasses] = useState(classes);

    useEffect(()=>{
        setNewStyles(styles);
        setNewClasses(classes);
    }, [styles, classes]);


    return (
        <HeadlessComponent 
            defaultStyle={containerStyles} 
            styles={newStyle} 
            classes={newClasses}   
        >
            {({classes})=> (
                <div className={classes} {...resProps}> 
                   {children}
                </div>
            )}
        </HeadlessComponent>
    )
}


export default Container;

/*

all container classes
const containerClasses = [
    "fluid",
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
];

*/