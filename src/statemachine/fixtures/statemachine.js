export const fixtures = {
  initial: 'running',
  states: {
    running: {
      invoke: [{ id: 'DrawerService', src: 'drawer', autoForward: true }],
    },
    stopped: {},
  },
};
