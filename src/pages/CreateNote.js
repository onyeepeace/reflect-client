import { useHistory } from "react-router";
import { createNote } from "../api";
import { NoteForm } from "./NoteForm";
import formStyles from "./NoteForm.module.css";

export const CreateNote = () => {
  const history = useHistory();

  const submit = async (data) => {
    await createNote(data);
    history.push("/notes");
  };

  return (
    <div className={formStyles.formContainer}>
      <h1 className={formStyles.formHeading}>Create Note</h1>
      <NoteForm onSubmit={submit} />
    </div>
  );
};
