$(".choose").click(function () {
  $('*').removeClass('active')
  $(".choose").addClass("active");
  // $(".choose > .icon").addClass("active");
  $("#line").addClass("one");

})

$(".pay").click(function () {
  $('*').removeClass('active')
  $(".pay").addClass("active");
  // $(".pay > .icon").addClass("active");
  $("#line").addClass("two");

})

$(".wrap").click(function () {
  $('*').removeClass('active')
  $(".wrap").addClass("active");
  // $(".wrap > .icon").addClass("active");
  $("#line").addClass("three");

})

$(".ship").click(function () {
  $('*').removeClass('active')
  $(".ship").addClass("active");
  // $(".ship > .icon").addClass("active");
  $("#line").addClass("four");

})

$(".choose").click(function () {
  $('*').removeClass('active')
  $("#first").addClass("active");

})

$(".pay").click(function () {
  $('*').removeClass('active')
  $("#second").addClass("active");

})

$(".wrap").click(function () {
  $('*').removeClass('active')
  $("#third").addClass("active");

})

$(".ship").click(function () {
  $('*').removeClass('active')
  $("#fourth").addClass("active");
})


