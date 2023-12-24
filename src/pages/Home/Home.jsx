import Menu from "../../components/Menu/Menu"
import { useState } from "react";

export default function Home(){
    const [showMenu, setShowMenu] = useState(false)
    return (
        <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
    )
}