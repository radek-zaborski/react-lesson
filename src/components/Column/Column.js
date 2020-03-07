import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    render() {
      
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    {this.props.colFirst}
                    {this.props.colSecond}
                    {this.props.colThird}
                </h3>
            
            </section>
        )
    }
}

Column.propTypes = {
    
    colFirst: PropTypes.string.isRequired,
    colSecond: PropTypes.string.isRequired,
    colThird: PropTypes.string.isRequired,
};

export default Column;