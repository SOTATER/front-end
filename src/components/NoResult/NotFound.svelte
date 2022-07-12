<script lang="ts">
	import { pop } from 'svelte-spa-router';
</script>

<div class="not-found">
	<div class="title">다시 한번 확인해 주세요!</div>
	<div class="description">
		{`지금 입력하신 주소의 페이지는 사라졌거나 \n다른 페이지로 변경되었습니다. \n주소를 다시 확인해주세요.`}
	</div>
	<div class="logo">
		<img src="assets/images/404.png" alt="404" />
	</div>
	<div class="actions"><button on:click={pop}>이전 페이지</button><a href="/">홈</a></div>
</div>

<style>
	.not-found {
		width: 380px;
		margin: 104px auto 50px;
		padding-bottom: 104px;
		color: #202d37;
		text-align: center;
	}
	.title {
		line-height: 32px;
		font-size: 24px;
		font-weight: bold;
	}
	.description {
		margin-top: 24px;
		font-size: 15px;
		white-space: pre-line;
	}
	.logo {
		margin-top: 40px;
	}
	img {
		vertical-align: middle;
		max-width: 100%;
	}
	.actions {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	.actions button,
	.actions a {
		display: inline-block;
		min-width: 94px;
		height: 40px;
		line-height: 38px;
		padding: 0 15px;
		font-size: 14px;
		background: #5383e8;
		color: #fff;
		box-sizing: border-box;
		border-radius: 4px;
		border: 1px solid;
		border-color: #5383e8;
		cursor: pointer;
	}
	.actions a {
		margin-left: 12px;
		text-decoration: none;
	}
</style>
