document.addEventListener(
    "scroll",
    function() {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) - document.documentElement.clientHeight;
      scrollPercent = scrollTop / scrollBottom * 100 + "%";
      document
        .getElementById("ProgressBar")
        .style.setProperty("--scroll", scrollPercent);
    },
    { passive: true }
  );

  $(window).on("load",function(){
    $(".LoadingAnimation").fadeOut("slow");
    setTimeout(
        function(){
        },2000);
});
$(document).ready(function(){
  $("#NavbarButton").click(function(){
    document.getElementById('FirstLine').classList.toggle('line1');
    document.getElementById('SecondLine').classList.toggle('line2');
    document.getElementById('ThirdLine').classList.toggle('line3');
    var content = document.getElementById('content');
    var Navigationbar = document.getElementById('Navbar');
    if(content.style.marginLeft==="300px"){
      Navigationbar.style.width = "0";
      content.style.marginLeft="0px";
      $('.Logo').css({'opacity':'0','transition-duration':'0.1s','margin-top':'20px'});
      $('.MenuItems').css({'opacity':'0','transition-duration':'0.1s','margin-top':'20px'});
    }else{
      Navigationbar.style.width = "300px";
      content.style.marginLeft="300px"; 
      setTimeout(function(){
        $('.Logo').css({'opacity':'1','transition-duration':'0.1s','margin-top':'0px'});
        $('.MenuItems').css({'opacity':'1','transition-duration':'0.5s','margin-top':'0px'});
      },400);
    }
  });
});
