import React from "react";
import { Score, School, Chooseyear, Light, APCSScore } from "./item";
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
          <APCSScore
            name="APCS觀念題"
            subject="concept"
            className={style.obj}
          />
          <APCSScore
            name="APCS實作題"
            subject="implement"
            className={style.obj}
          />
        </form>
      </div>
      <School
        className={style.Sele}
        button_className={style.school_submitbutton}
        choose_school_className={style.choose_school}
      ></School>

      {/* <h1 className={style.title}>選擇要查詢科系</h1>
      <label htmlFor="school">選擇學校：</label>
      <School className={style.Sele} name="school" />
      <br />
      <label htmlFor="major">選擇系所：</label>
      <School className={style.Sele} name="major" />
      <br /> */}

      {/* <ol className={style.choose_school} id="choose_school">
        <li id="nothing">nothing</li>
      </ol> */}

      {/* <School_submitbutton className={style.school_submitbutton} /> */}

      <h1 className={style.title}>參考年度（複選）</h1>
      <Chooseyear max_year="113" className={style.Chooseyear} />

      <br />

      <div>
        <h1 className={style.title}>自訂危險程度</h1>
        <form action="">
          <Light name="紅燈" color="red" className={style.red_light} />
          <Light name="黃燈" color="yellow" className={style.yellow_light} />
          {/* or 綠燈<=黃燈標準<=紅燈 */}
          <Light name="綠燈" color="green" className={style.green_light} />
        </form>
      </div>

      <button className={style.result_submitbutton}>提交！</button>
    </>
  );
};

export default GSAT;
