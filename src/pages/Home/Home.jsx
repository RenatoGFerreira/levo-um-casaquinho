import Hoje from "../Hoje/Hoje";
import { useState } from "react";

export default function Home(){
    const [showMenu, setShowMenu] = useState(false)

    return (
        <Hoje/>
    )
}