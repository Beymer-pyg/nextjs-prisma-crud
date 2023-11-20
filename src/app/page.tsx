"use client";
import NoteForm from "@/components/NoteForm";
import { useEffect } from "react";
import { useNotes } from "@/context/NoteContext";

// interface Note {
//   id: number;
//   title: string;
//   content: string;
// }

function HomePage() {
  // const notes = await loadNotes();
  const { notes, loadNotes } = useNotes();
  useEffect(() => {
    loadNotes();
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        {" "}
        <NoteForm />
        {notes.map((note) => (
          <div key={note.id} className="bg-slate-400 p-4 my-2">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
