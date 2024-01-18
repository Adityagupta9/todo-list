let p = 0;
let main1 = document.getElementById("main1");

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    let div = document.createElement("div");
    div.className = "todo";
    div.textContent = value;
    let but = document.createElement("button");
    but.textContent = "Remove";
    but.className = "comp";
  but.addEventListener("click", function () {
      div.style.opacity = 0;
      but.style.opacity = 0; 

      setTimeout(() => {
          div.remove();
          but.remove();
          localStorage.removeItem(key);
        setTimeout(()=>{
          location.reload();
        },100)
        
      }, 500); 
  });
    main1.appendChild(div);
    main1.appendChild(but);
}
let a = document.getElementsByClassName("add")[0]
let counter = localStorage.length + 1;
let j = 0;
a.onclick = () =>{
  inp()
}
const inp = () => {
  let main1 = document.getElementById("main1");
  let inp = document.createElement("input");
  inp.type = "text" ;
  inp.className="inp";
  inp.id = j;
  j++;
  inp.placeholder="Enter your todo here.."
  main1.appendChild(inp);
  inp.addEventListener("change",function(){
  let inputvalue = inp.value
  let key = counter;
  counter ++;
  localStorage.setItem(key,inputvalue)
    location.reload();
  })
};
let reset = document.getElementsByClassName("fa")[0]
reset.onclick=()=>{
  
  setTimeout(()=>{
    let fg = confirm("Deleting all")
    if(fg){
    localStorage.clear()
    location.reload();
    }
  },500)
}
const hj = ()=>{
  
}
let g = document.createElement("div")
g.className="num"
setTimeout(()=>{
  g.textContent=localStorage.length
},500)
main1.appendChild(g)
