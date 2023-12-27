import styled from "styled-components"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"
import dayjs from "dayjs"

export default function ProximosDias({ nextDaysData, isChecked, isDarkMode }) {
    return (
        <ScreenContainer isDarkMode={isDarkMode}>
            <LineChart
                data={isChecked? nextDaysData?.map((item) => ({ ...item, Temperatura: (item.Temperatura * 1.8 + 32).toFixed(0)})) : nextDaysData}
                width={1150}
                height={500}
                margin={{ top: 30, right: 10, left: 30, bottom: 10 }}
                background="#000"
            >
                <Line
                    type="monotone"
                    dataKey="Temperatura"
                    stroke={isDarkMode? "rgb(102, 82, 253)" : "rgb(77,68,148)"}
                />
                <CartesianGrid
                    stroke={isDarkMode? "#efefef" : "#000"}
                    strokeDasharray="3 3"
                />
                <XAxis
                    stroke={isDarkMode? "#fff" : "#000"}
                    type="category"
                    dataKey="Dia"
                    tickFormatter={(value) => `${(dayjs(value).format("DD/MM"))}`} 
                />
                <YAxis
                    stroke={isDarkMode? "#fff" : "#000"}
                    type="number"
                    dataKey={"Temperatura"}
                    tickFormatter={isChecked ? (value) => `${(value)}º F` : (value) => `${(value)}º C`}
                    tickCount={8}
                    domain={isChecked ? [20, 120] : [0, 45]}
                />
                <Tooltip
                    formatter={(value) => `${(value)}º C`}
                />
            </LineChart>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" };
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    margin: 10px 0px;
    @media (max-width: 1200px) {
        padding: 0px 20px 0px 60px;
        overflow-x: scroll;
        overflow-y: scroll;
    }
    @media (max-width: 992px) {
        padding: 0px 20px 0px 300px;
    }
    @media (max-width: 768px) {
        padding: 0px 20px 0px 550px;
    }
    @media (max-width: 480px) {
        padding: 0px 20px 0px 650px;
    }
`