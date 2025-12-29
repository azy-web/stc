function buatStiker() {
  const text = document.getElementById("textInput").value;
  const textColor = document.getElementById("textColor").value;
  const bgColor = document.getElementById("bgColor").value;

  document.getElementById("stikerText").innerText =
  (text || "Stiker Kamu").split(" ").join("\n");
  document.getElementById("stikerText").style.color = textColor;
  document.getElementById("stiker").style.background = bgColor;
}

function downloadStiker() {
  html2canvas(document.getElementById("stiker")).then(canvas => {
    const link = document.createElement("a");
    link.download = "stiker.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}