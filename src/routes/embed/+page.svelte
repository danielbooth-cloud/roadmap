<script lang="ts">
	// Simplified version for embedding - mirrors main page data
	let completedItems = new Set<string>([]);
	
	let inProgressItems = new Set<string>([
		'go-fundamentals'
	]);

	function getItemStatus(itemId: string): 'completed' | 'in-progress' | 'pending' {
		if (completedItems.has(itemId)) return 'completed';
		if (inProgressItems.has(itemId)) return 'in-progress';
		return 'pending';
	}

	// Simplified data structure for embed
	const allCourses = [
		{ id: 'go-fundamentals', title: 'Go Programming Fundamentals', url: 'https://hyperskill.org/courses/81-introduction-to-go', section: 'Core Programming' },
		{ id: 'go-advanced', title: 'Advanced Go', url: 'https://hyperskill.org/courses/25-go-developer', section: 'Core Programming' },
		{ id: 'js-basics', title: 'JavaScript/TypeScript Basics', url: 'https://www.educative.io/courses/learn-html-css-javascript-from-scratch', section: 'Core Programming' },
		{ id: 'typescript', title: 'TypeScript', url: 'https://www.udemy.com/course/understanding-typescript', section: 'Core Programming' },
		{ id: 'tailwind', title: 'Tailwind CSS', url: 'https://www.udemy.com/course/tailwind-from-scratch', section: 'Core Programming' },
		{ id: 'cleancode', title: 'Clean Code', url: 'https://www.udemy.com/course/writing-clean-code', section: 'Core Programming' },
		{ id: 'linux-admin', title: 'Linux System Administration', url: 'https://www.udemy.com/course/complete-linux-training-course-to-get-your-dream-it-job', section: 'SysOps Fundamentals' },
		{ id: 'networking', title: 'Networking Concepts', url: 'https://www.udemy.com/course/essential-computer-networking-for-devops-cloud-and-more/', section: 'SysOps Fundamentals' },
		{ id: 'git-advanced', title: 'Git Advanced Workflows', url: 'https://www.datacamp.com/courses/advanced-git', section: 'CI/CD & Version Control' }
	];

	const inProgressCourses = $derived(
		allCourses
			.filter(course => getItemStatus(course.id) === 'in-progress')
			.map(course => ({ ...course, status: getItemStatus(course.id) }))
	);

	const completedCourses = $derived(
		allCourses
			.filter(course => getItemStatus(course.id) === 'completed')
			.map(course => ({ ...course, status: getItemStatus(course.id) }))
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
		<h1 class="text-2xl font-bold mb-2" style="color: var(--color-palette-light);">
			📚 Current Learning Progress
		</h1>
		<div class="text-sm opacity-75" style="color: var(--color-palette-light);">
			Last updated: {new Date().toLocaleDateString()}
		</div>
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