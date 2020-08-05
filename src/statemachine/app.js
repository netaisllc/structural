import { Machine, interpret } from 'xstate';

// State machines
import drawerService from './drawer.js';
import { fixtures } from './fixtures.js';
import { loadBlock, loadGallery, loadHome, loadList, views } from './views.js';

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
      loadBlock,
      loadGallery,
      loadHome,
      loadList,
    },
    services: {
      drawerService: drawerService,
    },
  },
);

export const stateMachine = interpret(stateMachineDefinition);
