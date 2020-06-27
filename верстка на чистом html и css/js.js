function mod() {
  let modal = document.getElementById("modal");
  let span = document.getElementsByClassName("mod")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  //   window.onclick = function (event) {
  //     if (event.target.className == "myModal") {
  //       modal.style.display = "none";
  //     }
  //   };
}
