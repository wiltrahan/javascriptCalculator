$(document).ready(function() {
  var number = "";
  var secondNumber = "";
  var operator = "";
  var total = $("#totalWindow")

  total.text("0");

  $(".numbers").click(function() {
        number += $(this).text();
        total.text(number);
    });


});
