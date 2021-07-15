<script lang="ts">
  import Router from 'svelte-spa-router';
  import { Search } from './components/search';
  import { Main } from './components/main';

  export const url = '';
</script>

<Router
  routes={{
    '/': Search,
    '/summoner/:id': Main,
  }}
/>
