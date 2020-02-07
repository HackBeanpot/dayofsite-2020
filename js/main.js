$(document).ready(function(){
  $("#nav-toggle").click(function(){
    if ($("#nav-content").hasClass("mobile-nav-content")) {
      $("#nav-content").removeClass("mobile-nav-content");
      $("#nav-content").removeClass("show");
    } else {
      $("#nav-content").addClass("mobile-nav-content");
      $("#nav-content").addClass("show");
    }
  });
});
