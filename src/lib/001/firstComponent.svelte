<script>
    let name = 'Shiheb';
</script>

<h1>My First Component 001</h1>

<p>Hello  {name}</p>

<div class="links">
    <a href="/">HOME</a>
</div>





<style>
    h1{
        color: darkblue;
        animation: zoom 5s infinite;
    }
    p{
        font-size: 44px;
    }
    :global(.links){
        text-align: right;
    }
    @keyframes zoom {
        0%, 100% {transform: scale(3);}
        50% {transform: scale(0.5);}
    }
</style>


