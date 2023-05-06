<script>
    import { onMount } from "svelte";

	let num = 1;

    let checked = true;



    // What if Svelte action does not exists?

    let button;

    $: increment = num;

    onMount(() => {
        let count =0;
        
        updateText();

        function onClick() {
            
			count += increment;
			updateText();
		}

        function updateText() {
			button.innerHTML = count;
		}

        button.addEventListener('click', onClick);
        return () => {
            button.removeEventListener('click', onClick);
        }
    })

    // What if Svelte action does not exists?



	function counter(element, increment = 1) {
		let count = 0;
		updateText();
		
		function updateText() {
			element.innerHTML = count;
		}
		function onClick() {
			count += increment;
			updateText();
		}
		
		element.addEventListener('click', onClick);
		return {
			update(newIncrement) {
				increment = newIncrement;
			},
			destroy() {
				element.removeEventListener('click', onClick);
			}
		}
	}
</script>

<label><input type="checkbox" bind:checked={checked}>Show Button</label>

<h1>Svelte action</h1>
<hr />

<input type="number" bind:value={num} />

{#if checked}
<button use:counter={num} />
{/if}

<hr />
<h1>What if Svelte action does not exists?</h1>
<button bind:this={button} />

