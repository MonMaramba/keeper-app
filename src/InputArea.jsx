import React, { useState } from 'react';
import './_inputArea.scss';

const InputArea = (props) => {
  return (
    <div className='container'>
      <form>
        <input className='input__box' type='text' />
        <textarea className='textArea' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputArea;
