"use client";

import { Input, Select, Space } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface ISelectFieldProps {
  name: string;

  size?: "large" | "small";
  value?: string | string[] | undefined;
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  label?: string;
  defaultvalue: any;
}

const FormSelectField = ({
  name,
  size,
  options,
  placeholder,
  value,
  label,
  defaultvalue,
}: ISelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      <div
        style={{
          margin: "3px 0",
        }}
      >
        {label ? label : null}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            defaultValue={defaultvalue}
            style={{ width: "100%" }}
            onChange={onChange}
            options={options}
            value={value}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
