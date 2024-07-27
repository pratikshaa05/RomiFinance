const neftout = document.getElementById('neftout');
console.log(neftout)
const openbox = document.getElementById('openbox');
console.log(openbox);


neftout.addEventListener('mouseover',(e)=>{
    openbox.style.display="block";
})
neftout.addEventListener('mouseout',(e)=>{
    openbox.style.display="none";
})

openbox.addEventListener('mouseover',(e)=>{
    openbox.style.display="block";
})

openbox.addEventListener('mouseout',(e)=>{
    openbox.style.display="none";
})

