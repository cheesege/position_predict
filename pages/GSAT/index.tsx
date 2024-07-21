import React from "react";
import { Score, School, Chooseyear, Light } from "./item";
import style from "../../styles/GSATitem.module.css";
const GSAT = () => {
  return (
    <>
      <div>
        <h1 className={style.title}>請輸入成績 </h1>
        <form action="">
          <Score name="國文" subject="chinese" className={style.obj} />
          <Score name="英文" subject="english" className={style.obj} />
          <Score name="數A " subject="mathA" className={style.obj} />
          <Score name="數B " subject="mathB" className={style.obj} />
          <Score name="自然" subject="nature" className={style.obj} />
          <Score name="社會" subject="society" className={style.obj} />
        </form>
      </div>

      <h1 className={style.title}>選擇要查詢科系</h1>
      <label htmlFor="school">選擇學校：</label>
      <School className={style.Sele} />
      <br></br>
      <label htmlFor="major">選擇系所：</label>
      <School className={style.Sele} />

      <h1 className={style.title}>參考年度（複選）</h1>
      <Chooseyear max_year="113" className={style.Chooseyear} />
      <br></br>

      <div>
        <h1 className={style.title}>自訂危險程度</h1>
        <form action="">
          <Light name="紅燈" color="red" className={style.red_light} />
          <Light name="黃燈" color="yellow" className={style.yellow_light} />
          {/* or 綠燈<=黃燈標準<=紅燈 */}
          <Light name="綠燈" color="green" className={style.green_light} />
        </form>
      </div>

      {/* <p className={style.redlight}>紅燈</p> */}
      <button className={style.submitbutton}>提交！</button>
    </>
  );
};

export default GSAT;
