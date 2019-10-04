import React from "react";

const NoteList = ({ notes, onDelete }) => (
  // <ul>
  //   {notes.map(note => (
  //     <li key={note.id}>
  //       <button
  //         onClick={() => {
  //           console.log(`Хочу удалить ID: ${note.id}`);
  //           onDelete(note.id);
  //         }}
  //       >
  //         Delete
  //       </button>
  //       <span> {note.text}</span>
  //     </li>
  //   ))}
  // </ul>

 // тоже самое, что и сверху  только чище код. Используем деструктуризацию полей объекта для дальнейшего использования

<ul>
{notes.map(({id, text}) => (
  <li key={id}>
    <button
      onClick={() => {
        onDelete(id);
      }}
    >
      Delete
    </button>
    <span> {text}</span>
  </li>
))}
</ul>
);

export default NoteList;
