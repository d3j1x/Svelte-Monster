<script>
    import First from '$lib/007/firstComponent.svelte';
    import Second from '$lib/007/secondComponent.svelte';

    function onSkillPointChanged(newSkillPoint) {
        console.log('onSkillPointChanged', newSkillPoint);
    }

    //B   Second Component
    function onSkillPointChangedB(event) {
        console.log('onSkillPointChangedB:',event);
        console.log('onSkillPointChangedB:',event.detail);
    }

</script>




<h4 style="text-align: center;color:blue">Component events</h4>

<First 
    name ="lihatan"
    status ="Learning Svelte"

    {onSkillPointChanged}
/>

<First 
    name ="me again"
    status ="Learning Component events"

/>

<hr />
<Second 
    name ="next"
    status ="Learning next"
    on:skillPointChangedB={onSkillPointChangedB}
/>

<Second 
    name ="me again next"
    status ="Learning Component events dispatch"

/>


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>