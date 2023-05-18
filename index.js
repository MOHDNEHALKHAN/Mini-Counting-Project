let value = 0;

const changecolor = () => {
  if (value < 0) {
    document.querySelector("#value").style.color = "#8F43EE";
  } else if (value > 0) {
    document.querySelector("#value").style.color = "#8F43EE";
  } else {
    document.querySelector("#value").style.color = "#fff";
  }
};

document.querySelector(".Increment").onclick = () => {
  value = value + 1;
  changecolor();
  document.querySelector("#value").innerHTML = value;
};

document.querySelector(".Decrement").onclick = () => {
  value = value - 1;
  changecolor();
  document.querySelector("#value").innerHTML = value;
};

document.querySelector(".Reset").onclick = () => {
  value = 0;
  changecolor();
  document.querySelector("#value").innerHTML = value;
};