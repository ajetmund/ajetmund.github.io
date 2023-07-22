
$(window).load(function() {
  $("#typing2").hide();
  $("#typing3").hide();
  $("#typing4").hide();
  $("#text1").hide();
  $("#text2").hide();
  $("#text3").hide();
  $("#text4").hide();
});

setTimeout(() => {
  $("#typing1").hide();
  $("#text1").show();
}, 2000);

setTimeout(() => {
  $("#text1").removeClass("receive");
  $("#text1").addClass("receive-old");
  $("#typing2").show();
}, 3000);

setTimeout(() => {
  $("#typing2").hide();
  $("#text2").show()
}, 5000);

setTimeout(() => {
  $("#text2").removeClass("receive");
  $("#text2").addClass("receive-old");
  $("#typing3").show();
}, 6000);

setTimeout(() => {
  $("#typing3").hide();
  $("#text3").show()
}, 8000);

setTimeout(() => {
  $("#text3").removeClass("receive");
  $("#text3").addClass("receive-old");
  $("#typing4").show();
}, 9000);

setTimeout(() => {
  $("#typing4").hide();
  $("#text4").show()
}, 11000);


