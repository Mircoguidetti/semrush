import React from 'react';
import axios from 'axios';
import Header from '../Header';
import OrganicKeywordsForm from './OrganicKeywordsForm';
import OrganicKeywordsList from './OrganicKeywordsList';

export default class OrganicKeywords extends React.Component {
    state = {
        keywords: []
    };

    handleAddKeywords = (domain, database) => {
        axios.get(`/api/organic-keywords/?domain=${domain}&database=${database}`)
          .then((response) => {
            if (response.data.status === 'error') {
              this.setState({'keywords':response.data.message});
            }else if (response.data.status === 'ok') {
              response.data.keywords.map((ele) => {
                this.setState({keywords:response.data.keywords});
              })
            }
          }).catch((error) => {
            this.setState({keywords:'Internal server error. Unable to fetch internal API'});
          });
      };

    render() {
        return (
            <div>
              {/* {console.log(this.state.keywords)} */}
                <Header />
                <OrganicKeywordsForm 
                    handleAddKeywords = {this.handleAddKeywords}
                />
                <OrganicKeywordsList
                    keywords={this.state.keywords}
                />
            </div>
        );
    }
};
 