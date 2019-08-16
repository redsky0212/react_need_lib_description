import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class router_ex extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/router_ex/1">첫번째화면</Link>
                <Link to="/router_ex/2">두번째화면</Link>
                <Route exact path="/router_ex/1" component={} />
            </div>
        );
    }
}

router_ex.propTypes = propTypes;
router_ex.defaultProps = defaultProps;

export default router_ex;