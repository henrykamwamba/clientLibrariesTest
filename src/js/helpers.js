export function OutputMessage(elementSelector, message, isSuccess) {
  const bootstrapClass = isSuccess ? "success" : "danger";
  const htmlElement = `<div class='${bootstrapClass}'>${message}"<button type='button' class='btn'>Close</button></div>`;
  document.getElementById(elementSelector ?? "divMessage").innerHTML =
    htmlElement;
}
