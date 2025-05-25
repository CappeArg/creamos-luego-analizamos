import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d MMMM, yyyy", { locale: es })}
    </time>
  );
};

export default DateFormatter;
