import { Machine } from 'xstate';
import { drawer } from '../store/stores';

export default Machine(
  {
    id: 'Drawer',
    initial: 'starting',
    states: {
      starting: {
        entry: ['activated'],
        after: {
          10: 'open',
        },
      },
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
      activated: (context, event) => {
        console.log('-> Activated: Drawer service.');
      },
      closed: (context, event) => {
        drawer.set('closed');
        // Guard: no stm
        event.stm
          ? event.stm.send({
              type: 'DRAWER_CLOSE',
              stm: event.stm,
            })
          : null;

        console.log('-> Drawer is closed.');
      },
      open: (context, event) => {
        drawer.set('open');
        // Guard: no stm
        event.stm
          ? event.stm.send({
              type: 'DRAWER_OPEN',
              stm: event.stm,
            })
          : null;

        console.log('-> Drawer is open.');
      },
    },
  },
);
