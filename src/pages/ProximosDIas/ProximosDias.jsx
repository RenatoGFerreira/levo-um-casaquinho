import styled from "styled-components"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import dayjs from "dayjs"
import { useEffect, useState } from "react"


export default function ProximosDias({ nextDaysData, isChecked }) {
    const [getWidth, setGetWidth] = useState(innerWidth - 800)
    const { innerWidth: width, innerHeight: height } = window;

    console.log(innerWidth)
    console.log(innerHeight)

    return (
        <ScreenContainer>
            <LineChart
                data={isChecked? nextDaysData?.map((item) => ({ ...item, Temperatura: (item.Temperatura * 1.8 + 32).toFixed(0)})) : nextDaysData}
                width={getWidth}
                height={500}
                margin={{ top: 30, right: 10, left: 30, bottom: 10 }}
            >
                <Line
                    type="monotone"
                    dataKey="Temperatura"
                    stroke="#8884d8"
                />
                <CartesianGrid
                    stroke="#000"
                    strokeDasharray="3 3"
                />
                <XAxis
                    type="category"
                    dataKey="Dia"
                    tickFormatter={(value) => `${(dayjs(value).format("DD/MM"))}`} 
                />
                <YAxis
                    type="number"
                    tickFormatter={isChecked ? (value) => `${(value)}º F` : (value) => `${(value)}º C`} 
                />
                <Tooltip
                    formatter={(value) => `${(value)}º C`}
                />
            </LineChart>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
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