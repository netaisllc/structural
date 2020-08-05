// State machine
export const fixtures = {
  initial: 'running',
  states: {
    running: {
      invoke: [{ id: 'DrawerService', src: 'drawerService', autoForward: true }],
    },
    stopped: {},
  },
};
