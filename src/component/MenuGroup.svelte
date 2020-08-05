<script>
  import { drawer } from "../store/stores.js";
  import MenuItem from "./MenuItem.svelte";
</script>

<style>
  .menu-group {
    border-bottom: 1px solid #e9e9e9;
    padding: 1rem 0;
  }
</style>

<section>
  <div class=" menu-group">
    <MenuItem icon="home" name="Home" view="home" />
    <MenuItem icon="list" name="List" view="list" />
    <MenuItem icon="book" name="Block" view="block" />
    <MenuItem icon="feedback" name="Gallery" view="gallery" />
  </div>
</section>
