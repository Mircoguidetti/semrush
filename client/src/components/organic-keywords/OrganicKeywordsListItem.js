import React from 'react';
import uuid from 'uuid';

const OrganicKeywordsListItem = (props) => (
  <div>
    {props.keywordsText.map((ele) => {
        return (
          <li className='list__item'>
            <span className='list__item__index'>Keyword: <span className='list__item__value'>{ele.keyword}</span></span>
            <span className='list__item__index'>position: <span className='list__item__value'>{ele.position}</span></span>
            <span className='ist__item__index'>Volume: <span className='list__item__value'>{ele.volume}</span></span>
            <hr/>
          </li>
        )
    })}
  </div>
   
);

export default OrganicKeywordsListItem;