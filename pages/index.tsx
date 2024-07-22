import Link from "next/link";
import styles from "../styles/intro.module.css"

const intro = () => {
    return (
        <div>  
            <div className={styles.first}>
            <p>完全自定義的落點分析系統</p>
            
            </div>
            <div className={styles.second}>
            
            </div>
            <div className={styles.third}>
                <p>學測就上?</p>
                <Link href="./GSAT">HERE!</Link>
                <p>分科戰士?</p>
                <Link href="./AST">HERE!</Link>
                <p>想知道誰寫的或是看看網站原始碼?</p>
                <Link href="./about">Here!</Link>
            </div>
            每個網站判斷的標準不一樣?
            由你自己決定贏過多少人才安全
            
            每年考試難度不同?
            自己決定參考年度
        </div>
    )
}

export default intro;