const smartgridSettings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1177px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        xl: {
            width: "1160px",
        },
        bp860: {
            width: "860px",
        },
        md: {
            width: '768px',
        },
        lg: {
            width: '992px',
        },
        sm: {
            width: "576px",
        },

    }
};

export default smartgridSettings;