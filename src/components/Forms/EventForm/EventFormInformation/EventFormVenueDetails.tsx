import React from "react";
import { DatePicker, DatePickerProps, Space } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { IconArrowsDiff } from "@tabler/icons-react";
import CustomCheckbox from "@/components/partials/CustomCheckbox/CustomCheckbox";

const { RangePicker } = DatePicker;

export default function EventFormVenueDetails() {
  const handleCheckboxChange = () => {
  };

  return (
    <div className="flex gap-x-1 text-white">
      <p className="font-bold leading-[0.8] text-white mt-5">When*:</p>
      <div className="ml-[52px] flex flex-col gap-y-[20px]">
        <div className="flex items-center text-white gap-4">
          <DatePicker
            allowClear={false}
            format="DD MMM YYYY"
            defaultValue={dayjs()}
            minDate={dayjs()}
            size="large"
          />
          <IconArrowsDiff />

          <DatePicker
            allowClear={false}
            size="large"
            format="DD MMM YYYY"
            defaultValue={dayjs()}
            minDate={dayjs()}
          />
        </div>
        <CustomCheckbox defaultValue={true} label="All day" inputChange={handleCheckboxChange} />
      </div>
    </div>
  );
}
