let info={
    name:['img1.jpg','img2.jpg','img3.jpg'],
    title:["A Tree","A Boat","Mountain View"],
    text:["This tree is as lonely as I am.","We could have sex in this boat but you don't text me.", "I wanna walk in this road with you<3"]
}

let left=document.getElementById("left")
let right=document.getElementById('right')
let ri=0;
let title=document.getElementById('title')
let text=document.getElementById('text')
let bg=document.getElementById('bg')
let img=document.getElementById('img')



right.addEventListener('click',()=>{
    ri=(ri+1)%3
    img.attributes[0].value=info.name[ri]
    bg.style.backgroundImage=`url(${info.name[ri]})`
    title.innerHTML=info.title[ri]
    text.innerHTML=info.text[ri]
    
})

left.addEventListener('click',()=>{
    ri--;
    if(ri<0)ri=2;

    img.attributes[0].value=info.name[ri]
    bg.style.backgroundImage=`url(${info.name[ri]})`
    title.innerHTML=info.title[ri]
    text.innerHTML=info.text[ri]

})

