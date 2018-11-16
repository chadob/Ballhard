import React from 'react';
import './home.css'
import { Home } from './home';
import { next } from "../../actions";
import { connect } from 'react-redux';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(prevProps) {
    setInterval(()=>{
      this.props.next(this.props.i);
    }, 10000);
  }
  render() {
    return (
        <Home />
    );
  }
}
function mapStateToProps ( state ) {
  return {
    i: state.banner.i,
  }
}

const mapDispatchToProps = dispatch => ({
  next: (i) => dispatch(next(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
