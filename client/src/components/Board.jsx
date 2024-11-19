import Note from "./Note";

const Board = ({ title, notes }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "300px" }}>
      <h3>{title}</h3>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Board;
