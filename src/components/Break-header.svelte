<script>
  import { round } from "../store.js";
</script>

<section
  class="flex flex-col jufify-center items-center w-4/5 h-full p-4 mt-4 glass"
>
  <h1 class="text-8xl">On Break</h1>
  {#if $round >= 4 && $round < 8}
    <p class="text-yellow-600 text-3xl">
      This is your last chance to Add-On or Buy-In / Rebuy
    </p>
  {/if}
</section>
