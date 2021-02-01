import React from 'react';

import { connect } from 'react-redux';

const Video = ({items}) => {
    return (
        <div>
            <span>Aulas {items.length}</span>
        </div>
    )
};

export default connect(state=>({
    items: state.items,
}))(Video);
