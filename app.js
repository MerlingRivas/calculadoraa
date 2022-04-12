let equal_pressed =0;
let button_input=document.querySelectorAll(".input_button");

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onlad =() => {
    input.value="";
    
};
button_input.forEach ((button_class) => {
    button_class.addEventListener("click", ()=>{
        if(equal_pressed==1){
            input.value="";
            equal_pressed=0;
        }
        input.value += button_class.value;

    });
});


equal.addEventListener("click",()=>{
    equal_pressed= 1;
    equal_presend=1;
    let inp_val = input.value;

});