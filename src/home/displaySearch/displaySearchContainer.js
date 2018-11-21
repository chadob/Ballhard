import React from 'react';
import './displaySearch.css'
import { DisplaySearch } from './displaySearch';
import { clearVideo, fetchVideo, searchByPreset} from '../../actions'
import { connect } from 'react-redux';

class DisplaySearchContainer extends React.Component {
  constructor (props) {
    super(props);
    this.searchByPreset = this.searchByPreset.bind(this);
  }

  searchByPreset(query, results) {
    this.props.searchByPreset(query, results)
  }
  render() {
    return (
      <DisplaySearch clearVideo={this.props.clearVideo} fetchVideo={this.props.fetchVideo} searchDone={this.props.searchDone} searchByPreset={this.searchByPreset} title={Object.keys(this.props.search)[0]} amount={this.props.search[Object.keys(this.props.search)[0]].length} search={this.props.search}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  clearVideo: () => dispatch(clearVideo()),
  searchByPreset: (query, results) => dispatch(searchByPreset(query, results)),
});
export default connect(null, mapDispatchToProps)(DisplaySearchContainer)
