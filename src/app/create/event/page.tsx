import React from "react";
import EventForm from "@/components/Forms/EventForm/EventForm";

export default function page() {
  return (
    <div className="innerContainer flex flex-1 justify-between gap-x-6 pt-20">
      <EventForm />
      <div className="max-w-lg w-full primaryFormBg " />
    </div>
  );
}
