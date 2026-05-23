import React from "react";

function CheckBox(props) {
  const { label, id, ...rest } = props;
  return (
    <div className="mb-3">
      <input
        id={id}
        type="checkbox"
        className="text-sm accent-primary"
        {...rest}
      />
      <label htmlFor={id} className="text-sm text-gray-01 ml-2">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;