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
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  ) : (
    <select value={value} onChange={onChange}>
      {options.map((item) => {
        return (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        );
      })}
    </select>
  );
}
