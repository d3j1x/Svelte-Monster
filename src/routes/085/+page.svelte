<script>
    let name = 'red';
    </script>
    
    <h1>svelte:head</h1>
    <hr />
    
    <input bind:value={name} />
    
    <div>
        {name}
    </div>
    
    <svelte:head>
        <title>Important {name}</title>
        <meta name="description" content="{name}" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kablammo&display=swap" rel="stylesheet">
        
        {@html `<style>:root {
                --font-color: ${name}
            }
        </style>`}
    </svelte:head>
    
    <style>
        div, input {
            font-family: 'Kablammo', cursive;
            font-size:30px;
            color: var(--font-color);
        }
    </style>