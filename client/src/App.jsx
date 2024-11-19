import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
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
  {
    id: "4",
    title: "Task 4",
    description: "Description for Task 4",
    status: "done",
  },
];

function App() {
  const [notes, setNotes] = useState(mockNotes);

  const boards = ["backlog", "in-progress", "done", "to-review"];

  const handleDragEnd = (event) => {
    // happens when a note gets dragged to another board
    const { active, over } = event;
    if (active.id !== over.id) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === active.id ? { ...note, status: over.id } : note
        )
      );
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "20px" }}>
        {boards.map((board) => (
          <Board
            key={board}
            title={board}
            notes={notes.filter((note) => note.status === board)}
          />
        ))}
      </div>
    </DndContext>
  );
}

export default App;
