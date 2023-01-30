<script>
    import { getContext } from 'svelte';

    const colorObj = getContext('color');

    let color = colorObj.color;

    colorObj.listenToColorChange((newColor) => {
        color = newColor;
    });

    const onClick = getContext('click');
</script>

<div style="color: {color};">
    Child 1 {color}
    <button on:click={onClick}>Click Me</button>
    <!--<button on:click={() => onClick(2)}>Click Me +2</button> -->
</div>