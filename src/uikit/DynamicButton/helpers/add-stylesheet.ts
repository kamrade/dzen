export function addStylesheet(stylesheet: string, id: string) {
  let styleSheetElement = document.createElement("style");
  styleSheetElement.id = id;
  styleSheetElement.innerHTML = stylesheet;
  document.head.appendChild(styleSheetElement);
}
