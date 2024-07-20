import NavbarItem from "./navItem";
import styles from "../styles/navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.link}>
                <NavbarItem name="主頁" url="/" className={styles.obj}/>
                <NavbarItem name="學測" url="./GSAT" className={styles.obj}/>
                <NavbarItem name="分科" url="./AST" className={styles.obj}/>
                <NavbarItem name="關於開發者" url="./about" className={styles.obj}/>
            </div>
        </div>
    )
}

export default Navbar