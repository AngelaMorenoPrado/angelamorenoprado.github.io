const sections = document.querySelectorAll('section');

const animationDuration = 1000;
let lastTime = 0;

let index = 0;

window.addEventListener("wheel", (e) => {

    const delta = e.wheelDelta;
    
    const currentTime = new Date().getTime();

    if(currentTime - lastTime < animationDuration)
    {
        e.preventDefault();
        return;
    }

    if(delta < 0)
    {
        if(index+1 < sections.length)
        {
            index++;
            
            let elm = document.getElementById("section"+index);
            elm.scrollIntoView({behavior: "smooth"});
            e.preventDefault();
        }
        else
        {
            return;
        }  
    }
    else
    {
        if(index-1 >= 0)
        {
            index--;
            let elm = document.getElementById("section"+index);
            elm.scrollIntoView({behavior: "smooth"});
            e.preventDefault();
        }
        else
        {
            return;
        }
    }

    lastTime = currentTime;
}, { passive: false });