import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img src={this.props.background}/>
      </header>
    )
  }
}
Hero.propTypes = {
  titleText: PropTypes.node,
  background: PropTypes.string.isRequired,
};
export default Hero;
