import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from'../Column/Column.js';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    background: PropTypes.node.isRequired,
    
  }
  static defaultProps = {
    description: settings.defaultListDescription,
}
  render() {
    return (
      <section className={styles.component}>
          <Hero titleText={this.props.title}
                background={this.props.background} />
          <div className={styles.description}>
            {this.props.description}
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
