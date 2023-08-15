<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: totalCount = data.workTime * 60 + data.restTime * 60;
	let countdown: number;

	$: if (data.play) {
		countdown = setInterval(() => {
			totalCount -= 1;
		}, 1000);
	} else {
		clearInterval(countdown);
	}

	let wMins = Math.floor(totalCount / 60);
	let wSecs = totalCount - wMins * 60;
</script>

<div>
	<div>
		{wMins}:{wSecs}
	</div>
</div>
