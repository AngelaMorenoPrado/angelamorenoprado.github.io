window.onload = function()
{
    move_imgs();
}

function move_imgs(){

    var imgp1 = ['project1_1', 'project1_2', 'project1_3', 'project1_4', 'project1_5'];
    var imgp2 = ['project2_1', 'project2_2', 'project2_3'];
    var imgp3 = ['project3_1', 'project3_2', 'project3_3', 'project3_4', 'project3_5'];

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

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        backgroundColor: "#181818",
        title:{
            fontColor: "#64ffda",
            text: "Master's grades",
        },
        axisY: {
            maximum: 10,
            minimum: 0
        },
        axisX:{
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: function(){
            return " ";
            },
        },
        data: [{        
            type: "column",  
            mouseover: onMouseover,
            click: onMouseover,
            dataPoints: [      
                { y: 7.4, label: "Web server administration", name: "Web server administration", description: "In this four months module, the following topics were practically and theoretically covered:<br><br>» What is a web server?<br>» Client Server architecture.<br>» OWASP.<br>» Installation, configuration and management of an IIS server.<br>» Installation, configuration and management of an Apache server.<br>» AWS.", cursor: "pointer" },
                { y: 9.3,  label: "Client Server computing", name: "Client Server computing", description:"In this four months module, the following topics were practically and theoretically covered:<br><br>» Client Server architecture.<br>» PHP.<br>» JavaScript.<br>» jQuery.<br>» MVC (Model View Controller).<br>» AJAX.<br>» HTTP.<br>» WebSockets.", cursor: "pointer" },
                { y: 10,  label: "IoT", cursor: "pointer", name: "IoT", description: "In this four months module, the following topics were practically and theoretically covered:<br><br>» What is IoT?<br>» Distributed systems.<br>» Virtualisation.<br>» Cloud computing.<br>» Smart objects.<br>» NFC.<br>» RFID.<br>» Arduino.<br>» Sensor networks."},
                { y: 9.7,  label: "User experience", cursor: "pointer", name:"User experience", description: "In this four months module, the following topics were practically and theoretically covered:<br><br>» Human-Computer interaction (HCI).<br>» User-centered Design (UCD).<br>» User Experience (UX).<br>» Responsive design.<br>» Web 2.0.<br>» Web accessibility.<br>» Accessibility evaluation.<br>» Usability evaluation.<br>» Bootstrap."},
                { y: 9.4,  label: "Project management", cursor: "pointer", name:"Project management", description: "In this four months module, the following topics were practically and theoretically covered:<br><br>» What is a project?<br>» Methodologies for project management.<br>» PMBok.<br>» Management of a web project.<br>» Agile methodologies.<br>» SCRUM." },
                { y: 9.9, label: "Web engineering and development", cursor: "pointer", name:"Web engineering and development", description: "In this four months module, the following topics were practically and theoretically covered:<br><br>» Client Server architecture.<br>» Communication protocols. (TCP, UDP).<br>» TCP/IP.<br>» HTTP.<br>» Node.js.<br>» GET.<br>» POST.<br>» MongoDB.<br>» API REST.<br>» RESTFul architecture.<br>» POSTMAN.<br>» Security development: Microsoft, OSSTMM, OWASP, WAS.<br>» SOAP." },
                { y: 9.4,  label: "E-commerce", cursor: "pointer", name:"E-commerce", description: "In this four months module, the following topics were practically and theoretically covered:<br><br>» Web transactions.<br>» Business models on the web.<br>» Financial models on the web.<br>» SEO.<br>» PrestaShop.<br>» Security: authenticity, confidentiality, integrity, non-repudiation.<br>» Cryptography.<br>» Hash functions: MD5, SHA.<br>» Asymmetric algorithms.<br>» Bitcoin.<br>» Peer-to-peer implementation: PayPal.." },
                { y: 8.9,  label: "Languages, stardards and technologies for the web", cursor: "pointer", name:"Languages, standards and technologies for the web.", description: "In this four months module, the following topics were practically and theoretically covered:<br><br>» HTTP.<br>» HTML5.<br>» CSS.<br>» XML.<br>» DTD.<br>» XSLT." }
            ]
        }]
    });

    chart.render();

    function onMouseover(e)
    {
        var name_chart = document.getElementById("name_chart");
        var text_chart = document.getElementById("text_chart");

        name_chart.innerHTML = e.dataPoint.name;
        text_chart.innerHTML = e.dataPoint.description;
    }

    function move_imgs_1()
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

function myFunction(x)
{
    x.classList.toggle("change");
}