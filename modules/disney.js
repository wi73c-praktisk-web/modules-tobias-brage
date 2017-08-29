// exports.fullName = function(){
//     return "Donald Duck";
// }

// exports.fullName = () => {return "Donald Duck"}

// exports.fullName = () => "Donald Duck";

// module.exports = {
//     firstName: "Anders",
//     lastName: "And",
//     fullName: () => "Anders And"
// }

// module.exports = {
//     add: (num1, num2) => num1 + num2,
//     sub: (num1, num2) => num1 - num2
// }

// module.exports = {
//     bmiCalc: (height=100,weight=100) => {
//         var bmiHeight;
//         var finalBmi;
//         var bmiResult;
//         bmiHeight = height/100;
//         finalBmi = weight / Math.pow(bmiHeight, 2);
//         if(finalBmi < 24.99) {
//             bmiResult = "Normalvægtig. " +finalBmi.toFixed(2);
//         } else if(finalBmi < 27.49) {
//             bmiResult = "Muligvis overvægtig. " +finalBmi.toFixed(2);
//         } else if(finalBmi < 29.99) {
//             bmiResult = "Overvægtig. " +finalBmi.toFixed(2);
//         } else if(finalBmi >= 30.00 && finalBmi < 34.99) {
//             bmiResult = "Overvægtig klasse 1. " +finalBmi.toFixed(2);
//         } else if(finalBmi >= 35.00 && finalBmi < 39.99) {
//             bmiResult = "Overvægtig klasse 2. " +finalBmi.toFixed(2);
//         } else if(finalBmi > 40.00) {
//             bmiResult = "Overvægtig klasse 3. " +finalBmi.toFixed(2);
//         }
//         return bmiResult;
//     }
// }

module.exports = {
    fullDate: () => {
        var curDate = new Date();
        var date = curDate.getDate();
        var month = curDate.getMonth()+1;
        var year = curDate.getFullYear();
        return date + " " + month + " " + year;
    }
}