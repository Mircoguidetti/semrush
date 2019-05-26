import React from 'react';
import axios from 'axios';
import BacklinksForm from './BacklinksForm'
import Backlinks from './Backlinks'

export default class HomePage extends React.Component {
    state = {
        backlinks: ''
    }

    handleAddBacklinks = (backlink) => {
        // console.log(backlink)
        axios.get(`/api/backlinks/${backlink}`)
          .then((response) => {
            if (response.data.status === 'error') {
              this.setState({'backlinks':response.data.message})
            }else if (response.data.status === 'ok') {
            //   console.log(this.state)
              this.setState({backlinks:response.data.backlinks})
            }
          }).catch((error) => {
            this.setState({backlinks:'Internal server error. Unable to fetch internal API'})
          })
      }

    render() {
        return (
            <div className='bg-red' >
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
 
    