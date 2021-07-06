<script>
  import { HeaderTitle } from './components/headers';
  import { TabList } from './components/tabs';
  import { ApiClient } from './apis/ApiClient';
  //test
  const apiClient = new ApiClient();
  apiClient
    .get('')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
</script>

<main>
  <HeaderTitle />
  <TabList />
</main>

<style>
  main {
    background-color: #f2f2f2;
  }
</style>
