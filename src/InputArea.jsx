import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import './_inputArea.scss';

const InputArea = (props) => {
  const [postText, setPostText] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPostText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.addItem(postText);
    event.preventDefault();
    setPostText({
      title: '',
      content: '',
    });
  };

  return (
    <div className='container'>
      <form className='form'>
        <input
          className='form_input'
          name='title'
          type='text'
          placeholder='Title'
          onChange={handleChange}
          value={postText.title}
        />
        <textarea
          key={1}
          type='text'
          className='textArea'
          name='content'
          placeholder='Take a note...'
          onChange={handleChange}
          value={postText.content}
        />
        <Fab className='form_button' onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default InputArea;
