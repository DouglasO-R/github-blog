import { format, formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';

export const dateFormat = (date: string) => {
    const dateFormatted = formatDistanceToNow(new Date(date), {
        locale: pt_BR,
        addSuffix: true
    });
    return dateFormatted;
}