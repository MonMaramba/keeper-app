import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import notes from './notes';
import InputArea from './InputArea';
import './main.scss';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  const addNote = (newNote) => {
    setNotes((prevItems) => {
      return [...prevItems, newNote];
    });
  };

  return (
    <div>
      <Header />
      <InputArea addItem={addNote} />
      {notes.map((note, i) => {
        return (
          <Note
            key={i}
            id={i}
            onDelete={deleteNote}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
