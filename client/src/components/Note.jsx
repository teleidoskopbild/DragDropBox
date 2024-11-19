const Note = ({ note }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "5px 0",
        padding: "10px",
        background: "#f9f9f9",
      }}
    >
      <h4>{note.title}</h4>
      <p>{note.description}</p>
    </div>
  );
};

export default Note;
