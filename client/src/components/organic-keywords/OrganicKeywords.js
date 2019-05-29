import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import OrganicKeywordsForm from './OrganicKeywordsForm';
import OrganicKeywordsList from './OrganicKeywordsList';


export default class OrganicKeywords extends React.Component {
    state = {
        keywords: ''
    }

    handleAddKeywords = (domain, database) => {
        axios.get(`/api/organic-keywords/?domain=${domain}&database=${database}`)
          .then((response) => {
            if (response.data.status === 'error') {
              this.setState({'keywords':response.data.message})
            }else if (response.data.status === 'ok') {
              const format = response.data.keywords.replace('\r', '\n')
              this.setState({keywords:format})
            }
          }).catch((error) => {
            this.setState({keywords:'Internal server error. Unable to fetch internal API'})
          })
      }

    render() {
        return (
            <div >
                <Header />
                <OrganicKeywordsForm 
                    handleAddKeywords = {this.handleAddKeywords}
                />
                <OrganicKeywordsList
                    keywords={this.state.keywords}

                />
                <Link className='txt-decor-none' to='/'>Go back home</Link>
            </div>
        )
    }
}
 