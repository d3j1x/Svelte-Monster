<script>
    import First from '$lib/006/firstComponent.svelte';
    let name = 'world';
    const obj ={
        name: 'Shiheb',
        email: 'lihau@lihau.com'
    }
    const target = {
        ...obj
    }

</script>

<h4 style="text-align: center;color:blue">Component and props</h4>
<h1>Hello {name}!</h1>

<hr/>
<First name={name}/>
<First {name}/>
<First name="haha"/>
<First />
<First name={obj.name} email={obj.email}/>
<First {...obj} />

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>