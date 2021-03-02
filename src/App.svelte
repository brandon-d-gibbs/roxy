<script>
  // Imports
  import { round } from "./store.js";
  import { smallBlind } from "./store.js";
  import { completedRounds } from "./store.js";
  import { onBreak } from "./store.js";
  import { running } from "./store.js";

  import Tailwindcss from "./Tailwindcss.svelte";
  import Clock from "./components/Clock-card.svelte";
  import Break from "./components/Break-header.svelte";
  import RoundCard from "./components/Round-card.svelte";
  import Blinds from "./components/Blinds-card.svelte";

  // Variables
  $: currentRound = $round;
  $: big = $smallBlind * 2;
  $: inBreak = $onBreak;

  //Imported  variables

  console.log("main page CR: ", $completedRounds);
  console.log("main page Round: ", $round);
  console.log("main page onBreak ", $onBreak);

  // Functions
</script>

<Tailwindcss />
<main
  class="flex flex-col h-screen w-screen bg-gradient-to-br from-indigo-400 via-indigo-600 to-indigo-400"
>
  <div class="top-row justify-around w-full h-2/5 pt-4 mx-auto">
    {#if !!inBreak}
      <Break />
    {:else}
      <Blinds>
        <span class="text-8xl text-yellow-600 font-bold" slot="small"
          >{$smallBlind}</span
        >
      </Blinds>
      <RoundCard />
      <Blinds>
        <span class="text-8xl text-yellow-600 font-bold" slot="big">{big}</span>
      </Blinds>
    {/if}
  </div>

  <section class="flex w-full h-1/2 justify-center">
    <Clock {currentRound} {$completedRounds} {$running} {$onBreak} />
  </section>
</main>

<style>
</style>
