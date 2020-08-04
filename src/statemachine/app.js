import { Machine, interpret } from 'xstate';

// State machines
import drawerService from './drawer.js';
import { home, views } from './views.js';
import { fixtures } from './fixture.js';

const stateMachineDefinition = Machine(
  {
    id: 'Application',
    type: 'parallel',
    states: {
      fixtures: fixtures,
      views: views,
    },
  },
  {
    actions: {
      home: home,
    },
    services: {
      drawerService: drawerService,
    },
  },
);

export const stateMachine = interpret(stateMachineDefinition);
