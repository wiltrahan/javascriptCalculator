$(document).ready(function() {
  var number = "";
  var secondNumber = "";
  var operator = "";
  var total = $("#totalWindow");

  total.text("0");

  $(".numbers").click(function() {
    number += $(this).text();
    total.text(number);
  });

  $(".operators").click(function() {
    operator = $(this).text();
    secondNumber = number;
    number = "";
    total.text(secondNumber);
  });

  $("#clear, #all_clear").click(function() {
    number = "";
    total.text("0");
    if ($(this).attr("id") === "all_clear") {
      secondNumber = "";
    }
  });

  $("#equals").click(function() {
    switch (operator) {
      case "+":
        number = parseInt(secondNumber, 10) + parseInt(number, 10);
        number = number.toString(10);
        break;
      case "-":
        number = parseInt(secondNumber, 10) - parseInt(number, 10);
        number = number.toString(10);
        break;
      case "/":
        number = parseInt(secondNumber, 10) / parseInt(number, 10);
        number = number.toString(10);
        break;
      case "*":
        number = parseInt(secondNumber, 10) * parseInt(number, 10);
        number = number.toString(10);
        break;
    }

    total.text(number);
    secondNumber = "";
  });
});
