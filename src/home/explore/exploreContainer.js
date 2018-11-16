import React from 'react';
import './explore.css'
import { Explore } from './explore';
import { searchByType } from '../../actions';
import { connect } from 'react-redux';
class ExploreContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sectionsArray: [{href: "/dunking", title: "Dunking", src: require("../../Assets/dunk.jpg")}, {href: "/shooting", title: "Shooting", src: require("../../Assets/shooting_backyard.jpg")}, {href: "/dribbling", title: "Dribbling", src: require("../../Assets/afterhours_practice.jpg")}]
    };
  }
  render() {
    console.log(this.props.searchByType)
    return (
      <Explore searchByType={this.props.searchByType} sectionsArray={[...this.state.sectionsArray]}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchByType: (type) => dispatch(searchByType(type)),
});
export default connect(null, mapDispatchToProps)(ExploreContainer)
