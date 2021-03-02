<script>
  let slots = $$props.$$slots;
</script>

<div
  class="justify-center items-center h-full min-w-min p-8 px-20 mx-4 glass text-yellow-400"
>
  {#if slots.small}
    <div class="flex text-3xl justify-center text-yellow-600 font-bold">
      <h2>Small Blind:</h2>
    </div>
    <slot name="small" />
  {/if}
  {#if slots.big}
    <div class="flex text-3xl justify-center text-yellow-600 font-bold">
      Big Blind:
    </div>
    <slot name="big" />
  {/if}
</div>

<section />
