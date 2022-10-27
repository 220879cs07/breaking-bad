import dayjs from 'dayjs';

type Props = {
  date: string;
  format?: string;
  parse?: string;
};

export const formatDate = ({ date, format = 'DD MMM, YYYY', parse = 'DD/MM/YYYY' }: Props) => {
  return dayjs(date, parse).format(format);
};
