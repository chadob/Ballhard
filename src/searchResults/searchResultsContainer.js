import React from 'react';
import './searchResults.css'
import { SearchResults } from './searchResults';
import { search } from "../actions";
import { connect } from 'react-redux';

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  //Check to see if this component was created by the preset searches on the main page
  //Function exists because update isn't getting called on reroute to /search
  componentDidMount () {
    if ((this.props.match.params.type !== "preset") && ((this.props.query !== this.props.match.params.query) || (this.props.type !== this.props.match.params.type))) {
      console.log('mount ran')
      this.props.search(this.props.match.params.query, this.props.match.params.type, this.props.allVideos);
    }
  }
  //First check to see if this component was created by the preset searches on the main page
  //next check if the new props being received are all there and are different then what we already have
  componentDidUpdate(prevProps) {
    console.log(this.props.query, this.props.type)
    console.log(this.props.match.params)
    if ((this.props.type !== "preset") && (this.props.query && this.props.type && this.props.allVideos) && ((prevProps.type !== this.props.type) || (prevProps.query !== this.props.query))) {
        console.log('update ran')
      this.props.search(this.props.query, this.props.type, this.props.allVideos);
    }
  }
  render() {
    console.log(this.props)
    console.log(((this.props.type !== "preset") && (this.props.query && this.props.type)) ? 'hi' : 'bye')
    return (
      <SearchResults currentSearch={this.props.search} search={this.props.searchResults} />
    );
  }
}
function mapStateToProps ( state ) {
  console.log(state)
  return {
    searchResults: state.data.search && state.data.search.searchResults,
    query: state.data.search && state.data.search.query.toLowerCase(),
    type: state.data.search && state.data.search.type.toLowerCase(),
    allVideos: state.data.allVideos
  }
}

const mapDispatchToProps = dispatch => ({
  search: (query, type, videos) => dispatch(search(query, type, videos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)
