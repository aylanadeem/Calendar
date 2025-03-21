import React, { useState } from "react";
import { DayPilot, DayPilotMonth } from "@daypilot/daypilot-lite-react";

const MonthlyCalendar = () => {
  const [startDate] = useState("2024-02-01"); 
  const [calendar, setCalendar] = useState(null);

  const events = [
    {
      id: "1",
      start: "2024-02-01T13:45:00",
      end: "2024-02-01T14:00:00",
      text: "Electricity Shutdown for Maintenance",
      barStyle: "background-color: #e0e0e0; color: #333333; font-size: 12px; font-weight: bold; padding: 10px; border-radius: 5px;" // Inline style for the event bar
    },
  ];

  return (
    <div className="bg-white m-5 p-5 shadow-lg rounded-3xl">
      <div className="text-start text-lg font-semibold text-black mb-4">
        February 2024
      </div>

      
      <div className="border rounded">
        <DayPilotMonth
          startDate={startDate}
          events={events}
          controlRef={setCalendar}
          headerDateFormat="d" 
        />
      </div>
    </div>
  );
};

export default MonthlyCalendar;
