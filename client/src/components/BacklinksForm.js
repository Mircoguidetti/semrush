import React from 'react';

export default class BacklinksForm extends React.Component {
  handleAddBacklinks = (e) => {
    
    e.preventDefault();
        const backlink = e.target.elements.backlink.value.trim();
        const error = this.props.handleAddBacklinks(backlink);
    
        this.setState(() => ({ error }));
    
        if (!error) {
          e.target.elements.backlink.value = '';
        }
    };

    render() {
        return (
          <div>
            <form onSubmit={this.handleAddBacklinks}>
              <input type="text" name="backlink" placeholder='Search domain backlinks' />
              <button>Submit</button>
            </form>
          </div>
        );
      }
};
    

