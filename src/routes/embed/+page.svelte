<script lang="ts">
	import { allItems, getItemStatus, phases } from '$lib/data/roadmap';

	const inProgressCourses = $derived(
		allItems
			.filter(course => getItemStatus(course.id) === 'in-progress')
			.map(course => {
				// Find the actual section this course belongs to
				const phase = phases.find(p => p.sections.some(s => s.items.some(i => i.id === course.id)));
				const section = phase?.sections.find(s => s.items.some(i => i.id === course.id));
				
				return { 
					...course, 
					status: getItemStatus(course.id), 
					section: section?.title || 'Learning' 
				};
			})
	);

	const completedCourses = $derived(
		allItems
			.filter(course => getItemStatus(course.id) === 'completed')
			.map(course => {
				const phase = phases.find(p => p.sections.some(s => s.items.some(i => i.id === course.id)));
				const section = phase?.sections.find(s => s.items.some(i => i.id === course.id));
				
				return { 
					...course, 
					status: getItemStatus(course.id), 
					section: section?.title || 'Completed' 
				};
			})
	);
</script>

<svelte:head>
	<title>Daniel's Learning Progress</title>
	<style>
		body { margin: 0; padding: 0; }
	</style>
</svelte:head>

<div class="min-h-screen p-4" style="background-color: var(--color-palette-dark); font-family: system-ui, -apple-system, sans-serif;">
	<!-- Header -->
	<div class="mb-6">
	</div>

	<!-- In Progress Courses -->
	{#if inProgressCourses.length > 0}
		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-3 flex items-center gap-2" style="color: var(--color-palette-pink);">
				🎯 Currently Learning ({inProgressCourses.length})
			</h2>
			<div class="space-y-3">
				{#each inProgressCourses as course}
					<div class="border-2 rounded-lg p-4 hover:scale-[1.005] transition-transform" 
						style="background-color: var(--color-palette-faded-purple); border-color: var(--color-palette-pink);">
						<div class="flex items-start justify-between gap-3">
							<div class="flex-1">
								<h3 class="font-semibold text-base mb-1" style="color: var(--color-palette-light);">
									{course.title}
								</h3>
								<div class="text-sm opacity-75 mb-2" style="color: var(--color-palette-emerald);">
									{course.section}
								</div>
								<a href={course.url} target="_blank" rel="noopener" 
									class="inline-block text-xs px-3 py-1 rounded-full font-medium hover:scale-[1.02] transition-transform"
									style="background-color: var(--color-palette-pink); color: var(--color-palette-dark);">
									Continue Course →
								</a>
							</div>
							<div class="px-2 py-1 rounded-full text-xs font-bold"
								style="background-color: var(--color-palette-faded-pink); color: var(--color-palette-pink);">
								In Progress
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Completed Courses -->
	{#if completedCourses.length > 0}
		<div class="mb-6">
			<h2 class="text-lg font-semibold mb-3 flex items-center gap-2" style="color: var(--color-palette-emerald);">
				✅ Completed ({completedCourses.length})
			</h2>
			<div class="space-y-2">
				{#each completedCourses as course}
					<div class="border rounded-lg p-3 text-sm" 
						style="background-color: var(--color-palette-faded-purple); border-color: var(--color-palette-emerald);">
						<div class="flex items-center justify-between">
							<div>
								<span class="font-medium" style="color: var(--color-palette-light);">{course.title}</span>
								<span class="opacity-75 ml-2" style="color: var(--color-palette-emerald);">• {course.section}</span>
							</div>
							<div class="px-2 py-1 rounded-full text-xs font-bold"
								style="background-color: var(--color-palette-faded-emerald); color: var(--color-palette-emerald);">
								✓
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Stats -->
	<div class="mt-6 p-3 rounded-lg" style="background-color: var(--color-palette-faded-purple); border: 1px solid var(--color-palette-faded-slate);">
		<div class="text-sm" style="color: var(--color-palette-light);">
			<div class="flex justify-between items-center">
				<span>Progress Overview:</span>
				<span class="font-bold">
					{completedCourses.length} completed • {inProgressCourses.length} in progress
				</span>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="mt-4 text-center text-xs opacity-60" style="color: var(--color-palette-light);">
		<a href="/" class="hover:opacity-100 transition-opacity">View Full Roadmap →</a>
	</div>
</div>