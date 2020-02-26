//print to dom function
const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//exports printToDom function
export default {
    printToDom,
};