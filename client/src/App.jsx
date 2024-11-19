import Board from "./components/Board.jsx";

const mockNotes = [
  {
    id: "1",
    title: "Task 1",
    description: "Description for Task 1",
    status: "backlog",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description for Task 2",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description for Task 3",
    status: "done",
  },
];

function App() {
  const boards = ["backlog", "in-progress", "done"];
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        {boards.map((board) => (
          <Board
            key={board}
            title={board}
            notes={mockNotes.filter((note) => note.status === board)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
