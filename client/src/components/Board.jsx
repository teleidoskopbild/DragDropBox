import { useDroppable } from "@dnd-kit/core";
import Note from "./Note";

const Board = ({ title, notes }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "300px",
        minHeight: "200px",
        backgroundColor: "lightgray",
      }}
    >
      <h3>{title}</h3>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Board;
