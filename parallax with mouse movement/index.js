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
}
output.x.range=output.x.end-output.x.start
output.y.range=output.y.end-output.y.start

let items=document.getElementsByClassName("parallax-item")

window.addEventListener('mousemove',(event)=>{
    input.x.current=event.clientX
    input.y.current=event.clientY

    // input update

    input.x.fraction=input.x.current/input.x.range
    input.y.fraction=input.y.current/input.y.range
    output.x.current=output.x.start+input.x.fraction*output.x.range;
    output.y.current=output.y.start+input.y.fraction*output.y.range;


    
    for(let i=0;i<items.length;i++){
        let depth=Number(items[i].dataset.depth);
        let item={
            x:output.x.current-output.x.current*depth,
            y:output.y.current-output.y.current*depth,
            zIndex:10000-10000*depth,
        }
        items[i].style.transform="translate("+item.x+"px,"+item.y+"px)"
        items[i].style.zIndex=item.zIndex
    }

})

window.addEventListener("resize",()=>{
    input.x.end=window.innerWidth
    input.y.end=window.innerHeight
})

