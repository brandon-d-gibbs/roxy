<script>
  import { round } from "../store.js";
</script>

<!-- {#if round > 0} -->
<div
  class="grow flex-col justify-center items-center h-full min-w-1/4 mx-8 px-6 glass"
>
  <h1 class="text-yellow-600 font-bold">Round</h1>
  <h2 class="text-6xl text-yellow-600 font-bold">{$round}</h2>
</div>
<!-- {/if} -->
