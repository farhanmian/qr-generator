import React from 'react'
import { DatePicker, DatePickerProps } from "antd";
import { RangePickerProps } from 'antd/es/date-picker';

const { RangePicker } = DatePicker;

export default function EventFormVenueDetails() {

  const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', value);
  };

  return (
    <div>
        <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
    </div>
  )
}
