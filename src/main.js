import App from './component/App.svelte';

const app = new App({
  target: document.body,
});

// For debugging :)
window.app = app;

export default app;
