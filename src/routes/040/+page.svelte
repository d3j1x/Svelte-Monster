<script>
    import { onMount } from "svelte";
    import Clock from "$lib/040/Clock";
  
    const clock = new Clock();
  
    onMount(() => {
      let interval = setInterval(() => {
        clock.tick();
      }, 1000);
  
      return () => clearInterval(interval);
    });
  
    let time;
  
    $: {
      time = clock.time;
      console.log('time', time);
    }
  </script>
  
  <h4 style="text-align: center;color:blue">
    # # # Ticking Clock # # #
</h4>


  <p>{time}</p>



<hr />
<div class="links">
    <a href="/">HOME</a>
</div>