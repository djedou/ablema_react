const containerClasses = [
    "fluid",
    "xxl",
    "xl",
    "lg",
    "md",
    "sm"
];

const containerStyles = {
    sm: {
        width: '100%',
        paddingRight: '0.75rem',
        paddingLeft: '0.75rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media (min-width: 576px)': {
            maxWidth: '540px'
        },
        '@media (min-width: 768px)': {
            maxWidth: '720px'
        },
        '@media (min-width: 992px)': {
            maxWidth: '960px'
        },
        '@media (min-width: 1200px)': {
            maxWidth: '1140px'
        },
        '@media (min-width: 1400px)': {
            maxWidth: '1320px'
        }
    },
    md: {
        width: '100%',
        paddingRight: '0.75rem',
        paddingLeft: '0.75rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media (min-width: 768px)': {
            maxWidth: '720px'
        },
        '@media (min-width: 992px)': {
            maxWidth: '960px'
        },
        '@media (min-width: 1200px)': {
            maxWidth: '1140px'
        },
        '@media (min-width: 1400px)': {
            maxWidth: '1320px'
        }
    },
    lg: {
        width: '100%',
        paddingRight: '0.75rem',
        paddingLeft: '0.75rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media (min-width: 992px)': {
            maxWidth: '960px'

        },
        '@media (min-width: 1200px)': {
            maxWidth: '1140px'
        },
        '@media (min-width: 1400px)': {
            maxWidth: '1320px'
        }
    },
    xl: {
        width: '100%',
        paddingRight: '0.75rem',
        paddingLeft: '0.75rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media (min-width: 1200px)': {
            maxWidth: '1140px'
        },
        '@media (min-width: 1400px)': {
            maxWidth: '1320px'
        }
    },
    xxl: {
        width: '100%',
        paddingRight: '0.75rem',
        paddingLeft: '0.75rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        '@media (min-width: 1400px)': {
            maxWidth: '1320px'
        }
    },
    fluid: {
        width: '100%',
        paddingRight: '0.75rem',
        paddingLeft: '0.75rem',
        marginRight: 'auto',
        marginLeft: 'auto'
    }
};

export {containerStyles, containerClasses};
