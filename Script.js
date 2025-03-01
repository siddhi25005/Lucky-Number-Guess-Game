let your=document.querySelector(".ur");
let comp=document.querySelector(".comp");
let rbox=document.querySelector(".res");
let btn=document.querySelector(".new");
let score=document.querySelector(".score");
let t=0;
your.addEventListener("input",()=>{
    let u=Number(your.value);
    let c=Math.floor(Math.random()*10)+1;
    comp.innerText=`Computer:${c}`;
    if(u===c) {
        rbox.innerText=`Matched`;
        t=t+1;
        score.innerText=`${t}`;
    }
    else {
        rbox.innerText=`Not Matched`;
      
    }
})
btn.addEventListener("click",()=>{
    comp.innerText=`Computer ?`;
    rbox.innerText="";
    your.value="";
})
