<script>
    export let name;
    export let status;

    //export let onSkillPointChanged;
    export let onSkillPointChanged = () => {};

    let skillPoint =5;

    $: onSkillPointChanged(skillPoint);

    function decrementSkillPoint() {

        if (skillPoint > 0){
            skillPoint --;
        }
        //onSkillPointChanged(skillPoint);
    }

    function incrementSkillPoint() {
        skillPoint ++;
        //onSkillPointChanged(skillPoint);
    }
</script>

<section>
    <h4 style="text-align: center;color:blue">First Component</h4>

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