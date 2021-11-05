import React from "react";
import styled from 'styled-components';

const CollectionButton = styled.button`
    cursor: pointer;
    width: 200px;
    height: 50px;
    border: 1px solid white;
    background-color: black;
    color: white;
    margin: 10px;
    
    &:hover{
        background-color: white;
        color:black;
    }
`

export default CollectionButton;