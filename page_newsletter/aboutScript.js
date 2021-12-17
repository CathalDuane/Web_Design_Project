

//Cathal: show menu elements
function monthselect() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Cathal: jQuery slider
jQuery(document).ready(function ($) {
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  }); 
 
      
//Cathal: jQuery email valiadation
$(document).ready(function() { 
 
    $('#btn-submit').click(function() {  
   
      $(".error").hide();
      var hasError = false;
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var emailblockReg =
       /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
   
      var emailaddressVal = $("#UserEmail").val();
      if(emailaddressVal == '') {
        $("#UserEmail").after('<span class="error">Please enter your email address.</span>');
        hasError = true;
      }
   
      else if(!emailReg.test(emailaddressVal)) {
        $("#UserEmail").after('<span class="error">Enter a valid email address.</span>');
        hasError = true;
      }

      if(hasError == true) { return false; }
      });
  });

//Cathal: True/False Gamec
//simple true false game with JavaScript
let score = 0;
let attempts = 0;
function question1(){
    let userInput = document.getElementById("userAns1").value;
    if (userInput === 'T'|| userInput === 't'){
        score += 1;
        attempts += 1;
       document.getElementById("question1").innerHTML = "Q1 answered";
    }
    else if(userInput === 'F'|| userInput === 'f'){  
        attempts += 1;
        document.getElementById("question1").innerHTML = "Q1 answered";
    }  
} 

function question2(){
    let userInput = document.getElementById("userAns2").value;
    if (userInput === 'T'|| userInput === 't'){
        attempts += 1;
        document.getElementById("question2").innerHTML = "Q2 answered";
        }
    else if(userInput === 'F'|| userInput === 'f'){  
        score += 1;
        attempts += 1;
        document.getElementById("question2").innerHTML = "Q2 answered";
    }
    
} 

function question3(){
    let userInput = document.getElementById("userAns3").value;
    if (userInput === 'T'|| userInput === 't'){
        score += 1;
        attempts += 1;
        document.getElementById("question3").innerHTML = "Q3 answered";
        }

    else if(userInput === 'F'|| userInput === 'f'){  
        document.getElementById("question3").innerHTML = "Q3 answered";
        attempts += 1;
    }   
} 

function getResults(){
    if(attempts === 3){
        document.getElementById("questionFormat").innerHTML = "You got "+ score + "out of 3";
        score = 0;
    }
    else{
        document.getElementById("unanswered").innerHTML += "you must answer all the questions";
    }

}

//new jQuery slider

var slideIndex = 1;
displaySlide(slideIndex);

function moveSlides(n) {
    displaySlide(slideIndex += n);
}

function activeSlide(n) {
    displaySlide(slideIndex = n);
}

/* Main function */
function displaySlide(n) {
    var i;
    var totalslides = 
        document.getElementsByClassName("slide");
    var totaldots = 
        document.getElementsByClassName("footerdot");
      
    if (n > totalslides.length) {
        slideIndex = 1;
    }
      
    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className = 
        totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}