import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { getNote, updateNote } from "../api";
import { NoteForm } from "./NoteForm";
import formStyles from "./NoteForm.module.css";

export const EditNote = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      const title = await getNote(match.params.id);
      const content = await getNote(match.params.id);
      setTitle(title);
      setContent(content);
    };
    fetchNote();
  }, []);

  const submit = async (data) => {
    await updateNote(data, match.params.id);
    console.log({ data });
    history.push("/notes");
  };

  return title && content ? (
    <div className={formStyles.formContainer}>
      <h1 className={formStyles.formHeading}>Edit Note</h1>
      <NoteForm title={title} content={content} onSubmit={submit} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
