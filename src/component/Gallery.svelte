<script>
  import { fade } from "svelte/transition";
</script>

<style>
  section {
    align-items: center;
    background-color: orange;
    color: #000;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }

  div {
    font-size: 42pt;
    text-align: center;
  }
</style>

<section in:fade>
  <div>GALLERY</div>
</section>
