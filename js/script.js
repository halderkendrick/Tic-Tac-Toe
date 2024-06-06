const buttons = document.querySelectorAll(".button")
const winn = document.querySelector(".winn")
const reset = document.querySelector(".reset")

const winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let turn = true;

buttons.forEach((box)=>{
 box.addEventListener("click", ()=>{
   if(turn){
     box.innerHTML = "X";
     turn = false
    }else{
        box.innerHTML = "O";
        turn = true
    }
    box.disabled = true
    winner()
 })
})

const winner = ()=>{
   for(let pattern of winnerPattern){
       let pattern1 =  buttons[pattern[0]]
       let pattern2 =  buttons[pattern[1]]
       let pattern3 =  buttons[pattern[2]]
       

      if(pattern1.innerHTML != '' && pattern2.innerHTML != '' && pattern3.innerHTML != ''){
        if(pattern1.innerHTML == pattern2.innerHTML && pattern2.innerHTML == pattern3.innerHTML){
            winn.innerHTML = `Winner is ${pattern1.innerHTML}`;
            buttons.forEach((btns)=>{
                btns.disabled = true
            })


            setTimeout(() => {
                buttons.forEach((btns)=>{
                    btns.disabled = false;
                    btns.innerHTML = '';
                }) 
                winn.innerHTML = '';
            }, 5000);
        }
      }


   }
}

reset.addEventListener("click",()=>{
    buttons.forEach((btns)=>{
        btns.disabled = false;
        btns.innerHTML = '';
    }) 
    winn.innerHTML = '';
})