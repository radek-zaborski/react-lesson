import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from'../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    background: PropTypes.node.isRequired,
    
  }
  static defaultProps = {
  children: <p>I can do all the things!!!</p>,
}
  render() {
    return (
      <section className={styles.component}>
          <Hero titleText={this.props.title}
                background={this.props.background} />
          <div className={styles.description}>
            {this.props.children}
          </div>
    <div className={styles.columns}>
    <Column col={'Animals'} />
    <Column col={'Plants'} />
    <Column col={'Minerals'} />
    </div>
      </section>
    )
  }
}

export default List;
