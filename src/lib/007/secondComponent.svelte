<script>
    import {createEventDispatcher} from 'svelte';

    export let name;
    export let status;

    const dispatch = createEventDispatcher();

    let skillPoint =5;

    $: dispatch('skillPointChangedB',skillPoint);
    //$: skillPoint, dispatch('skillPointChangedB')

    function decrementSkillPoint() {

        if (skillPoint > 0){
            skillPoint --;
        }
        
    }

    function incrementSkillPoint() {
        skillPoint ++;
    }
</script>

<section>
    <h4 style="text-align: center;color:blue">Second Component</h4>

    <dl>
        <dt>Names</dt>
        <dd>{name}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
    </dl>

    <button on:click={decrementSkillPoint}>-</button>

    {skillPoint}

    <button on:click={incrementSkillPoint}>+</button>
</section>

<style>
    section{
        padding: 10px;
    }
    dd {
        color: darkmagenta;
    }
</style>