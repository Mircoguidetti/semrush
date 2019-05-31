import React from 'react';
import axios from 'axios';

export default class OrganicKeywordsForm extends React.Component {
  state = {
    databases: [],
    error: ''
  };
  
  componentWillMount() {
    this.getDatabases()
  }

  getDatabases = () => {
    axios.get('/api/databases')
      .then((response) => {
       this.setState({databases:response.data.databases})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleAddKeywords = (e) => {
    
    e.preventDefault();
        const domain = e.target.elements.domain.value.trim();
        const database = this.state.databases.find(d => d.country === e.target.elements.database.value).code;
        if (domain.length > 0) {
          this.props.handleAddKeywords(domain, database);
          e.target.elements.domain.value = '';
          this.setState({error:''});
        }else {
          this.setState({error:'Please add a valid domain'});
        }        
    };

    render() {
        return (
          <div className='form__div'>
            <form onSubmit={this.handleAddKeywords}>
              <input className='form__input' type="text" name="domain" placeholder='Search domain'/>
              <select className='form__select' name='database'>
              {this.state.databases.map((database) => {
                return  <option 
                          key={database.code}
                          value={database.country}
                        >
                          {database.country}
                        </option>
              })}
              </select>
              <button className='form__button'>Submit</button>
              {this.state.error.length > 0 ? this.state.error: ''}
            </form>
          </div>
        );
      }
};
    

