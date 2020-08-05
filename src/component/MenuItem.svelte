<script>
  import { page } from "../store/stores.js";
  import { stateMachine } from "../statemachine/app";

  export let icon;
  export let name;
  export let view;

  $: selected = $page.name === view;

  const emit = e => {
    stateMachine.send({ type: view.toUpperCase() });
  };
</script>

<style>
  .item {
    border-radius: 2.4rem;
    color: #686868;
    display: flex;
    font-size: 12pt;
    height: 4.8rem;
    margin: 0 1.6rem 0.8rem 1.6rem;
    padding: 0 0.8rem 0 2.4rem;
    transition: all 300ms ease-in-out;
    width: 25.6rempx;
  }

  .item.selected,
  .item.selected:hover {
    background-color: #484848;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
  }

  .item:hover {
    background-color: #cacaca;
    color: #111;
    cursor: pointer;
  }

  .item i {
    height: 2.4rem;
    margin-right: 2rem;
    width: 2.4rem;
  }

  .item,
  .item i {
    line-height: 4.8rem;
  }
</style>

<div class="item" class:selected on:click={emit}>
  <i class="material-icons">{icon}</i>
  <span>{name}</span>
</div>
