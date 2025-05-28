import './App.css';
import Logo from './components/Logo/logo';
import Registration from './components/Registration/registeration-page';
import TicketGenerated from './components/Ticket/ticket-generated';
import { useTicketContext } from './hooks/useTicketContext';


function App() {
  const { ticketCreated } = useTicketContext();
  return (
    <>
      <Logo classes='logo-header'/>
      {ticketCreated ? <TicketGenerated /> :<Registration />}
    </>
  )
}

export default App
