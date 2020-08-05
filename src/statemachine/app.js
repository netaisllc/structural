import { Machine, interpret } from 'xstate';

// State machines
import drawer from './drawer/statemachine';
import { fixtures } from './fixtures/statemachine';
import { views } from './views/statemachine';
// Actions
import { loadBlock, loadGallery, loadHome, loadList } from './views/actions';

const stateMachineDefinition = Machine(
  {
    id: 'Application',
    type: 'parallel',
    //  Parallel states, FIXTURES handling common generic application features
    // and VIEWS handling the domain-specific, routable pages
    states: {
      fixtures: fixtures,
      views: views,
    },
  },
  {
    // ACTIONS pertain to the routable view
    actions: {
      loadBlock,
      loadGallery,
      loadHome,
      loadList,
    },
    // SERVICES are the long-running machines for the fixtures
    services: {
      drawer: drawer,
    },
  },
);

export const stateMachine = interpret(stateMachineDefinition);
