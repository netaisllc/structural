import { createRouter } from 'routerjs';
import { stateMachine } from '../statemachine/app';

// Create client-side router
export const router = createRouter()
  // Defined routes
  .get('/', (req, context) => {
    stateMachine.send('HOME');
  })
  .get('/home', (req, context) => {
    stateMachine.send('HOME');
  })
  .get('/list', (req, context) => {
    stateMachine.send('LIST');
  })
  .get('/block', (req, context) => {
    stateMachine.send('BLOCK');
  })
  .get('/gallery', (req, context) => {
    stateMachine.send('GALLERY');
  })
  .run();
