import React, { Component } from 'react';
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';
import './_header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>
          <HighlightOutlinedIcon fontSize='large' />
          Keeper
        </h1>
      </div>
    );
  }
}

export default Header;
