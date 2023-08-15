<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let totalCount = data.workTime + data.restTime;

	let countdown: number;

	$: if (data.play) {
		countdown = setInterval(() => {
			totalCount -= 1;
		}, 1000);
	} else {
		clearInterval(countdown);
	}

	let wMins = Math.floor(totalCount / 60) - 5;
	let wSecs = totalCount % 60;

	function padTo2Digits(num: number) {
		return num.toString().padStart(2, '0');
	}
	console.log(wMins, wSecs, totalCount, data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1">
			{padTo2Digits(wMins)}:{padTo2Digits(wSecs)}
		</h1>
		<div class="flex justify-center space-x-2">
			<button type="button" class="btn variant-filled">Start</button>
		</div>
	</div>
</div>
