import React from 'react';
import styled from 'styled-components';
import './Hello.css';

function Hello(){
    const StyleButton = styled.button`
        color: red;
        background-color: gray;
    `

    const PracticeStyle = {
        marginTop: '10px',
        backgroundColor: 'blue',
    };
    
    return (
        <StyleButton>
            My Button
        </StyleButton>
    );
}
export default Hello;