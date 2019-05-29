import React from 'react';
import axios from 'axios';

export default class BacklinksForm extends React.Component {
  state = {
    databases: [],
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
      })
  }

  handleAddBacklinks = (e) => {
    
    e.preventDefault();
        const backlink = e.target.elements.backlink.value.trim();
        const error = this.props.handleAddBacklinks(backlink);
    
        this.setState(() => ({ error }));
    
        if (!error) {
          e.target.elements.backlink.value = '';
        }
    };

    onSelectChange = (e) => {
      console.log(e.target)
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleAddBacklinks}>
              <input type="text" name="backlink" placeholder='Search domain'/>
              <select onChange = {this.onSelectChange}>
              {this.state.databases.map((database) => {
                return  <option 
                          key={database.code}
                        >
                          {database.country}
                        </option>
              })}
               
              </select>
              <button>Submit</button>
            </form>
          </div>
        );
      }
};
    

