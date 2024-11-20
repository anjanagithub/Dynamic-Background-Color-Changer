const start = document.getElementById("start");

const stop = document.getElementById("stop");

// const colors=["red","blue","green","pink","orange","purple","grey","violet","ivory","magenta","yellow"]
let randomColor=()=>{
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let color=`rgb(${r},${g},${b})`
    return color
}

let ref;

// let i=0;

start.addEventListener("click",()=>{
    ref=setInterval(()=>{
        // document.body.style.background=colors[i];
        // i=(i+1)% colors.length
        
         document.body.style.background=randomColor();
        
    },1000)
    console.log("BackgroundColor changing")
})
stop.addEventListener("click",()=>{
    clearInterval(ref)
    console.log("BackgroundColor changing STOPPED")
})
