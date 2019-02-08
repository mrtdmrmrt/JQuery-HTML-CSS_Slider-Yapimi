$(document).ready(function(){
  $(".slider li:first").show();
  indis=0;
  slide_count= $(".slider li").length-1;
  //Navigation butonların üretilmesi
  navigation_button_count = $(".slider li").length;

  for(i=1;i<=navigation_button_count;i++)
  {
    $(".navigation").append("<li><a href='#'>"+ i +"</a></li>")
  }
  $(".navigation li:first").find("a").addClass("active");
  /*--------------------------------------------------------------*/

  $(".navigation li ").click(function () {
    indis=$(this).index();

    $(".slider li").hide();
    $(".slider li:eq("+ indis +")").fadeIn(500);

    $(".navigation li a").removeClass("active");

    $(this).find("a").addClass("active");

  })

  /*
  $(".navigation li").hover(function(){
    var indis=$(this).index();
    $(".slider li").hide();
    $(".slider li:eq("+ indis +")").fadeIn(500);

    $(".navigation li a").removeClass("active");

    $(this).find("a").addClass("active");
  });

*/
  $("#prev").click(function () {

    
    if (indis== 0)
    {
      indis=slide_count;
    }
    else{
      indis --;
    }
    $(".slider li").hide();
    $(".slider li:eq("+ indis +")").fadeIn(500);

    $(".navigation li a").removeClass("active");

    $(".navigation li:eq("+indis+")").find("a").addClass("active");

  })

  $("#next").click(function () {


    if (indis== slide_count)
    {
      indis=0;
    }
    else{
      indis ++;
    }
    $(".slider li").hide();
    $(".slider li:eq("+ indis +")").fadeIn(500);

    $(".navigation li a").removeClass("active");

    $(".navigation li:eq("+indis+")").find("a").addClass("active");

  })

})
