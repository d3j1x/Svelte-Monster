<script>
	import List from '$lib/068/List.svelte';
	import data from '$lib/068/data';
</script>

<h1>Infinite List</h1>
<hr />

<List 
			{...$data}
			key='id'
			let:item={{ download_url, author }}
			on:loadMore={data.fetchMore}
			>
	
<!-- 	<img 
			 style="width:100%"
			 alt="stunning viewtaken by {author}" 
			 src={download_url}> -->
	
	<img 
			 slot="item"
			 style="width:100%"
			 alt="stunning viewtaken by {author}" 
			 src={download_url}>

</List>


<!-- 16:01
 -->
