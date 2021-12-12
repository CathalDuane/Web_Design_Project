function monthselect() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// function dateSelect(){
//     let date = document.getElementById("start").value;
//     date.scrollTo();
//     ;
// }

//jQuery light slider
//next
// $(document).ready(function(){
//     $('.next').on('click', function(){
//        var currentImg = $('.active');
//        var nextImg = currentImg.next();

//        if(nextImg.length){
//            currentImg.removeClass('active').css('z-index',-10);
//            nextImg.addClass('active').css('z-index',10);

//        }
       
//     })
// })

// //prev
// $(document).ready(function(){
//     $('.prev').on('click', function(){
//        var currentImg = $('.active');
//        var prevImg = currentImg.prev();

//        if(prevImg.length){
//            currentImg.removeClass('active').css('z-index',-10);
//            prevImg.addClass('active').css('z-index',10);

//        }
       
//     })
// })

//jQuery slider
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
  