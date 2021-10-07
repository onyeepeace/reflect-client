import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { deleteNote, getNotes } from "../api";
import noteStyles from "./Notes.module.css";

function Notes() {
  const history = useHistory();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await getNotes();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  const deleteHandler = (data) => {
    deleteNote(data);
    history.push("/notes");
    alert("Note deleted!");
  };

  return (
    <div className={noteStyles.container}>
      <h1 className={noteStyles.heading}>Here are your notes</h1>
      <div className={noteStyles.notes}>
        {notes.map((note) => (
          <div className={noteStyles.note} key={note._id}>
            <h2 className={noteStyles.title}>{note.title}</h2>
            <div className={noteStyles.cta}>
              <Link to={`/edit/${note._id}`}>
                {" "}
                <button className={noteStyles.edit}>Edit</button>
              </Link>
              <button
                className={noteStyles.delete}
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
