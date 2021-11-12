<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	export let profileId: number;
</script>

<div class="profile-image">
	<img
		class="image"
		src={`http://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/img/profileicon/${profileId}.png`}
		alt={`${profileId}`}
	/>
</div>

<style>
	.profile-image {
		width: 100px;
		height: 100px;
		overflow: hidden;
	}
	.image {
		width: 100%;
		height: 100%;
	}
</style>
