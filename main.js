import "./style.css";
import {
  addNote,
  removeNote,
  saveSessionData,
  loadSessionData,
} from "./src/components/note";

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-text")) return;
  if (event.target.classList.contains("note-deleter")) {
    removeNote(event.target.parentElement);
    saveSessionData();
    return;
  }
  addNote(event.pageX, event.pageY);
  saveSessionData();
});

loadSessionData();
