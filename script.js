let addBtn = document.getElementById('add-btn');
let resetBtnEle = document.getElementById('reset-btn')
let tableBodyEle = document.getElementById('table-body');
let creditsEle = document.getElementById('credits');
let gradeEle = document.getElementById('grade');
let sgpaResult = document.getElementById('sgpa-result');
let gradeInputEle = document.getElementById('grade');
let creditsInputEle = document.getElementById('credits');


var totalPoints = 0;
var totalCreds = 0;

resetBtnEle.addEventListener('click', () => {
    gradeEle.innerHTML = ""
    creditsEle.innerHTML = ""
    totalCreds = 0;
    totalPoints = 0;
    tableBodyEle.innerHTML = ""
    sgpaResult.innerHTML = ""

});
// define totalPoints = 0, totalCreds = 0
// get grade and credits
// get product {point(grade) * credits
// add this product to totalPoints
// add this credit to totalCreds 
// repeat until all subs added
// print sgpa = totalP""oints / totalCreds
addBtn.addEventListener('click', () => {
    let grade = gradeEle.value;
    let credits = Number(creditsEle.value);
    let obtainedPoints = gradeToPoints(grade) * credits;
    totalPoints += obtainedPoints;
    totalCreds += credits;
    let sgpa = totalPoints / totalCreds;
    gradeInputEle.value = ""
    creditsInputEle.value = ""

    sgpaResult.innerHTML = sgpa.toFixed(2);

    let template = `
<tr>
<td>${grade}</td>
<td>${credits}</td>
<td>${obtainedPoints}</td>


</tr>`;
    tableBodyEle.innerHTML += template;


});

function gradeToPoints(grade) {
    const obj = {
        S: 10,
        A: 9,
        B: 8,
        C: 7,
        D: 6,
        E: 5,
        F: 0,
        s: 10,
        a: 9,
        b: 8,
        c: 7,
        d: 6,
        e: 5,
        f: 0,

    };
    return obj[grade];

}





