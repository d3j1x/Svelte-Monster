<script>
    import First from '$lib/018/firstComponent.svelte';

    let selectedBreed;
    const breeds = ['affenpinscher','african','airedale'];

    let imageSrc;
    let hasError = false;
    let isFetching = false;

    $: fetchDogImage(selectedBreed);

    $: promise = getRandomDogImage(selectedBreed);


    function fetchDogImage(breed){
            
        hasError = false;
        isFetching = true;
        imageSrc = '';
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then((response) => response.json())
            .then((obj) => { imageSrc = obj.message })
            .catch(error => {
                hasError = true;
            })
            .finally(() => {isFetching = false;})
            ;
    }

    /* async function fetchDogImageUsingAwait(breed){
        try {
            hasError = false;
            isFetching = true;
            imageSrc = '';
            const obj = await getRandomDogImage(breed);    
            imageSrc = obj.message;
        } catch (error) {
            hasError = true;
        } finally {
            isFetching = false;
        }
    }*/

    async function getRandomDogImage(breed) {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const obj = response.json();
        return obj;
    }
</script>



<h4 style="text-align: center;color:blue">
    # # # await # # #
</h4>


<select bind:value={selectedBreed}>
    {#each breeds as breed}
        <option value={breed}>{breed}</option>
    {/each}
</select>

Selected Breed: {selectedBreed}

<hr/>




{#if hasError}
    Oops something wrong.
{:else if isFetching}
    loading ...
{:else}
    <h5 style="text-align: center;color:red">
    # # # Basic Api # # #
    </h5>
    <img src={imageSrc} alt="Dog" />
{/if} 

<hr/>




<hr/>
<h5 style="text-align: center;color:red">
    # # # Await Api # # #
</h5>

<!--
    {#await getRandomDogImage(selectedBreed)}
     loading
    {:then obj}
      <img src={obj.message} alt="Dog" />
    {:catch}
     Oops something wrong.
    {/await}
-->
{#await promise}
    loading
{:then {message}}
    <img src={message} alt="Dog" />
{:catch error}
    Oops something wrong.
{/await}
<!--
    {#await promise then {message}}
        <img src={message} alt="Dog" />
    {:catch error}
        Oops something wrong.
    {/await}
-->



<hr/>
<First />


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>