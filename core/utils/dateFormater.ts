import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

export const formatDate = (date: string): string => {
    return moment(date).format('D[/]MM[/]YYYY  hh:mmA'); 
};
