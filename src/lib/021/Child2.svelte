<script>
    import { getContext } from 'svelte';

    const colorObj = getContext('color');

    const color = colorObj.color;

    const onClick = getContext('click');
</script>

<div style="color: {color};">
    Child 2 {color}
    <button on:click={onClick}>Click Me</button>
</div>