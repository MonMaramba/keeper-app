import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import notes from './notes';
import InputArea from './InputArea';
import './main.scss';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([
    {
      title: '',
      content: '',
    },
  ]);
  const addItem = (postText) => {
    console.log(postText);
    setNotes((prevItems) => {
      return [...prevItems, postText];
    });
  };

  return (
    <div>
      <Header />
      <InputArea addItem={addItem} />
      {notes.map((note) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
