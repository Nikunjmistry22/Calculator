let equal_pressed = 0;

let button_input = document.querySelectorAll(".input-button");

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let adv   = document.getElementById("advance");
let blank = document.getElementById("blank");

window.onload = () => {
  input.value = "";
};


button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});


equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    
    let solution = eval(inp_val);
   
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    
    alert("Invalid Input");
  }
});


clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

advance.addEventListener("click", () => {
  equal.style.marginTop="0px";
  equal.style.fontSize="20px";
  blank.style.visibility="visible";
  blank.style.cursor="pointer";
});
   
/*blank.addEventListener("Click", () => {
     var i, num, f;  
   f = 1;  
   input.value;  
   for(i = 1; i <= input; i++)    
   {  
   ff = f * i;  
   }  
   ii = i - 1;    
   input.value = f ;
   });*/




