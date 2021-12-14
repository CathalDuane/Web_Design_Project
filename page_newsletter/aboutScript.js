

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