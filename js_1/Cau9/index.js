function bmi_calculator(weight_in_kg, height_in_cm) {
  let bmi = (weight_in_kg / height_in_cm / height_in_cm) * 10000;

  bmi = parseFloat(bmi.toFixed(2));

  let status = "";

  switch (true) {
    case 0 < bmi && bmi < 18.5:
      status = "Underweight";
      break;
    case 18.5 < bmi && bmi < 25:
      status = "Normal";

      break;
    case 25 < bmi && bmi < 30:
      status = "Overweight";

      break;
    case bmi < 30:
      status = "Obese";

      break;
    default:
      status = "?";
  }
  return {
    bmi: bmi,
    status: status,
  };
}

let result = bmi_calculator(65, 170);

console.log(result);
// {bmi: 22.49, status: "Underweight"}
