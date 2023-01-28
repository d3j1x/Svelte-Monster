<script>
    import { onMount } from 'svelte';
    let src;

    onMount(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dog.ceo/api/breeds/image/random',{signal})
            .then(response => response.json())
            .then(( {message}) => {src = message});

        return () => {
            controller.abort();
        }
    });
</script>

<img {src} alt="dog" style="width:200px;">