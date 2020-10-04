let timer = null;
window.onload = function () {
  document.getElementById("decorBtn").onclick = function () {
    if (timer === null) {
      timer = setInterval(decorateText, 500);
    } else {
      clearInterval(timer);
      timer = null;
    }
  };
  document.getElementById("blingId").onchange = bling;
};

function bling() {
  let text = document.getElementById("txtarea");
  let isChecked = document.getElementById("blingId");
  if (isChecked.checked) {
    text.className = "bling";
  } else {
    text.className = "";
  }
}

function biggerText() {
    var text = document.getElementById('txtarea');
    if(text.style.fontSize && parseInt(text.style.fontSize) < 30)
        text.style.fontSize = (parseInt(text.style.fontSize) + 2) + "pt";
    else {
        text.style.fontSize = "12pt";
    }
}
