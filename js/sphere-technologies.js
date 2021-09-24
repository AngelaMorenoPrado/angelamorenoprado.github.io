document.addEventListener("DOMContentLoaded", function() {

    if(screen.width > 769)
    {
      var texts = [
        "HTML5", "JavaScript", "PHP", "CSS3", "Python", "Java", "RESTful APIs", "Django", "Bootstrap", "WordPress", "Docker", "GitHub", "C", "MongoDB", "MySQL", "Dash", "Plotly", "PMBOK", "SCRUM", "AJAX", "JSON", "XML", "DTD", "jQuery", "PrestaShop", "PostgreSQL", "Django Volt Dashboard", "Node.js"
      ];
      var tc = TagCloud('#technologies-sphere', texts ,{
        radius: 200
      });
    }
    else
    {
      var texts = [
        "HTML5", "JavaScript", "PHP", "CSS3", "Python", "Java", "RESTful APIs", "Django", "Bootstrap", "WordPress", "Docker", "GitHub", "C", "MongoDB", "MySQL", "Dash", "Plotly", "PMBOK", "SCRUM", "AJAX", "JSON", "XML", "DTD", "jQuery", "PrestaShop", "PostgreSQL", "Django Volt Dashboard", "Node.js"
      ];
      var tc = TagCloud('#technologies-sphere', texts ,{
        radius: 170
      });
    }
    
 });