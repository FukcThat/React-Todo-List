export default function SelectInput({
  value,
  onChange,
  options,
  label = "",
  isForm = true,
}) {
  return isForm ? (
    <div className="todo-form--input-group">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  ) : (
    <select value={value} onChange={onChange}>
      {options.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}
