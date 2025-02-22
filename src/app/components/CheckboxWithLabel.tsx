import React, { useState } from "react";

interface CheckboxWithLabelProps {
  label: string;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  initialChecked = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="flex flex-row justify-center items-center space-x-2 cursor-pointer group transition-all duration-300">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="w-5 h-5 appearance-none border-2 border-gray-300 rounded-xl checked:border-[#627991] checked:bg-[#627991] focus:outline-none focus:ring-2 focus:ring-[#627991] relative cursor-pointer transition-all duration-200
        before:content-[''] before:absolute before:inset-0 before:m-auto before:w-2 before:h-4 before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:scale-0 checked:before:scale-100 checked:before:transition-transform checked:before:duration-300"
      />
      <span className="text-[#627991] transition-all duration-300 group-hover:text-[#4a5c6e] group-checked:text-[#627991] group-checked:scale-110">
        {label}
      </span>
    </label>
  );
};

export default CheckboxWithLabel;
