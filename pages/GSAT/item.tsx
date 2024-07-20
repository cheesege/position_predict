const Item = ({ name, subject }) => {
  return (
    <div>
      <label htmlFor="">{name}級分：</label>
      <input
        type="number"
        name={subject}
        id={subject}
        min="0"
        max="15"
        defaultValue={0}
      />
    </div>
  );
};
export default Item;
