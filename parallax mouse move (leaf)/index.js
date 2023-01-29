//input
let input={
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
input.x.range=input.x.end-input.x.start
input.y.range=input.y.end-input.y.start

input.x.fraction=input.x.current/input.x.range
input.y.fraction=input.y.current/input.y.range

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

function inputUpdate(event){
    input.x.current=event.clientX
    input.y.current=event.clientY

    input.x.fraction=input.x.current/input.x.range
    input.y.fraction=input.y.current/input.y.range
}

function outputUpdate(){
    output.x.current=output.x.start+input.x.fraction*output.x.range;
    output.y.current=output.y.start+input.y.fraction*output.y.range;
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

window.addEventListener('mousemove',(event)=>{
    
    inputUpdate(event)
    outputUpdate()
    movingThings()

})

window.addEventListener("resize",()=>{
    input.x.end=window.innerWidth
    input.y.end=window.innerHeight
})

 movingThings()
