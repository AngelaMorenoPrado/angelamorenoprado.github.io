window.onload = function()
{
    move_imgs();
}

function move_imgs(){


    var imgp1 = ['project1_1', 'project1_2', 'project1_3', 'project1_4', 'project1_5'];
    var imgp2 = ['project2_1', 'project2_2', 'project2_3'];
    var imgp3 = ['project3_1', 'project3_2', 'project3_3', 'project3_4', 'project3_5'];

    var h1_section2 = document.getElementById('h1_section2');

    var p1 = 0;
    var p2 = 0;
    var p3 = 0;

    var img_project1 = document.getElementById('img_project1');
    var link_project1 = document.getElementById('link_project1');

    var img_project2 = document.getElementById('img_project2');
    var link_project2 = document.getElementById('link_project2');

    var img_project3 = document.getElementById('img_project3');
    var link_project3 = document.getElementById('link_project3');

    setInterval(move_imgs_1, 4000);
    setInterval(move_imgs_2, 4000);
    setInterval(move_imgs_3, 4000);

    function move_imgs_1()
    {
        if(h1_section2.classList.contains('is-visible'))
        {

            if(p1 < imgp1.length)
            {
                img_project1.src = "img/"+imgp1[p1]+".png";
                link_project1.href = "img/"+imgp1[p1]+".png";

                p1++;
            }
            else if(p1 == imgp1.length)
            {
                p1 = 0;

                img_project1.src = "img/"+imgp1[p1]+".png";
                link_project1.href = "img/"+imgp1[p1]+".png";

                p1++;
            }

            
        }
        
    }

    function move_imgs_2()
    {
        if(p2 < imgp2.length)
        {
    
            img_project2.src = "img/"+imgp2[p2]+".png";
            link_project2.href = "img/"+imgp2[p2]+".png";

            p2++;
        }
        else if(p2 == imgp2.length)
        {
            p2 = 0;

            img_project2.src = "img/"+imgp2[p2]+".png";
            link_project2.href = "img/"+imgp2[p2]+".png";

            p2++;
        }
    }

    function move_imgs_3()
    {
        if(p3 < imgp3.length)
        {
    
            img_project3.src = "img/"+imgp3[p3]+".png";
            link_project3.href = "img/"+imgp3[p3]+".png";

            p3++;
        }
        else if(p3 == imgp3.length)
        {
            p3 = 0;

            img_project3.src = "img/"+imgp3[p3]+".png";
            link_project3.href = "img/"+imgp3[p3]+".png";

            p3++;
        }
    }
    
}