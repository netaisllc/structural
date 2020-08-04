import { page } from '../store/stores';

// State machine
export const views = {
  initial: 'home',
  states: {
    home: {
      entry: ['home'],
      on: {
        LIST: 'list',
        MAP: 'map',
        NOTES: 'notes',
      },
    },
  },
};

// View helpers
export const home = async (context, event) => {
  console.log('-> Transition to state: Home.', event);
  let module = await import('../component/Hub.svelte');
  page.set({
    component: module.default,
    name: 'home',
    props: {},
  });
};
