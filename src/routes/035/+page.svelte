<script>
    import { writable, derived } from "svelte/store";

    const num = writable(10);
    const num2 = writable(42);

    const newNum = derived(num, (haha) => {return haha * 2});
    const newNum2 = derived([num,num2], ([$num,$num2]) => {return $num * $num2});

    const delayedNum = derived(num, ($num, set) => {
        let timeoutId = setTimeout(() => {
            set($num);
        }, 1000);
        return () => {
            console.log('hi');
            clearTimeout(timeoutId);
        }
        }, 'not set');

        const delayedMultiplication = derived([num, num2], ([$num,$num2], set) => {
        let timeoutId = setTimeout(() => {
            set($num * $num2);
        }, 1000);
        return () => {
            console.log('hi');
            clearTimeout(timeoutId);
        }
        }, 'not set');
</script>



<h4 style="text-align: center;color:blue">
    # # # Derived  Store # # #
</h4>


<input bind:value={$num} type="number" />
<input bind:value={$num2} type="number" />

<div>
    {$num} * 2 = {$newNum}
</div>

<div>
    {$num} * {$num2} = {$newNum2}
</div>

<div>
    delayed: {$delayedNum}  ,  delayedMultip: {$delayedMultiplication}
</div>


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>