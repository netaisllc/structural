import { createRouter } from 'routerjs';
import { stateMachine } from '../statemachine/app';

// Create client-side router
export const router = createRouter()
  // Defined routes
  .get('/', (req, context) => {
    stateMachine.send({ type: 'HOME' });
  })
  .get('/block', (req, context) => {
    stateMachine.send({ type: 'BLOCK' });
  })
  .get('/gallery', (req, context) => {
    stateMachine.send({ type: 'GALLERY' });
  })
  .get('/home', (req, context) => {
    stateMachine.send({ type: 'HOME' });
  })
  .get('/list', (req, context) => {
    stateMachine.send({ type: 'LIST' });
  })
  .run();
