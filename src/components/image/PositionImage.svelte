<script context="module" lang="ts">
	export type Position = '탑' | '정글' | '미드' | '원딜' | '서포터';
</script>

<script lang="ts">
	export let position: Position = '미드';

	const getClassName = (position: Position) => {
		let className = '__spSite ';
		switch (position) {
			case '원딜':
				className += '__spSite-139';
				break;
			case '정글':
				className += '__spSite-141';
				break;
			case '미드':
				className += '__spSite-143';
				break;
			case '서포터':
				className += '__spSite-145';
				break;
			case '탑':
				className += '__spSite-147';
				break;
			default:
				break;
		}
		return className;
	};
</script>

<div class="Image">
	<i class={getClassName(position)} />
</div>

<style>
	.Image {
		display: inline-block;
		width: 36px;
		line-height: 34px;
		vertical-align: middle;
		text-align: center;
	}
	.__spSite {
		display: inline-block;
		vertical-align: middle;
		text-indent: -99999px;
		background-image: url(/assets/images/site.png?image=q_auto&v=1637122822);
	}
	.__spSite-139 {
		background-position: -112px -2536px;
		width: 28px;
		height: 28px;
	}
	.__spSite-141 {
		background-position: -116px -2613px;
		width: 24px;
		height: 28px;
	}
	.__spSite-143 {
		background-position: -112px -2691px;
		width: 28px;
		height: 28px;
	}
	.__spSite-145 {
		background-position: -104px -2768px;
		width: 36px;
		height: 26px;
	}
	.__spSite-147 {
		background-position: -112px -2844px;
		width: 28px;
		height: 28px;
	}
</style>
