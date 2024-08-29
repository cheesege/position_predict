import Link from "next/link";
import styles from "../styles/intro.module.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const Intro = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className={styles.first} data-aos-once="true">
        <p>完全自定義的落點分析系統</p>
      </div>

      <div className={styles.center}>
        <div className={styles.arrow}></div>
      </div>

      <div className={styles.space}></div>

      <div
        className={styles.pack}
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <p className={styles.title}>想要學測就上?</p>
        <Link className={styles.link} href="./GSAT">
          HERE!
        </Link>
      </div>

      <div className={styles.space}></div>

      <div
        className={styles.pack}
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <p className={styles.title}>分科戰士？</p>
        <Link className={styles.link} href="./AST">
          HERE!
        </Link>
      </div>

      <div className={styles.space}></div>

      <div
        className={styles.pack}
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <p className={styles.title}>想知道誰寫的或是看看網站原始碼？</p>
        <Link className={styles.link} href="./about">
          Here!
        </Link>
      </div>

      <div className={styles.space}></div>

      {/* 每個網站判斷的標準不一樣？ 由你自己決定贏過多少人才安全 每年考試難度不同？
      <br />
      自己決定參考年度 */}
    </>
  );
};

export default Intro;
