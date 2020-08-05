// Routable views
export const views = {
  initial: 'home',
  states: {
    block: {
      entry: ['loadBlock'],
      on: {
        GALLERY: 'gallery',
        HOME: 'home',
        LIST: 'list',
      },
    },
    gallery: {
      entry: ['loadGallery'],
      on: {
        BLOCK: 'block',
        HOME: 'home',
        LIST: 'list',
      },
    },
    home: {
      entry: ['loadHome'],
      on: {
        BLOCK: 'block',
        GALLERY: 'gallery',
        LIST: 'list',
      },
    },
    list: {
      entry: ['loadList'],
      on: {
        BLOCK: 'block',
        GALLERY: 'gallery',
        HOME: 'home',
      },
    },
  },
};
