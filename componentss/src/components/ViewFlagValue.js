import React from 'react';

const ViewFlagValue = (props) => {
    return <p>{props.flag ? '유효':'무효'}</p>
};

export default ViewFlagValue;