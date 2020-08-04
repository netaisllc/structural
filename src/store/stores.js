import { writable } from 'svelte/store';

// True when drawer is open(extended)
export const drawer = writable(false);

// Individal page/component controller
// @component is a Svelte component
// @name is a string description of a page-view
// @props are the properties passed to the component
export const page = writable({
  component: null,
  name: null,
  props: {},
});
