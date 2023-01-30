//input
let input={
    scrollY:{
        start: 0,
        end: document.documentElement.scrollTop-window.innerHeight,
        current: 0,
    },
    x:{
        start:0,
        end:window.innerWidth,
        current:0,
    },
    y:{
        start:0,
        end:window.innerHeight,
        current:0,

    }
}
// for mouse

input.x.range=input.x.end-input.x.start
input.y.range=input.y.end-input.y.start

input.x.fraction=input.x.current/input.x.range
input.y.fraction=input.y.current/input.y.range

// for scroll

input.scrollY.range=input.scrollY.end-input.scrollY.start

//output

let output={
    x:{
        start:-100,
        end:100,
        current:0,
    },
    y:{
        start:-100,
        end:100,
        current:0,
    },
    z:10000,
    scale:{
        start:1,
        end:0.5,
    },
    blur:{
        start:0.2,
        range:20,
    }
}

output.scale.range=output.scale.end-output.scale.start
output.x.range=output.x.end-output.x.start
output.y.range=output.y.end-output.y.start

let items=document.getElementsByClassName("parallax-item")
// for mouse position
function inputUpdate(event){
    input.x.current=event.clientX
    input.y.current=event.clientY

    input.x.fraction=input.x.current/input.x.range
    input.y.fraction=input.y.current/input.y.range


    // scroll y update
}

function scrollInputUpdate(){
    input.scrollY.current=document.documentElement.scrollTop
    input.scrollY.fraction=(input.scrollY.current-input.scrollY.start)/input.scrollY.range;
}

function outputUpdate(){
   // output.x.current=output.x.start+input.x.fraction*output.x.range;
   // output.y.current=output.y.start+input.y.fraction*output.y.range;

   // scroll output

   output.y.current=output.y.start+input.scrollY.fraction*output.y.range;
}

function movingThings(){
    for(let i=0;i<items.length;i++){
        let depth=Number(items[i].dataset.depth);
        let item={
            x:output.x.current-output.x.current*depth,
            y:output.y.current-output.y.current*depth,
            zIndex:output.z-output.z*depth,
            scale:output.scale.start+output.scale.range*depth,
            blur:(depth-output.blur.start)*output.blur.range,

        }
        items[i].style.transform="scale("+ item.scale+") translate("+item.x+"px,"+item.y+"px)"
        items[i].style.filter="blur("+item.blur+"px)"
        items[i].style.zIndex=item.zIndex
    }
}

// window.addEventListener('mousemove',(event)=>{
    
//     inputUpdate(event)
//     outputUpdate()
//     movingThings()

// })


window.addEventListener("scroll",()=>{

    scrollInputUpdate()
    outputUpdate()
    movingThings()


})

window.addEventListener("resize",()=>{
    input.x.end=window.innerWidth
    input.y.end=window.innerHeight

    input.x.range=input.x.end-input.x.start
    input.y.range=input.y.end-input.y.start

    // scroll
    input.scrollY.end=document.documentElement.scrollTop-window.innerHeight
    input.scrollY.range=input.scrollY.end-input.scrollY.start

})

 movingThings()
