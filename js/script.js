console.log("Miłego sprawdzania mojej pracy domowej :)");

const changeNameOfButton = (body) => {
  const themeName = document.querySelector(".themeName");

  if (body.classList.contains("dark")) 
      themeName.innerText = "jasny";
  else themeName.innerText = "ciemny";
};

const changeBackgroundColor = () => {
  const button = document.querySelector(".body__button");
  const body = document.querySelector(".body");

  button.addEventListener("click", () => {
    body.classList.toggle("dark");
    changeNameOfButton(body);
  });

};
changeBackgroundColor();