const Score = ({ name, subject, className }) => {
  return (
    <div className={className}>
      <label htmlFor="">{name}級分：</label>
      <input
        type="number"
        name={subject}
        id={subject}
        min="0"
        max="15"
        defaultValue={""}
        className="hide-arrows"
      />
    </div>
  );
};

const School = ({ className }) => {
  return (
    //選項先放著
    <select name="cars" id="cars" className={className}>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
};

const Chooseyear = ({ max_year, className }) => {
  const years = [];
  for (let i = parseInt(max_year), cnt = 0; i >= 111; cnt++, i--) {
    years.push(<label htmlFor="">{i}</label>);
    years.push(
      <input type="checkbox" name={i.toString()} className={className} />
    );
    if ((cnt + 1) % 5 == 0) years.push(<br></br>);
  }
  return years;
};

const Light = ({ name, color, className }) => {
  return (
    <div className={className}>
      <label htmlFor="" id={color}>
        {name}：
      </label>
      <input
        type="number"
        name={color}
        min="1"
        defaultValue={""}
        className="hide-arrows"
      />
    </div>
  );
};

export { Score, School, Chooseyear, Light };
