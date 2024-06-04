addEventListener("DOMContentLoaded", () => {
  const appNode = document.getElementById("app");

  function createDiv(elementType, className, parentNode) {
    const element = document.createElement(elementType);
    element.className = className;
    parentNode.appendChild(element);
    return element;
  }

  const divsToCreate = 16;

  for (let i = 0; i < divsToCreate; i++) {
    createDiv("div", "box", appNode);
  }
});
