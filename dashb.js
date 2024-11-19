window.addEventListener("load", () => {
  if (!localStorage.getItem("user")) {
    window.location.replace("index.html");
  }
});
