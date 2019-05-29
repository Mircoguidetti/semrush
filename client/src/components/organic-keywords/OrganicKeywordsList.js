import React from 'react';
import OrganicKeywordsListItem from './OrganicKeywordsListItem';

const OrganicKeywordsList = (props) => (
  <div>
    {props.keywords.length === 0 && <p>Please add a domain to get the keywords!</p>}
    {
        <OrganicKeywordsListItem
          key={props.keywords}
          keywordsText={props.keywords}
        />
    }
  </div>
);

export default OrganicKeywordsList;

