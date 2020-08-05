import { Machine } from 'xstate';
import { drawer } from '../store/stores';
import { stateMachine } from '../statemachine/app';

export default Machine(
  {
    id: 'Drawer',
    initial: 'open',
    states: {
      closed: {
        entry: ['closed'],
        on: {
          DRAWER_ACTION: 'open',
          DRAWER_OPEN: 'open',
        },
      },
      open: {
        entry: ['open'],
        on: {
          DRAWER_ACTION: 'closed',
          DRAWER_CLOSE: 'closed',
          KEY_ESCAPE: 'closed',
        },
      },
    },
  },
  {
    actions: {
      closed: (context, event) => {
        drawer.set('closed');
        stateMachine.send({ type: 'DRAWER_CLOSE' });
      },
      open: (context, event) => {
        drawer.set('open');
        stateMachine.send({ type: 'DRAWER_OPEN' });
      },
    },
  },
);
