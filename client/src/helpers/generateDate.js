export default function generateDate(date) {
  let returnDate;
  if (date) {
    returnDate = new Date(date)
      .toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
      .split(",")[0]
      .split("/");
  } else {
    returnDate = new Date()
      .toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
      .split(",")[0]
      .split("/");
  }

  return `${returnDate[1]}/${returnDate[0]}/${returnDate[2]}`;
}
