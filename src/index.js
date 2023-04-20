// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseEnter: () => {
    const txt = document.querySelector("h2");
    txt.innerHTML = "The mouse is here!";
    txt.style.color = "#1abc9c";
  },
  mouseLeave: () => {
    const txt = document.querySelector("h2");
    txt.innerHTML = "The mouse is gone!";
    txt.style.color = "#3498db";
  },
  resizeWindow: () => {
    const txt = document.querySelector("h2");
    txt.innerHTML = "You just resized!";
    txt.style.color = "#9b59b6";
  },
  contextmenu: () => {
    const txt = document.querySelector("h2");
    txt.innerHTML = "That was a right click!";
    txt.style.color = "#f39c12";
  }
};

const txt = document.querySelector("h2");
txt.addEventListener("mouseenter", superEventHandler.mouseEnter);
txt.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resizeWindow);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
