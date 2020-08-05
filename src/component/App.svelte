<script>
  import { page } from "../store/stores";
  import { stateMachine } from "../statemachine/app";

  import Drawer from "./Drawer.svelte";

  // Start application statemachine to invoke long running services
  // and enable client-side routing.
  stateMachine.start();
</script>

<!-- This collaboeates with the $page store to perform client side routing -->
<svelte:component this={$page.component} {...$page.props} />

<!-- Fixutres: common components -->
<Drawer />
