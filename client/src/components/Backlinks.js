import React from 'react';
import Backlink from './Backlink';

const Backlinks = (props) => (
  <div>
    <div>
      <h3>Here your Backlinks</h3>
    </div>

    {props.backlinks.length === 0 && <p>Please add a domain to get started!</p>}
    {
      
        <Backlink
          key={props.backlinks}
          backlinkText={props.backlinks}
        />
      
    }
  </div>
);

export default Backlinks;

