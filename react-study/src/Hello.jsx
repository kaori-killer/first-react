import React from 'react';
import './Hello.css';

function Hello(){
    const PracticeStyle = {
        marginTop: '10px',
        backgroundColor: 'blue',
    };
    return (
        <>
            <div className="practiceStyle">Hello Wolrd!</div>
            <div className="practiceStyle">Hello Wolrd!</div>
            <div className="practiceStyle">Hello Wolrd!</div>
        </>
        );
}
export default Hello;