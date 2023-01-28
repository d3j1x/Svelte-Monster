<script>
    let condition1 = true;
    let condition2 = true;
    let condition3 = true;

    function toggleCondition1() {
        condition1 = !condition1;
    }

    function toggleCondition2() {
        condition2 = !condition2;
    }

    function check(condition1, condition2){
        return condition1 || condition2;
    }

</script>

<h4 style="text-align: center;color:blue">
    #if   Block</h4>
<br/>


<button on:click={toggleCondition1}>Condition 1: {condition1}</button>

<button on:click={toggleCondition2}>Condition 2: {condition2}</button>

<br/>

{#if condition1}
    condition 1 is true
{/if}

<br/>

{#if condition2}
    condition 2 is true
{/if}

<br/>
<hr/>

{#if condition1 && condition2}
    condition 1 and 2 is true
{:else if condition1 || condition2}
    condition1 or condition2 is true
{:else}
    condition 1 and 2  is false
{/if}

<br/>
<p>... function ...</p>

{#if condition1 && condition2}
    condition 1 and 2 is true
{:else if check(condition1,condition2)}
    condition1 or condition2 is true from function check
{:else}
    condition 1 and 2  is false
{/if}

<br/>
<p>... nested ...</p>


{#if condition1 && condition2}
    condition 1 and 2 is true
{:else if check(condition1,condition2)}
    
    condition1 or condition2 is true from function
    {#if condition3}
        <br/>
        another content 3 is true
    {/if}

{:else}
    condition 1 and 2  is false
{/if}


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>