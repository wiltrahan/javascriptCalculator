$(document).ready(function() {
  var number = "";
  var secondNumber = "";
  var operator = "";
  var total = $("#totalWindow");


  total.text("0");

  $(".numbers").click(function() {
    $(".operators").removeClass('activeOperator');
    number += $(this).text();
    total.text(number);
    numberLength(number);
  });


  $(".operators").click(function() {
    $(this).addClass('activeOperator');
    operator = $(this).text();
    secondNumber = number;
    number = "";
    total.text(secondNumber);
  });

  $("#clear, #all_clear").click(function() {
    $(".operators").removeClass('activeOperator');
    number = "";
    total.text("0");
    if ($(this).attr("id") === "all_clear") {
      secondNumber = "";
      number = "";
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
      $(".operators").removeClass('activeOperator');
      totalLength(number);

    });

    // function eq(operator, temp) {
    //   number = temp;
    //   switch (operator) {
    //     case "+":
    //       number = parseInt(secondNumber, 10) + parseInt(number, 10);
    //       number = number.toString(10);
    //       break;
    //     case "-":
    //       number = parseInt(secondNumber, 10) - parseInt(number, 10);
    //       number = number.toString(10);
    //       break;
    //     case "/":
    //       number = parseInt(secondNumber, 10) / parseInt(number, 10);
    //       number = number.toString(10);
    //       break;
    //     case "*":
    //       number = parseInt(secondNumber, 10) * parseInt(number, 10);
    //       number = number.toString(10);
    //       break;
    //   }
    //   total.text(number);
    //   $(".operators").removeClass('activeOperator');
    //   totalLength(number);

    // }




  function numberLength(number) {
    if (number.length > 10) {
      number = "";
      total.text("limit reached");
    }
  }

  function totalLength(number) {
    if (number.length >= 10 && number[1] === ".") {
      number = parseFloat(number).toFixed(4).toString();
      total.text(number);
    } else if (number.length >= 10) {
      total.text("limit reached");
    }
  }
});
