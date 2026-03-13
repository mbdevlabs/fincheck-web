import { addMonths, format, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DayPicker, useDayPicker } from "react-day-picker";
import { capitalizeFirstLetter } from "../../app/utils/capitalizeFirstLetter";

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

function CustomCaption({ calendarMonth }: { calendarMonth: { date: Date } }) {
  const { goToMonth } = useDayPicker();

  return (
    <div className="flex items-center justify-between px-1 mb-3">
      <span className="tracking-[-0.408px] text-gray-900 font-medium">
        {capitalizeFirstLetter(
          format(calendarMonth.date, "LLLL yyyy", { locale: ptBR }),
        )}
      </span>
      <div className="flex gap-1">
        <button
          onClick={() => goToMonth(subMonths(calendarMonth.date, 1))}
          className="w-7 h-7 flex items-center justify-center rounded-full text-teal-600 hover:bg-teal-50 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={() => goToMonth(addMonths(calendarMonth.date, 1))}
          className="w-7 h-7 flex items-center justify-center rounded-full text-teal-600 hover:bg-teal-50 transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      hideNavigation
      onSelect={(date) => onChange(date ?? new Date())}
      components={{
        MonthCaption: CustomCaption,
      }}
      classNames={{
        weekday: "uppercase text-xs text-gray-400 font-medium pb-2 text-center",
        day_button:
          "w-9 h-9 rounded-full flex items-center justify-center text-sm text-gray-700 hover:bg-teal-50 cursor-pointer transition-colors",
        today: "font-semibold text-gray-900",
        selected:
          "[&>button]:!bg-teal-700 [&>button]:!text-white [&>button:hover]:!bg-teal-800",
      }}
    />
  );
}
