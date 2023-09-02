<script lang="ts">
	import type { PageData } from './$types';
	import IcBaselineArrowDownward from '~icons/ic/baseline-arrow-downward';
	import IcBaselineArrowUpward from '~icons/ic/baseline-arrow-upward';

	export let data: PageData;

	let workTime: number = 1500;
	let restTime: number = 300;
	let interval: number;
	let play: boolean = false;

	$: totalCount = workTime + restTime;

	$: if (play) {
		clearInterval(interval);
		interval = setInterval(() => {
			totalCount -= 1;
		}, 1000);
	}

	$: if (!play) {
		clearInterval(interval);
	}

	$: wMins = Math.floor(totalCount / 60);

	$: wSecs = totalCount % 60;

	const handleReset = () => {
		totalCount = 1800;
		play = false;
	};

	const padTo2Digits = (num: number) => {
		return num.toString().padStart(2, '0');
	};

	$: console.log(wMins, wSecs, totalCount, play, data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div id="mins" class="flex flex-row space-x-2">
			<IcBaselineArrowDownward />
			<h1 class="basis-1/4">{workTime}</h1>
			<IcBaselineArrowUpward />
			<h1 class="basis-1/4">{restTime}</h1>
			<h1 class="basis-1/4">{totalCount}</h1>
		</div>
		<h1 class="h1">
			{padTo2Digits(wMins)}:{padTo2Digits(wSecs)}
		</h1>

		<div class="flex justify-center space-x-2">
			<button type="button" class="btn variant-filled" on:click={() => (play = !play)}
				>Start/Stop</button
			>
			<button type="button" class="btn variant-filled" on:click={handleReset}>Reset</button>
		</div>
	</div>
</div>
