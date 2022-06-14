<script lang="ts">
	let classname = '';
	export { classname as class };
</script>

<ul class={classname}>
	<slot />
</ul>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
