import React, { useState } from 'react';
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
          className='textArea'
          name='content'
          placeholder='Take a note...'
          onChange={handleChange}
          value={postText.content}
        />
        <button
          className='form_button'
          onClick={() => {
            props.addItem(postText);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputArea;
