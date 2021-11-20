<script lang="ts">
	import ProfileImage from '../image/ProfileImage.svelte';
	import { popoverText } from '../tooltip/Tooltip';
	export const profileId = 9;
	export const rank = 'gold';
	export const level = 284;
	const borderImage = 'url(assets/images/profileBorder/' + rank + '.png)';
</script>

<div class="border-image" style="background-image: {borderImage}">
	<ProfileImage {profileId} />
	<span
		use:popoverText={{ text: '레벨' }}
		class="level-text"
		style="background-image: url(assets/images/profileBorder/bg-levelbox.png"
		>{level}
	</span>
</div>

<style>
	.border-image {
		display: flex;
		position: relative;
		width: 120px;
		height: 120px;
		background-position: center bottom;
		background-repeat: no-repeat;
		justify-content: center;
		align-items: center;
	}
	.level-text {
		position: absolute;
		top: 92%;
		left: 50%;
		width: 44px;
		height: 24px;
		color: #eabd56;
		font-size: 14px;
		line-height: 17px;
		background-size: 100%;
		box-sizing: border-box;
		padding-top: 3px;
		margin-top: -14px;
		margin-left: -22px;
		text-align: center;
	}
</style>
