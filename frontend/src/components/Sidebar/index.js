import React from 'react';

import { connect } from 'react-redux';

function toggleLesson(items){
    return {
        type: 'TOGGLE_LESSON'
    }
}

const Sidebar = ({items, dispatch}) => {
    return (
        <aside>
            <strong>{items.length}</strong>
            <ul>
                <button onClick={() => dispatch(toggleLesson())}>Selecionar</button>
            </ul>
        </aside>
    )
}

export default connect(state => ({ items: state.items }))(Sidebar);