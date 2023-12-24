import styled from "styled-components";
import Menu from "../../components/Menu/Menu"
import { useState } from "react";

export default function Home() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <ScreenContainer>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
            <BoxScreen>
                <BoxTop>
                    <SubMenuScreen>
                        <span>Hoje</span>
                        <span>Próximos Dias</span>
                    </SubMenuScreen>
                    <CityScreen>
                        <h1>Nome da Cidade</h1>
                        <span>Latitude: XX.XX</span>
                        <span>Longitude: XX.XX</span>
                    </CityScreen>
                </BoxTop>
                <BoxMiddle>
                    <InfoScreen>
                        <InfoBox>
                            <h1>Mínima</h1>
                            <span>XXºc</span>
                        </InfoBox>
                        <InfoBox>
                            <h1>Máxima</h1>
                            <span>XXºc</span>
                        </InfoBox>
                        <InfoBox>
                            <h1>Umidade</h1>
                            <span>XX%</span>
                        </InfoBox>
                        <InfoBox>
                            <h1>Velocidade do Vento</h1>
                            <span>XX m/s</span>
                        </InfoBox>
                    </InfoScreen>
                    <RespScreen>
                        <span>Não, você não deve levar um casaquinho.</span>
                    </RespScreen>
                </BoxMiddle>
                <BoxBotton>
                    <TextScreen>
                        <span>Dados Fornecidos pela Open Weather API</span>
                    </TextScreen>
                </BoxBotton>
            </BoxScreen>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const BoxScreen = styled.div`
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const BoxTop = styled.div`
    border: 1px solid blue;
`
const BoxMiddle = styled.div`
    border: 1px solid blue;
`
const BoxBotton = styled.div`
    border: 1px solid blue;
`
const SubMenuScreen = styled.div`
    display: flex;
    &>span{
        font-size: 40px;
        margin-top: 50px;
        margin-left: 50px;
    }
`
const CityScreen = styled.div`
    &>h1{
        font-size: 85px;
        font-weight: 400;
        letter-spacing: 3px;
        margin-top: 20px;
        margin-left: 50px;
    }
    &>span{
        font-size: 20px;
        margin: 0 25px;
        margin-left: 55px;
    }
`
const InfoScreen = styled.div`
    border: 1px solid red;
`
const InfoBox = styled.div`
    border: 1px solid red;
`
const RespScreen = styled.div`
    border: 1px solid red;
`
const TextScreen = styled.div`
    border: 1px solid red;
`