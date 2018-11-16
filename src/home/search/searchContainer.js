import React from 'react';
import './search.css'
import { Search } from './search';
import { searchByType, searchByQuery, fetchSearches, updateSearches } from '../../actions';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {
  constructor (props) {
    super(props);
    this.catsArray = ["Dribbling", "Shooting", "Dunking"],
    this.commonSearchesArray = ["how to dunk", "proper shooting form", "unstoppable crossover"],
    this.state = {
      searchDisplay: "blurred",
      searchParameters: "hidden",
      searchMatches: "hidden",
      searchMatchesList: [],
      currentSearch: ''
    }
    this.findSearchMatch = this.findSearchMatch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  componentWillMount() {
    this.props.fetchSearches()
  }
  onFocus(e) {
    if (this.state.searchMatches === 'hidden') {
      this.setState({'searchParameters': 'shown'})
    }
  }
  onChange (e) {
    this.setState({currentSearch: e.target.value})
    this.findSearchMatch(e.target.value, e);
  }
  search(search, userId) {
    this.props.updateSearches(search, userId);
    this.router.navigate('/')
  }
  findSearchMatch(userSearch, e) {
    let count = 0;
    let arr = []
    for (let i = 0; count < 5 && i < this.props.searches.length; i++) {
      if (this.props.searches[i].indexOf(userSearch) > -1) {
        count++;
        arr.push(this.props.searches[i]);
      }
    }
    // let arr = Object.keys(this.props.searches).filter(search =>
    //   search.indexOf(userSearch) > -1
    // );
    this.setState({"searchMatchesList": arr}, () => {
      if (this.state.currentSearch.length > 0) {
        if (this.state.searchMatchesList &&  this.state.searchMatchesList.length > 0) {
          this.setState({'searchParameters': 'hidden'});
          this.setState({'searchMatches': 'shown'});
        } else {
          this.setState({'searchParameters': 'shown'});
          this.setState({'searchMatches': 'hidden'});
        }
      } else {
        this.setState({'searchParameters': 'shown'});
        this.setState({'searchMatches': 'hidden'});
      }
    })
  }
  render() {
    return (
      <Search
        parent={this.props.parent}
        userId={this.props.userId}
        currentSearch={this.state.currentSearch}
        currentPlaceholder={this.props.imgList[this.props.i].placeholder}
        findSearchMatch = {this.findSearchMatch}
        onFocus = {this.onFocus}
        onChange = {this.onChange}
        updateSearches={this.props.updateSearches}
        searchByQuery={this.props.searchByQuery}
        searchByType={this.props.searchByType}
        searchDisplay={this.state.searchDisplay}
        searchParameters={this.state.searchParameters}
        searchMatches={this.state.searchMatches}
        topSearchesObject={this.props.topSearches}
        catsArray={this.catsArray}
        userSearches={this.props.userSearches}
        searchMatchesList={this.state.searchMatchesList}
      />
    );
  }
}
function mapStateToProps ( state ) {
  return {
    i: state.banner.i,
    imgList: state.data.imgList,
    userId: state.data.user ? state.data.user._id : null,
    searches: state.data.searches ? state.data.searches.map(function (search) {
      return search.name;
    }) : null,
    userSearches: state.data.user ? state.data.user.recentSearches : null
  }
}
const mapDispatchToProps = dispatch => ({
  fetchSearches: () => dispatch(fetchSearches()),
  searchByQuery: (query) => dispatch(searchByQuery(query)),
  searchByType: (type) => dispatch(searchByType(type)),
  updateSearches: (search, userId) => dispatch(updateSearches(search, userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
