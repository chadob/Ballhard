import React from 'react';
import './promo.css'
import { Promo } from './promo';

export class PromoContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Promo href={this.props.promo.href} src={this.props.promo.src} title={this.props.promo.title} subtitle={this.props.promo.subtitle} button={this.props.promo.button}/>
    );
  }
}
