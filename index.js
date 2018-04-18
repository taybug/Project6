function func1() {
  alert("This is the first.");
}


$(document).ready(function(){
    $("button").ready(function(){
        $("#div1").animate({
            width: '100%'}, 8000);
        $("#div2").animate({
            opacity: '0.5',
            width: '550px'}, 1000); 
        $("#div3").animate({
            opacity: '0.5',
            width: '550px'}, 1000);
            });
    });