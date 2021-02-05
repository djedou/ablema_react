import {getStyles, getClassesNames}  from '../styles/classesMarker';



const HeadlessComponent = ({defaultStyle, styles, classes, children}) => {

    const newBuildStyles = getStyles(defaultStyle, styles, classes);

    return children({
        classes: getClassesNames(classes, newBuildStyles)
        
    });
}

export default HeadlessComponent;