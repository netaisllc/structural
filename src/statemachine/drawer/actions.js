import { drawer } from '../../store/stores';
import { stateMachine } from '../app';

export const closed = (context, event) => {
  drawer.set('closed');
  stateMachine.send({ type: 'DRAWER_CLOSE' });
};

export const open = (context, event) => {
  drawer.set('open');
  stateMachine.send({ type: 'DRAWER_OPEN' });
};
