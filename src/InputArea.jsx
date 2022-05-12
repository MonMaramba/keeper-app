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
      if (name === 'title') {
        return { title: value, content: prevValue };
      } else if (name === 'content') {
        return { title: prevValue, content: value };
      }
      console.log(postText.title, postText.content);
    });
  };

  return (
    <div className='container'>
      <form>
        <input
          className='input__box'
          name='title'
          type='text'
          onChange={handleChange}
          value={postText.title}
        />
        <textarea
          className='textArea'
          name='content'
          onChange={handleChange}
          value={postText.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputArea;
