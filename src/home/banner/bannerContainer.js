import React from 'react';
import './banner.css'
import { Banner } from './banner';
import { next, fetchLists } from "../../actions";
import { connect } from 'react-redux';

class BannerContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Banner currentFact={this.props.currentFact} />
    );
  }
}
function mapStateToProps ( state ) {
  return {
    i: state.banner.i,
    currentFact: state.data.factList[state.banner.i],
    factList: state.data.factList
  }
}

const mapDispatchToProps = dispatch => ({
  next: (i) => dispatch(next(i)),
  fetchLists: () => dispatch(fetchLists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer)
