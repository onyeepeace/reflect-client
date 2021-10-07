import { useForm } from "react-hook-form";
import formStyles from "./NoteForm.module.css";

export const NoteForm = ({ title, content, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: title ? title.title : "",
      content: content ? content.content : "",
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
    console.log({ data });
  });

  return (
    <div className={formStyles.container}>
      <form onSubmit={submitHandler}>
        <div className="title">
          <input
            {...register("title", { required: true })}
            type="text"
            id="text"
            placeholder="Title"
            className={formStyles.input}
          />
        </div>

        <div className="note">
          <textarea
            {...register("content", { required: true })}
            id="text"
            cols={30}
            rows={10}
            placeholder="Content"
            className={formStyles.text}
          />
        </div>
        <button className={formStyles.submit} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
