import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TicketContextProvider from './context/TicketContextProvider.tsx'

import './index.css'

import './fonts/static/Inconsolata-Regular.ttf';
import './fonts/static/Inconsolata-Medium.ttf';
import './fonts/static/Inconsolata-Bold.ttf';
import './fonts/static/Inconsolata-ExtraBold.ttf';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TicketContextProvider>
      <App />
    </TicketContextProvider>
  </StrictMode>,
)
