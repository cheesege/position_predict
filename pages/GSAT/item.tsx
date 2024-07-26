import React, { useState } from "react";

const Score = ({ name, subject, className, label }) => {
  return (
    <div className={className}>
      <label htmlFor={subject} className={label}>
        {name}級分：
      </label>
      <input
        type="number"
        id={subject}
        name={subject}
        min="0"
        max="15"
        defaultValue={""}
        className="hide-arrows"
        style={{ width: "100px", height: "23px" }}
      />
    </div>
  );
};

const APCSScore = ({ name, subject, className }) => {
  return (
    <div className={className}>
      <label htmlFor={subject}>{name}級分：</label>
      <input
        type="number"
        name={subject}
        id={subject}
        min="0"
        max="5"
        defaultValue={""}
        className="hide-arrows"
      />
    </div>
  );
};

const School = ({ className, button_className, choose_school_className }) => {
  const [SelectedSchool, setSelectedSchool] = useState(""); // todo 填入第一個校系
  const [SelectedMajor, setSelectedMajor] = useState("");

  const handle_new_li_cnClick = function () {
    const ol = document.getElementById("choose_school");
    ol.removeChild(this);
    // console.log(this.textContent);
  };

  const handle_School_submitbutton_onClick = () => {
    const ol = document.getElementById("choose_school");
    if (ol) {
      const new_li = document.createElement("li");
      new_li.textContent = `${SelectedSchool} - ${SelectedMajor}`;
      new_li.onclick = handle_new_li_cnClick;

      for (const i of ol.children) {
        if (i.textContent === new_li.textContent) return;
      }
      ol.appendChild(new_li);
    }
  };

  return (
    //選項先放著
    <>
      <div style={{ margin: "0px 0px 8px 0px" }}>
        <label htmlFor="school">選擇學校：</label>
        <select
          name="school"
          id="school"
          className={className}
          onChange={(e) => {
            setSelectedSchool(e.target.value);
          }}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <br />
      <div style={{ margin: "-20px 0px -8px 0px" }}>
        <label htmlFor="major">選擇系所：</label>
        <select
          name="major"
          id="major"
          className={className}
          onChange={(e) => {
            setSelectedMajor(e.target.value);
          }}
        >
          <option value="saab">Saab</option>
          <option value="volvo">Volvo</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <br />

      <button
        className={button_className}
        onClick={handle_School_submitbutton_onClick}
      >
        確認
      </button>

      <label>(點擊校系即可刪除)</label>
      <ol className={choose_school_className} id="choose_school"></ol>
    </>
  );
};

const Chooseyear = ({ max_year, className }) => {
  const years = [];
  for (let i = parseInt(max_year), cnt = 0; i >= 111; cnt++, i--) {
    years.push(<label htmlFor={i.toString()}>{i}</label>);
    years.push(
      <input
        type="checkbox"
        name={i.toString()}
        id={i.toString()}
        className={className}
      />
    );
    if ((cnt + 1) % 5 == 0) years.push(<br />);
  }
  return years;
};

const Light = ({ name, color, className }) => {
  return (
    <div className={className}>
      <label htmlFor={color}>{name}：</label>
      <input
        id={color}
        type="number"
        name={color}
        min="1"
        defaultValue={""}
        className="hide-arrows"
      />
    </div>
  );
};

export { Score, School, Chooseyear, Light, APCSScore };
