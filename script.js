var count = 9
var countLike =document.querySelector("#count");
console.log(countLike);

function getLikes() {
    count++
    countLike.innerText = count + " like(s)";
    console.log(count);
}

var nicCount = 12
var countNic = document.querySelector("#countNichole");

function nichole() {
    nicCount++
    countNic.innerText = nicCount + " like(s)"
}

var jimCount = 9
var countJim = document.querySelector("#countJim");

function jim() {
    jimCount++
    countJim.innerText = jimCount + " like(s)";
}