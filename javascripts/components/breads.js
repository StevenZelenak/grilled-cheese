import utils from "../helpers/utils.js";
import breadData from "../helpers/data/breadData.js";

//variable breadId = e.target.id

//radioButtonEvent function then loops over the three elements because they all have the same className
//creating a addeventListener for each radio Button
//When those buttons are clicked they call the "selectBread function" Step 2
const radioButtonEvent = (e) => {
    const radioButtons = document.getElementsByClassName('breadRadio');
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', selectBread);
    }
}

//The selectBread funtion is called when a radio button is clicked
//we set the id of that button to breadId
//then we call the setSelectedBread function with a parameter of the e.target.id aka breadId from breadData.js Step 3
const selectBread = (e) => {
    const breadId = e.target.id;
    breadData.setSelectedBread(breadId);
}



const buildBread = () => {

    const allBreads = breadData.getBread();

    let domString = '';

    allBreads.forEach((bread) => {

        domString += '<div class="form-check form-check-inline">';
        domString += `<input class="form-check-input breadRadio" type="radio" name="bread" id=${bread.id} value="option1" checked>`;
        domString += `<label class="form-check-label" for=${bread.id}>${bread.type}</label>`;
        domString += '</div>';
    })


    utils.printToDom("bread-container", domString);
    //calling radioButton function step 1
    radioButtonEvent();
};



export default {
    buildBread
};