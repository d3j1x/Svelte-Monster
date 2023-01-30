<script>
    import Sample from '$lib/022/Sample.svelte';

    import Input from '$lib/022/Input.svelte';
    import Grandparent from '$lib/022/Grandparent.svelte';

    let value;
</script>

<h4 style="text-align: center;color:blue">
    # # # Intro to Svelte store # # #
</h4>

<h5 style="text-align: center;color:red">
    # Sample Component #
</h5>
<Sample />
<hr />
<h5 style="text-align: center;color:red">
    # Input  Output #
</h5>
<Input />
<Grandparent />

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>