const number = document.querySelector("#tiro")
const incrementBtn = document.querySelector("#incrementBtn")
const reset = document.querySelector("#resetBtn")


let initialValue = 0

incrementBtn.addEventListener("click", function(){
    initialValue++
    number.innerHTML = initialValue


    if( initialValue == 4){
        number.style.backgroundColor = "green"
    }
    else if( initialValue ==5){
        number.style.backgroundColor = "blue"
    }
   else  if( initialValue ==6){
        number.style.backgroundColor = "yellow"
    }
   else if( initialValue ==7){
        number.style.backgroundColor = "black"
    }
   else if( initialValue ==8){
        number.style.backgroundColor = "white"
    }
   else if( initialValue ==9){
        number.style.backgroundColor = "gray"
    }
    else {
        number.style.backgroundColor = "white"
    }
})



reset.addEventListener("click", function(){
    initialValue = 0
    if(initialValue <=1){
        number.style.backgroundColor = "orange"
    }
    number.innerHTML = initialValue
})
