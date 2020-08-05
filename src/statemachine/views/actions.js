import { page } from '../../store/stores';
import { router } from '../../route/router';

export const loadBlock = async (context, event) => {
  const name = event.type.toLowerCase();
  const module = await import('../../component/Block.svelte');

  page.set({
    component: module.default,
    name: name,
    props: {},
  });

  router.navigate(`/${name}`);
};

export const loadGallery = async (context, event) => {
  const name = event.type.toLowerCase();
  const module = await import('../../component/Gallery.svelte');

  page.set({
    component: module.default,
    name: name,
    props: {},
  });

  router.navigate(`/${name}`);
};

export const loadHome = async (context, event) => {
  const name = 'home';
  const module = await import('../../component/Hub.svelte');

  page.set({
    component: module.default,
    name: name,
    props: {},
  });

  router.navigate(`/${name}`);
};

export const loadList = async (context, event) => {
  const name = event.type.toLowerCase();
  const module = await import('../../component/List.svelte');

  page.set({
    component: module.default,
    name: name,
    props: {},
  });

  router.navigate(`/${name}`);
};
