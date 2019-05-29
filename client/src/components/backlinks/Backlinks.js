import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import BacklinksForm from './BacklinksForm';
import BacklinksList from './BacklinksList';


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
            <div >
                <Header />
                <BacklinksForm 
                    handleAddBacklinks = {this.handleAddBacklinks}
                />
                <BacklinksList
                    backlinks={this.state.backlinks}

                />
                <Link className='txt-decor-none' to='/'>Go back home</Link>
            </div>
        )
    }
}
 
    