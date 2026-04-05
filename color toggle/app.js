let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
 

  toggler.checked === true
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
});