console.log("Miłego sprawdzania mojej pracy domowej :)");



const changeBackgroundColor = () => {
  const body = document.querySelector(".body");
  const themeName = document.querySelector(".themeName");

  if (body.classList.contains("dark")) 
      themeName.innerText = "jasny";
  else themeName.innerText = "ciemny";
};

const init = (body) => {
  const button = document.querySelector(".body__button");

  button.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
  init(body);
};
