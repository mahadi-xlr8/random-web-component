let input={
    mouseX:{
        start:0,
        end:window.innerWidth,
        current:0,
    },
    mouseY:{
        start:0,
        end:window.innerHeight,
        current:0,
    }
}

input.mouseX.range=input.mouseX.end-input.mouseX.start
input.mouseY.range=input.mouseY.end-input.mouseY.start
input.mouseX.fraction=input.mouseX.current/input.mouseX.range
input.mouseY.fraction=input.mouseY.current/input.mouseY.range


let output={
    x:{
        start:-75,
        end:75,
        current:0,
        
    },
    y:{
        start:-75,
        end:75,
        current:0,
    },
}
output.x.range=output.x.end-output.x.start
output.y.range=output.y.end-output.y.start

window.addEventListener("mousemove",(event)=>{
    input.mouseX.current=event.clientX
    input.mouseY.current=event.clientY

    input.mouseX.fraction=input.mouseX.current/input.mouseX.range
    input.mouseY.fraction=input.mouseY.current/input.mouseY.range


    output.x.current=output.x.start+ input.mouseX.fraction*output.x.range;
    output.y.current=output.y.start+ input.mouseY.fraction*output.y.range;
    
    output.x.invers=output.x.end- input.mouseX.fraction*output.x.range;
    output.y.invers=output.y.end- input.mouseY.fraction*output.y.range;


    console.log(output.x.current)
    let puple=document.getElementsByClassName('puple')
    for(let i=0;i<puple.length;i++){
        puple[i].style.transform="translate("+output.x.current+"px,"+output.y.current+"px)"
    //     if(i==0)
    // puple[i].style.transform="translate("+output.x.current+"px,"+output.y.current+"px)"
    // else
    // puple[i].style.transform="translate("+output.x.invers+"px,"+output.y.invers+"px)"
    }
    
})

window.addEventListener("resize",()=>{
input.mouseX.end=window.innerWidth
input.mouseY.end=window.innerHeight

input.mouseX.range=input.mouseX.end-input.mouseX.start
input.mouseY.range=input.mouseY.end-input.mouseY.start

})




console.log(output.x)