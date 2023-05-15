import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticket from '../../services/ticketApi.js';

export default function useCreateTicket() {
  const token = useToken();

  const {
    loading: createTicketLoading,
    error: createTicketError,
    act: createTicket,
  } = useAsync((data) => ticket.postTickets(data, token), false);

  return {
    createTicketLoading,
    createTicketError,
    createTicket,
  };
}
