import NavbarItem from "./navItem";
import styles from "../styles/navbar.module.css"

const Navbar = () => {
    return(
        <div className="">
            <NavbarItem name="主頁" url="/"/>
            <NavbarItem name="學測" url="/first"/>
            <NavbarItem name="分科" url="/second"/>
            <NavbarItem name="關於開發者" url="/about"/>
        </div>
    )
}

export default Navbar