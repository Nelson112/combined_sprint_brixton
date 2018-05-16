$(document).ready(function() {

$('.collapsible').collapsible();

$( "#non-inno-people" ).click(function() {
    document.getElementById('new-peeps').style.display = "block";
    document.getElementById("startPage").style.display = "none";

  });
});

var slideIndex = 1;
        showDivs(slideIndex);
        
        function plusDivs(n) {
          showDivs(slideIndex += n);
        }
        
        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "block";  
        }