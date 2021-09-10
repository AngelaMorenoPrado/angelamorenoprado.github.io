const sections = document.querySelectorAll('section');

const animationDuration = 1000;
let lastTime = 0;

let index = 0;

var button_section0 = document.getElementById("button_section0");
var button_section1 = document.getElementById("button_section1");
var button_section2 = document.getElementById("button_section2");
var button_section3 = document.getElementById("button_section3");


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
        if(parseInt(index)+1 < sections.length)
        {
            
            let elb = document.getElementById("button_section"+index);
            elb.classList.remove('actual_button');

            index++;
            
            let elm = document.getElementById("section"+index);
            elb = document.getElementById("button_section"+index);
            elm.scrollIntoView({behavior: "smooth"});
            e.preventDefault();
            elb.classList.add('actual_button');
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

            let elb = document.getElementById("button_section"+index);
            elb.classList.remove('actual_button');

            index--;

            let elm = document.getElementById("section"+index);
            elb = document.getElementById("button_section"+index);
            elm.scrollIntoView({behavior: "smooth"});
            e.preventDefault();
            elb.classList.add('actual_button');
        }
        else
        {
            return;
        }
    }

    lastTime = currentTime;
}, { passive: false });

function change_section(i)
{

    let elm = document.getElementById("section"+i);
    elm.scrollIntoView({behavior: "smooth"});

    let x = document.getElementsByClassName("actual_button");
    x[0].classList.remove("actual_button");

    x = document.getElementById("button_section"+i);
    x.classList.add("actual_button");

    index = i;
}
