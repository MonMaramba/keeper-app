import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';
import InputArea from './InputArea';
import './main.scss';

const App = () => {
  return (
    <div>
      <Header />
      <InputArea />
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
