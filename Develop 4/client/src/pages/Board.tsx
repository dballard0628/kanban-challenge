import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { retrieveTickets, deleteTicket } from '../api/ticketAPI';
import ErrorPage from './ErrorPage';
import Swimlane from '../components/Swimlane';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

import auth from '../utils/auth';

const boardStates = ['Todo', 'In Progress', 'Done'];

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const loggedIn = auth.loggedIn() !== undefined; // Check if it returns a defined value
    setIsLoggedIn(loggedIn);

    if (loggedIn) {
      retrieveTickets()
        .then(setTickets)
        .catch(err => {
          console.error('Failed to retrieve tickets:', err);
          setError(true);
        });
    }
  }, []);

  const deleteIndvTicket = async (ticketId: number): Promise<ApiMessage> => {
    try {
      const data = await deleteTicket(ticketId);
      const updatedTickets = await retrieveTickets();
      setTickets(updatedTickets);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className='login-notice'>
          <h1>Login to create & view tickets</h1>
        </div>
      ) : (
        <div className='board'>
          <button type='button' id='create-ticket-link'>
            <Link to='/create'>New Ticket</Link>
          </button>
          <div className='board-display'>
            {boardStates.map(status => {
              const filteredTickets = tickets.filter(ticket => ticket.status === status);
      return (
        <Swimlane
          title={status}
          key={status}
          tickets={filteredTickets}
          deleteTicket={deleteIndvTicket}
          // className={`swimlane ${statusClass}`} // Pass correct className
        />
      );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
