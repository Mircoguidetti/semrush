import React from 'react';
import BacklinksListItem from './BacklinksListItem';

const Backlinks = (props) => (
  <div>
    <div>
      
    </div>

    {props.backlinks.length === 0 && <p>Please add a domain to get the backlinks!</p>}
    {
      
        <BacklinksListItem
          key={props.backlinks}
          backlinkText={props.backlinks}
        />
      
    }
  </div>
);

export default Backlinks;

