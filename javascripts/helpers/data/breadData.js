//breads arry of objects
const breads = [{
        id: 'bread1',
        type: 'wheat',
        color: '#F5DEB3',
        price: 1
    },
    {
        id: 'bread2',
        type: 'white',
        color: 'white',
        price: 0.50
    }, {
        id: 'bread3',
        type: 'Rye',
        color: '#DEB887',
        price: 2
    },
];

//selecredBreadId is set to empty but we can fill it in with the functiob below
let selectedBreadId = '';

//we call this function in the bread.js file inserting the parameter there.
//the parameter is the target id of one of the radio buttons when they are clicked
//this function makes selectedBreadId = to our parameter
//we then console.log selectedBreadId
//calling this helps us see that our id's are correct on the radio buttons?
const setSelectedBread = (breadId) => {
    selectedBreadId = breadId;
    console.log(selectedBreadId);
};


const getBread = () => {
    return breads;
}

export default {
    getBread,
    setSelectedBread,
};