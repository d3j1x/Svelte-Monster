<script>
    import Example from '$lib/056/Example.svelte';
    import Example2 from '$lib/056/Example2.svelte';
    import Result2 from '$lib/056/Result2.svelte';
   
</script>

<h1> Creating events using Actions </h1>
<hr />



<div style="display: flex; gap:10px;">
    
    <div>
                <p>
                    example :
                    <br />
            #SeCReT Is# 
                    <br />
                    UP DOWN UP DOWN LEFT RIGHT LEFT RIGHT.
            </p>
        
        <Example />
    </div>
    

    
    <div>
                    <p>
                        example2 :
                        <br />
                        see console log
                    </p>
        
        <Example2 />
    </div>
        
            <div>
                <p>
                    result2 :
                    <br />
                    see console log
                </p>
                <Result2 />	
            </div>
    

</div>

<style>
    :global(input) {
        width: 100%;
    }
</style>