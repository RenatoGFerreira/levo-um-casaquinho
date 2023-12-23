import styled from "styled-components";
import casaquinho from "../../assets/casaco.png";
import Sol from "../../assets/sol.png"
import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch"

export default function Hoje() {
    const [isChecked, setIsChecked] = useState(false)

    console.log(isChecked)

    const handleCheck = () => {
        setIsChecked((prevState) => !prevState)
    }
    return (
        <ScreenContainer>
            <BoxContainer>
                <BoxTitle>
                    <img src={casaquinho} alt="Casaquinho" />
                    <div>
                        <h1>Levo um casaquinho?</h1>
                    </div>
                </BoxTitle>
                <BoxInput>
                    <StyledForm>
                        <Icone />
                        <StyledInput type="text" placeholder="Procure por uma cidade" />
                    </StyledForm>
                </BoxInput>
                <BoxTemperatura>
                    <div>
                        <img src={Sol} alt="Sol" />
                        <span>31ºC</span>
                    </div>
                    <div>
                        <h1>Céu Aberto</h1>
                    </div>
                    <Barra />
                </BoxTemperatura>
                <BoxDia>
                    <span>12/12/1212</span>
                    <span>Quinta-Feira, 12:12</span>
                </BoxDia>
                <BoxModos>
                    <div>
                        <ToggleSwitch isChecked={isChecked} onClick={handleCheck} />
                        <span>{isChecked ? "ºF" : "ºC"}</span>
                    </div>
                    <div>
                        <ToggleSwitch />
                        <span>Dark Mode</span>
                    </div>
                </BoxModos>
                <BoxTexto>
                    <h1>Criado pro Renato Ferreira. 2023</h1>
                </BoxTexto>
            </BoxContainer>
        </ScreenContainer>
    )
}

export const ScreenContainer = styled.div`
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 5px 5px 5px #cecece ;
    width: 37%; 
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: #fff;
    width: 92%;
    height: 92%;
`
export const BoxTitle = styled.div`
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .2rem;
    &>img{
        background: none;
    }
    &>div{
        background: none;
        display: flex;
        width: 60%;
    }
    &>div>h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 60px;
        background: none;
    }
`
export const BoxInput = styled.div`
    background: none;
    display: flex;
    justify-content: center;
`
export const StyledForm = styled.form`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #efefef;
    margin: 30px 0 25px;
    border-radius: 15px;
`
export const StyledInput = styled.input`
    font-family: 'Poppins', sans-serif;
    background: #efefef;
    width: 85%;
    padding: 10px;
    border-radius: 5px;
    font-size: 24px;
    color: #424243;
    &::placeholder{
        color: #424243;
    }
`
export const Icone = styled(RiSearch2Line)`
    font-size: 25pt;
    font-weight: 100;
    color: #8b9caf;
`
export const BoxTemperatura = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>div{
        background: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        &>img{
            background: none;
        }
        &>span{
            background: none;
            font-size: 70pt;
            color: #ec6e4c;
        }
        &>h1{
            background: none;
            font-size: 30px;
            font-weight: 400;
            letter-spacing: 3px;
        }
    }
`
export const Barra = styled.div`
    border: 2px solid #ededed;
    margin-top: 20px;
    width: 80%;
`
export const BoxDia = styled.div`

    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    &>span{
        background: none;
        font-size: 26px;
        padding: 5px;
    }
`
export const BoxModos = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>div{
        background: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 50%;
        margin: .2rem;
        &>span{
            margin-left: .2rem;
            background: #fff;
            font-size: 26px;
        }
    }   
`

export const BoxTexto = styled.div`
    background: none;
    display: flex;
    justify-content: center;
    &>h1{
        background: none;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 2px;
        margin-bottom: .2rem;
    }
`
