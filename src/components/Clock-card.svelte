<script>
  import { onBreak } from "../store.js";
  import { round } from "../store.js";
  import { smallBlind } from "../store.js";
  import { completedRounds } from "../store.js";
  import { running } from "../store.js";

  let inProgress = $running;
  let interval;
  export let inBreak;

  let isPaused;

  let roundTimer = 0.15 * 60; // minutes * 60 -- 15 minutes
  let breakTimer = 0.25 * 60; // minutes * -- 5 minutes
  import { tweened } from "svelte/motion";

  let timer = tweened(roundTimer);

  $: minutes = Math.floor($timer / 60);
  $: seconds = Math.floor($timer - minutes * 60);

  //Functions

  const setTimer = () => {
    if (!!$onBreak) {
      $timer = breakTimer;
      startTimer();
    } else {
      $timer = roundTimer;
      startTimer();
    }
  };

  const startTimer = () => {
    $running = true;
    isPaused = false;

    interval = setInterval(() => {
      if (!!$onBreak) {
        runBreak();
      } else {
        if ($timer > 0) {
          if (!isPaused) {
            $timer--;
          }
        } else if ($timer === 0) {
          clearInterval(interval);

          completedRounds.update((n) => n + 1);
          next();
        }
      }
    }, 1000);
  };

  const next = () => {
    if (
      ($completedRounds === 4 && $round < 5) ||
      ($completedRounds === 8 && $round < 9) ||
      ($completedRounds === 12 && $round < 13)
    ) {
      $onBreak = true;
      setTimer();
    } else {
      $onBreak = false;
      $round += 1;
      increaseBlinds();

      // setTimer();
    }
  };

  const runBreak = () => {
    if ($timer > 0) {
      $timer--;
    } else if ($timer === 0) {
      clearInterval(interval);

      $onBreak = false;
      $round++;
      increaseBlinds();
    }
  };

  const increaseBlinds = () => {
    if ($round < 6) {
      smallBlind.update((n) => n + 100);
      setTimer();
    } else if ($round === 6 || $round > 10) {
      smallBlind.update((n) => n * 2);
      setTimer();
    } else {
      smallBlind.update((n) => n + 1000);
      setTimer();
    }
  };

  const resetTimer = () => {
    clearInterval(interval);
    setTimer();
  };

  const pauseTimer = () => {
    isPaused = true;
    clearInterval(interval);
  };
</script>

<!-- Timer Container-->
<div
  class="flex flex-col justify-center items-center h-full w-4/5 my-5 rounded glass"
>
  <!-- Timer -->
  <div class="flex justify-center w-full text-11xl text-yellow-600 font-bold">
    <span>
      {minutes}:{#if seconds < 10} 0{seconds} {:else} {seconds} {/if}
    </span>
  </div>

  <!-- Buttons -->
  <div class="flex flex-row w-3/6 justify-self-center justify-between ">
    {#if $running && !isPaused}
      <button class="flex justify-center pause btn" on:click={pauseTimer}
        >Pause</button
      >
      <button class="flex start justify-center " on:click={resetTimer}
        >Re-Start</button
      >
    {:else}
      <button class="start w-full" on:click={startTimer}>Start</button>
    {/if}
  </div>
</div>

<style>
</style>
