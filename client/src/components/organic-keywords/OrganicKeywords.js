import React from 'react';
import axios from 'axios';
import Header from '../Header';
import OrganicKeywordsForm from './OrganicKeywordsForm';
import OrganicKeywordsList from './OrganicKeywordsList';

export default class OrganicKeywords extends React.Component {
    state = {
        keywords: [],
        error: ''
    };

    handleAddKeywords = (domain, database) => {
        axios.get(`/api/organic-keywords/?domain=${domain}&database=${database}`)
          .then((response) => {
            if (response.data.status === 'error') {
           
              this.setState({error:response.data.message});
            }else if (response.data.status === 'ok') {
              this.setState({error:''});
              response.data.keywords.map((ele) => {
                this.setState({keywords:response.data.keywords});
              })
            }
          }).catch((error) => {
            this.setState({error:'Internal server error. Unable to fetch internal API'});
          });
      };

    render() {
        return (
            <div>
                <Header />
                <OrganicKeywordsForm 
                    handleAddKeywords = {this.handleAddKeywords}
                />
                <OrganicKeywordsList
                    keywords={this.state.keywords}
                    error={this.state.error}
                />
            </div>
        );
    }
};
 