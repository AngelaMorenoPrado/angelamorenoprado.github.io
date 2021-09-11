document.addEventListener("DOMContentLoaded", function() {

    var texts = [
           "HTML5", "JavaScript", "PHP", "CSS3", "Python", "Java", "RESTful APIs", "Django", "Bootstrap", "WordPress", "Docker", "GitHub", "C", "MongoDB", "MySQL", "Dash", "Plotly", "PMBOK", "SCRUM", "AJAX", "JSON", "XML", "DTD", "jQuery"
       ];
       var tc = TagCloud('#technologies-sphere', texts ,{
         radius: 200

       });
 });