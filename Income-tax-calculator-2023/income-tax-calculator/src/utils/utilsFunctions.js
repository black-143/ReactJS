function calculate(amount, percent) {
  return (amount * percent) / 100;
}
export function calculateTaxInOldTaxRegime(totalIncome) {
  if (totalIncome <= 250000) {
    return 0;
  } else if (totalIncome <= 500000) {
    return calculate(totalIncome - 250000, 5);
  } else if (totalIncome <= 1000000) {
    return calculate(totalIncome - 500000, 20) + 12500;
  } else {
    return calculate(totalIncome - 1000000, 30) + 112500;
  }
}

export function calculateTaxInNewTaxRegime(totalIncome) {
  if (totalIncome <= 300000) {
    return 0;
  } else if (totalIncome <= 600000) {
    return calculate(totalIncome - 300000, 5);
  } else if (totalIncome <= 900000) {
    return calculate(totalIncome - 600000, 10) + 15000;
  } else if (totalIncome <= 1200000) {
    return calculate(totalIncome - 900000, 15) + 45000;
  } else if (totalIncome <= 1500000) {
    return calculate(totalIncome - 1200000, 20) + 90000;
  } else {
    return calculate(totalIncome - 1500000, 30) + 150000;
  }
}
