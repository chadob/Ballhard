import React from 'react';
import DisplaySearchContainer from '../home/displaySearch/displaySearchContainer';

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="search-results">
        {this.props.search &&  <DisplaySearchContainer search={this.props.search}/>}
      </div>
    );
  }
}
