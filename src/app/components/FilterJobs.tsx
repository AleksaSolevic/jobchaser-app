"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addFilterWord, removeFilterWord } from "../redux/jobSlice";
import CheckboxWithLabel from "./CheckboxWithLabel";

export default function Counter() {
  const dispatch: AppDispatch = useDispatch();
  const value = useSelector((state: RootState) => state.jobFilter.value);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    dispatch(checked ? addFilterWord(label) : removeFilterWord(label));
  };

  return (
    <>
      <div className="flex flex-row justify-center gap-5">
        <CheckboxWithLabel
          label="Frontend"
          initialChecked={value.includes("Frontend")}
          onChange={(checked) => handleCheckboxChange("Frontend", checked)}
        />
        <CheckboxWithLabel
          label="Backend"
          initialChecked={value.includes("Backend")}
          onChange={(checked) => handleCheckboxChange("Backend", checked)}
        />
        <CheckboxWithLabel
          label="Fullstack"
          initialChecked={value.includes("Fullstack")}
          onChange={(checked) => handleCheckboxChange("Fullstack", checked)}
        />
      </div>
    </>
  );
}
