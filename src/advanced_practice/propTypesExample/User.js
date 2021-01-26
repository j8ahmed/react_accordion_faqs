import React from 'react'
// import PropTypes from 'prop-types';

const User = ({ name, salary, job }) => {
    let style= {padding:'10px', margin:'1rem', width:'100px', background:'#ccc', borderRadius:'10px'}
    return (
        <React.Fragment>
            <div style={style}>
                <h4>{name || 'Default Name'}</h4>
                <p>{job || 'No job listed'}</p>
                <p>{salary || 0}</p>
            </div>
        </React.Fragment>
    )
}

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     salary: PropTypes.number.isRequired,
//     job: PropTypes.string.isRequired
// };

// User.defaultProps = {
//     name: 'John Smith',
//     salary: 0,
//     job: 'unemployed'
// };

export default User
