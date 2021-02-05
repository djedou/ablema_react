import { StyleSheet, css} from 'aphrodite/no-important';

const getStyles = (defaulStyle, Customstyles, classes) => {
    if(classes === undefined && Customstyles === undefined) {
        return StyleSheet.create({});
    }

    if(classes !== undefined && Customstyles === undefined){
        console.log(classes);
        console.log(Customstyles);
        const style = stylesFilter(defaulStyle, classes);

        return StyleSheet.create({
            ...style
        }); 
    }

    const style = stylesFilter(defaulStyle, classes);

    for (const [key, value] of Object.entries(Customstyles)) {
        style[key] = {...style[key], ...value}
    }

    return StyleSheet.create({
        ...style
    });
};

const getClassesNames = (classes, styles) => {
    const classesList = [];

    if(classes === undefined) {
        return css();
    }

    classes.map(v => classesList.push(styles[v]));
    return css(...classesList);;
};

const stylesFilter = (styles, classes) => {
      
    const filtered = Object.keys(styles)
        .filter(key => classes.includes(key))
        .reduce((obj, key) => {
          obj[key] = styles[key];
          return obj;
        }, {});
      
    return filtered;
}
export {getClassesNames, getStyles};