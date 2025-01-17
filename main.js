import "./style.css";
import { addNote, removeNote } from "./src/components/note";

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-deleter")) {
    removeNote(event.target.parentElement);
    saveSessionData();
    return;
  }
  addNote(event.pageX, event.pageY);
});

//class for notes = "note"
