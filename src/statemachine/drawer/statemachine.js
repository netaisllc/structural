import { Machine } from 'xstate';
import { closed, open } from './actions';

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
      closed: closed,
      open: open,
    },
  },
);
