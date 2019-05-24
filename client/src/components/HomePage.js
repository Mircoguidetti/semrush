import React from 'react';
import BacklinksForm from './BacklinksForm'
import Backlinks from './Backlinks'
import axios from 'axios';

export class HomePage extends React.Component {
    state = {
        backlinks: []
    }

    handleAddBacklinks = (backlink) => {
        if (!backlink) {
            return 'Enter valid value to add backlink';
        } else if (this.state.backlinks.indexOf(backlink) > -1) {
            return 'This option already exists';
        }
        console.log(backlink)
        axios.get(`/api/backlinks/${backlink}`)
          .then((response) => {
            if (response.data.status === 'error') {
              this.setState({'backlinks':['Not found']})
            }else if (response.data.status === 'ok') {
              this.setState({backlinks:[response.data.backlinks]})
            }
          }).catch((error) => {
            this.setState({backlinks:['Internal server error.']})
          })
      }

    componentDidMount() {
        try {
          const json = localStorage.getItem('backlinks');
          const backlinks = JSON.parse(json);
    
          if (backlinks) {
            localStorage.clear();
          }
        } catch (e) {
          // Do nothing at all
        }
      }
      componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state.backlinks);
        localStorage.setItem('backlinks', json);
      }

    render() {
        return (
            <div>
                <h1>Tool to find the best and worst backlinks from SEMRush </h1>
                <BacklinksForm 
                    handleAddBacklinks = {this.handleAddBacklinks}
                />
                <Backlinks
                    backlinks={this.state.backlinks}

                />
            </div>
        )
    }
}


export default HomePage;
 
    