<script lang="ts">
	// component
	import Header from '@components/organisms/Header.svelte'
	import TaskView from '@components/templates/TaskView.svelte'
	import ScheduleView from '@components/templates/ScheduleView.svelte'
	import ProgressView from '@components/templates/ProgressView.svelte'

	import { currentDisplayType } from 'store/display'

	const mainComponentsMap = {
		"TaskView": TaskView,
		"ScheduleView": ScheduleView,
		"ProgressView": ProgressView
	}
</script>


<main>
	<Header />
	<svelte:component this={mainComponentsMap[$currentDisplayType]} />
</main>


<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>