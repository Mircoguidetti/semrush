import React from 'react';
import Backlink from './Backlink';

const Backlinks = (props) => (
  <div>
    <div>
      <h3>Your Backlinks</h3>
    </div>

    {props.backlinks.length === 0 && <p>Please add a domain to get started!</p>}
    {
      props.backlinks.map((backlink) => (
        <Backlink
          key={backlink}
          backlinkText={backlink}
        />
      ))
    }
  </div>
);

export default Backlinks;

