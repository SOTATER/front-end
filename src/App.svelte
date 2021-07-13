<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';

  import { Search } from './components/search';
  import { Main } from './components/main';

  export const url = '';
</script>

<Router {url}>
  <div>
    <Route path="/"><Search name="world" /></Route>
    <Route path="summoner/:id" component={Main} />
  </div>
</Router>
