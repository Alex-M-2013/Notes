import "../styles/Notes.css";
import { useState, useRef, useEffect } from "react";

export const Notes = () => {
    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("savedNotes")) ?? []);
    const inputRef = useRef(null);

    useEffect(() => localStorage.setItem("savedNotes", JSON.stringify(notes)), [notes]);

    const addNote = (input) => {
        if (input === "") return;
        setNotes([...notes, input]);
        inputRef.current.value = "";
    };

    const removeNote = (i) => setNotes(notes.filter((_, index) => index !== i));

    return (
        <div id="all-notes-container">
            <div id="add-note">
                <input ref={inputRef} type="text" placeholder="Add note..." aria-label="Add Note" onKeyDown={(event) => event.key === "Enter" && addNote(inputRef.current.value)} />
                <button onClick={() => addNote(inputRef.current.value)}>Add Note</button>
            </div>

            {notes.map((note, i) => {
                return (
                    <div className="note-container" key={`Note #${i + 1}: ${note}`}>
                        <p id="note">{note}</p>
                        <button onClick={() => removeNote(i)}>Remove Note</button>
                    </div>
                );
            })}
        </div>
    );
};
