import React from 'react';
import Styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

static propTypes = {
  title: PropTypes.node.isRequired,
}
render() {
  return (
    <section className={Styles.component}>
                
      <h3>{this.props.title}</h3>
                
    </section>
  );
}
}

export default Card;