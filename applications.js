$(document).ready(function() {

$('.collapsible').collapsible();

$( "#non-inno-people" ).click(function() {
    document.getElementById('new-peeps').style.display = "block";
    document.getElementById("startPage").style.display = "none";

  });
});
