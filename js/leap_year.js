function myFunction() {
  var leapYear= document.getElementById("year").value;
  var text;
if(leapYear%400===0){
  text = "This is a leap year!";
  
}
else if(leapYear%4===0 && leapYear%100!==0){
  text = "This is a leap year!";
  
}
else{
  text = "This is not a leap year!";
  
}
document.getElementById("feedback").innerHTML = text;
}