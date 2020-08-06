import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  ...rest
}): JSX.Element => {
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
        <select value="" id={name} {...rest}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
