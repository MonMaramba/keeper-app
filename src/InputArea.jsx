import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import './_inputArea.scss';

const InputArea = (props) => {
  const [postText, setPostText] = useState({
    title: '',
    content: '',
  });
  const [focus, setFocus] = useState(false);

  const clicked = () => {
    setFocus(true);
  };

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
        {focus ? (
          <input
            className='form_input'
            name='title'
            type='text'
            placeholder='Title'
            onChange={handleChange}
            value={postText.title}
          />
        ) : null}
        <textarea
          key={1}
          type='text'
          className='textArea'
          name='content'
          placeholder={focus ? 'Content' : ''}
          rows={focus ? 3 : 1}
          onClick={clicked}
          onChange={handleChange}
          value={postText.content}
        />
        <Zoom in={focus}>
          <Fab className='form_button' onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default InputArea;
