<script>
    	import Example from '$lib/055/Example.svelte';
    	import Result from '$lib/055/Result.svelte';
       
    </script>
    
    <h1>Reusing event listeners with Svelte Actions 4</h1>
    <hr />
    
    <p>
        #SeCReT# Is UP DOWN UP DOWN LEFT RIGHT LEFT RIGHT.
    </p>
    
    <div style="display: flex; gap:10px;">
        
        <div>
            example
            <Example />
        </div>
        
    
        
        <div>
            result
            <Result />		
        </div>
        
    
    </div>
    
    <style>
        :global(input) {
            width: 100%;
        }
    </style>