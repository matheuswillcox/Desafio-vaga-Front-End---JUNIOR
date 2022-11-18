export const toBRL = (number: number, cents?: boolean) => {
  let result = number;
  if (cents) {
    result = result / 100;
    if (Number.isNaN(result)) {
      result = 0;
    }
  }
  return result.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
