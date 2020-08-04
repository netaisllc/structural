export const running = (context, event) => {
  console.log('-> Transition to state: Running.', event);
};

export const fixtures = {
  initial: 'running',
  states: {
    running: {
      entry: ['running'],
      invoke: [{ id: 'DrawerService', src: 'drawerService', autoForward: true }],
    },
    stopped: {},
  },
};
