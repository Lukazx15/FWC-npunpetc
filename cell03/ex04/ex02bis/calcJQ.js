$(function () {
  setInterval(function () {
    alert("Please, use me...");
  }, 30000);

  $("#calculator").on("submit", function (event) {
    event.preventDefault();

    const num1 = Number($("#num1").val());
    const num2 = Number($("#num2").val());
    const operator = $("#operator").val();
    let answer;

    if (!Number.isFinite(num1) || !Number.isFinite(num2) || num1 < 0 || num2 < 0) {
      console.log("Error :(");
      alert("Error :(");
      return;
    }

    if ((operator === "/" || operator === "%") && num2 === 0) {
      console.log("It's over 9000!");
      alert("It's over 9000!");
      return;
    }

    if (operator === "+") {
      answer = num1 + num2;
    } else if (operator === "-") {
      answer = num1 - num2;
    } else if (operator === "*") {
      answer = num1 * num2;
    } else if (operator === "/") {
      answer = num1 / num2;
    } else {
      answer = num1 % num2;
    }

    console.log(answer);
    alert(answer);
  });
});
