import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type UMdatePicker = {
  //   onChange?: (value1: any, value2: any) => void;
  name: string;
  label?: string;
  size: "large" | "small";
  value?: Dayjs;
};

const FormDatePicker = ({
  name,
  label,
  value,
  //   onChange,
  size,
}: UMdatePicker) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    // onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <div className={`flex flex-col  w-full`}>
      <div
        style={{
          margin: "3px 0",
        }}
      >
        {label ? label : null}
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            size={size}
            value={dayjs(field.value) || ""}
            style={{ width: "100%" }}
            onChange={handleOnChange}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
