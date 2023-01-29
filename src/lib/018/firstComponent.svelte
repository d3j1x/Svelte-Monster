<script>
     let selectedBreed;
     const breeds = ['affenpinscher','african','airedale'];

     let imageSrc;
     let hasError = false;
     let isFetching = false;

    $: fetchDogImageUsingAwait(selectedBreed);



    

    async function fetchDogImageUsingAwait(breed){
        try {
            hasError = false;
            isFetching = true;
            imageSrc = '';
            //const obj = await getRandomDogImage(breed);    
            //imageSrc = obj.message;
            const { message } = await getRandomDogImage(breed);
            imageSrc = message;
        } catch (error) {
            hasError = true;
            console.log(imageSrc);
        } finally {
            isFetching = false;
        }
    }

    async function getRandomDogImage(breed) {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const obj = response.json();
        return obj;
    }
</script>



<h4 style="text-align: center;color:blue">
    # # #Component await # # #
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
    # # # Await Component Api # # #
    </h5>
    <img src={imageSrc} alt="Dog" />
{/if} 

<hr/>




