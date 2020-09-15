
let A = [-3, 5, 1, 3, 2, 10];

function checkValueInArray(){
    let x = parseInt(document.getElementById("inputNum").value)
    for(let i =0;i<A.length-1;i++){
        if(x === A[i]){
            document.getElementById("result").innerHTML = "the input number " + x + " is in the array"
            break
        } else {
            document.getElementById("result").innerHTML = "the input number is not in the array"
        }
    }
}