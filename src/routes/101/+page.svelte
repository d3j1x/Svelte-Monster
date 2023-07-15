<script>
    import { fade, blur, fly } from 'svelte/transition';
      import { slide, scale, draw } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
      
  
      let x,y,z,w,b,c,m,f,i = false;
      let key;
      
      import { crossfade  } from 'svelte/transition';
      const [send, receive] = crossfade({
      duration: 1500,
      easing: quintOut
    });
  </script>
  
  <button on:click={() => {x= !x;}}> X</button>
  <button on:click={() => {y= !y;}}> Y</button>
  <button on:click={() => {z= !z;}}> Z</button>
  <button on:click={() => {w= !w;}}>W</button>
  <button on:click={() => {b= !b;}}>B</button>
  <button on:click={() => {c= !c;}}>C</button>
  <button on:click={() => {m= !m;}}>M</button>
  <button on:click={() => {f= !f;}}>F</button>
  <button on:click={() => {i= !i;}}>I</button>
  
  <hr>
  {#if x}
  <div transition:fade>
    <!-- <ShoppingCart /> -->
      <h1>transition: fade</h1>
  </div>
  {/if}
  
  
  {#if y}
  <div in:fade>
     <h1> in: fade</h1>
  </div>
  {/if}
  
  
  {#if z}
  <div in:fade="{{delay: 500, duration: 1000}}">
    <h1> in:fade: delay</h1>
  </div>
  {/if}
  
  
  {#if w}
  <div transition:blur={{ amount: 10 }}> transition:blur fades in and out</div>
  {/if}
  
  
  {#if b}
  <div transition:fly={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}>transition:fly flies in and out</div>
  {/if }
  
  
  {#if c}
        <div transition:slide={{ delay: 500, duration: 600, easing: quintOut, axis: 'x' }}>
      transition:slide  in and out horizontally hello world
    </div>
  {/if}
  
  
  {#if m}
      <div transition:scale={{ duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut }}>
      scales in and out
    </div>
  {/if}
  
  <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
    {#if f}
      <path
        transition:draw={{ duration: 5000, delay: 500, easing: quintOut }}
        d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
        fill="none"
        stroke="cornflowerblue"
        stroke-width="0.1px"
        stroke-linejoin="round"
      />
    {/if}
  </svg>
  
  
  {#if i}
    <h1 in:send={{ key }} out:receive={{ key }}>BIG ELEM</h1>
  {:else}
    <small in:send={{ key }} out:receive={{ key }}>small elem</small>
  {/if}
  
  
  <style>
      button,div {
          font-size:25px;
      }
  </style>
  