import { differenceInYears, format, formatDistance } from "date-fns";
import {ru} from 'date-fns/locale';


const result = formatDistance(
  new Date(2016, 7, 1),
  new Date(2015, 0, 1),
  {locale: ru} // Pass the locale as an option
)


console.log(result, differenceInYears, format)