const moment = require('moment');

setInterval(() => {
    console.log('10 minutes have passed');
}, 100000);


let currentDate = moment(); 
let bornDate = null;

let bornYear = (born) => {
    if (born === !null){
        let bornDate = born;
        return bornDate;
    } 
    return "date of birth not set";
};
let personBorn = bornYear();


let getAge = () => {
    return currentDate.diff(personBorn, 'years');
};
let personAge = getAge();


// console.log( bornYear(2000, 07, 01) );
// console.log(personAge);

module.exports.born = personBorn;
module.exports.age = personAge;
    
//         set birthdayYear(bornDate){
//             if (bornDate.toString().length <= 0){
//                 return "date of birth not set";
//             } 
//             this.birthdayYear = bornDate;
//         }

