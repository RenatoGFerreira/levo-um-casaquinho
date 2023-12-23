import React from "react";
import styled from "styled-components";

export default function ToggleSwitch({isChecked, onClick}){
    return(
        <ToggleSwitchWrapper>
            <input type="checkbox" defaultChecked={isChecked} onClick={onClick}/>
            <span />
        </ToggleSwitchWrapper>
    )
}


const ToggleSwitchWrapper = styled.label`
    background: #e9e9ea;
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    input{
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    span{
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background-color: #fff;
        position: absolute;
        left: 0;
        box-shadow: 2px 2px 4px gray;
        transition: 0.25s;
    }
    input:checked + span {
        left: 50%;
        background-color: black;
    }
`
