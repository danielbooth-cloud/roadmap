<script lang="ts">
	import { phases, allItems, getItemStatus, getCertificationStatus, getPhaseProgress, completedItems } from '$lib/data/roadmap';
	
	let selectedPhase = $state(1);

	function getSectionIcon(sectionTitle: string): string {
		const iconMap: Record<string, string> = {
			'Core Programming': '💻',
			'SysOps Fundamentals': '⚙️',
			'CI/CD & Version Control': '🔄',
			'Multi-Cloud Platforms': '☁️',
			'Infrastructure as Code': '🔧',
			'Container Orchestration': '🐳',
			'Monitoring & Observability': '📊',
			'DevSecOps & Agile': '🔒',
			'Database & Data Management': '🗄️',
			'AI/ML Integration': '🤖',
			'Further Programming': '⚡',
			'Architecture & Design': '🎨',
			'AdTech': '📈'
		};
		return iconMap[sectionTitle] || '📚';
	}

	const currentPhase = $derived(phases.find(p => p.id === selectedPhase));
	const overallProgress = $derived(Math.round((completedItems.size / allItems.length) * 100));
</script>

<div class="min-h-screen" style="background-color: var(--color-palette-dark);">
	<!-- Header Section -->
	<header class="p-8">
		<!-- Hero Section with enhanced styling -->
		<div class="bg-[var(--color-palette-dark)] border-2 border-[var(--color-palette-pink)] text-[var(--color-palette-light)] p-8 rounded-3xl shadow-2xl transform hover:scale-[1.005] transition-all duration-500 relative overflow-hidden mb-8">
			<div class="absolute top-4 right-4 w-16 h-16 bg-[var(--color-palette-faded-pink)] rounded-full opacity-60"></div>
			<div class="absolute bottom-4 left-4 w-12 h-12 bg-[var(--color-palette-faded-emerald)] rounded-full opacity-40"></div>
			<div class="relative z-10">
				<div class="flex items-center gap-4 mb-6">
					<div class="w-16 h-16 bg-[var(--color-palette-pink)] rounded-2xl flex items-center justify-center shadow-lg">
						<span class="text-3xl">📖</span>
					</div>
					<div>
						<h1 class="text-6xl font-black mb-2 tracking-tight">Daniel's Learning Roadmap</h1>
						<div class="w-24 h-1 bg-[var(--color-palette-pink)] rounded-full"></div>
					</div>
				</div>
				<p class="text-2xl font-light leading-relaxed max-w-4xl">
					Developing deep expertise across Cloud Infrastructure, and DevOps Engineering to build, automate, and scale modern systems with hands-on precision and industry-grade practices.
				</p>
			</div>
		</div>
		
		<!-- Overall Progress with enhanced styling -->
		<div class="bg-[var(--color-palette-faded-purple)] border-2 border-[var(--color-palette-faded-slate)] p-6 rounded-2xl shadow-xl hover:border-[var(--color-palette-emerald)] transition-all duration-500">
			<div class="flex items-center gap-3 mb-4">
				<div class="w-3 h-3 bg-[var(--color-palette-emerald)] rounded-full"></div>
				<h2 class="text-2xl font-bold text-[var(--color-palette-light)]">Overall Progress</h2>
				<div class="w-3 h-3 bg-[var(--color-palette-pink)] rounded-full"></div>
			</div>
			<div class="flex justify-between items-center mb-3">
				<span class="text-lg font-medium" style="color: var(--color-palette-light);">
					Completed Courses
				</span>
				<span class="text-lg font-bold" style="color: var(--color-palette-emerald);">
					{overallProgress}% ({completedItems.size}/{allItems.length})
				</span>
			</div>
			<div class="w-full rounded-full h-6" style="background-color: rgba(254, 254, 253, 0.1);">
				<div class="h-6 rounded-full transition-all duration-500 shadow-lg" style="width: {overallProgress}%; background-color: var(--color-palette-emerald);"></div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="px-8 pb-8">
		<!-- Phase Navigation with enhanced cards -->
		<section class="mb-12">
			<div class="text-center mb-10">
				<div class="flex items-center justify-center gap-3 mb-4">
					<div class="w-2 h-2 bg-[var(--color-palette-pink)] rounded-full"></div>
					<h2 class="text-4xl font-black text-[var(--color-palette-light)]">Learning Pathways</h2>
					<div class="w-2 h-2 bg-[var(--color-palette-emerald)] rounded-full"></div>
				</div>
				<div class="w-32 h-1 bg-[var(--color-palette-emerald)] mx-auto rounded-full"></div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
				{#each phases as phase, i}
					{@const phaseItems = phase.sections.flatMap(section => section.items)}
					{@const phaseProgress = getPhaseProgress(phaseItems)}
					{@const phaseCompleted = phaseProgress === 100}
					<button 
					class="group bg-[var(--color-palette-faded-purple)] border-2 p-6 rounded-2xl shadow-xl transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl cursor-pointer text-left"
					style="{selectedPhase === phase.id ? 
					'border-color: var(--color-palette-pink); box-shadow: 0 20px 50px rgba(255,26,117,0.3);' : 
					phaseCompleted ? 
					'border-color: var(--color-palette-emerald); box-shadow: 0 20px 50px rgba(35,216,161,0.2);' :
					'border-color: var(--color-palette-faded-slate);'} transition-delay: {i * 75}ms"
					onclick={() => selectedPhase = phase.id}>
						<div class="flex items-center justify-between mb-4">
							<div class="w-3 h-3 rounded-full transition-colors duration-300" style="background-color: {selectedPhase === phase.id ? 'var(--color-palette-pink)' : phaseCompleted ? 'var(--color-palette-emerald)' : 'var(--color-palette-faded-slate)'}"></div>
							<div class="w-8 h-1 rounded-full transition-colors duration-300" style="background-color: {selectedPhase === phase.id ? 'var(--color-palette-faded-pink)' : phaseCompleted ? 'var(--color-palette-faded-emerald)' : 'var(--color-palette-faded-slate)'}"></div>
						</div>
						<h3 class="font-bold text-lg mb-2 group-hover:text-[var(--color-palette-pink)] transition-colors duration-300" style="color: var(--color-palette-light);">
							Pathway {phase.id}: {phase.title}
						</h3>
						<p class="text-sm opacity-80 mb-4 group-hover:translate-x-1 transition-transform duration-300" style="color: var(--color-palette-light);">
							{phase.description}
						</p>
						<div class="mb-2">
							<div class="flex justify-between text-xs mb-2" style="color: var(--color-palette-light);">
								<span class="font-medium">Progress</span>
								<span class="font-bold">{phaseProgress}%</span>
							</div>
							<div class="w-full rounded-full h-3" style="background-color: rgba(254, 254, 253, 0.2);">
							<div class="h-3 rounded-full transition-all duration-300 shadow-sm" style="width: {phaseProgress}%; background-color: {phaseProgress === 100 ? 'var(--color-palette-emerald)' : 'var(--color-palette-pink)'}"></div>
							</div>
						</div>
					</button>
				{/each}
			</div>
		</section>

		<!-- Current Phase Details -->
		{#if currentPhase}
		<section class="mb-8">
			<!-- Phase Header -->
			<div class="bg-[var(--color-palette-faded-purple)] border-2 border-[var(--color-palette-emerald)] rounded-3xl p-10 shadow-2xl mb-10">
				<div class="text-center">
					<div class="flex items-center justify-center gap-3 mb-4">
						<div class="w-2 h-2 bg-[var(--color-palette-pink)] rounded-full"></div>
						<h2 class="text-4xl font-black text-[var(--color-palette-light)]">Pathway {currentPhase.id}: {currentPhase.title}</h2>
						<div class="w-2 h-2 bg-[var(--color-palette-emerald)] rounded-full"></div>
					</div>
					<div class="w-32 h-1 bg-[var(--color-palette-emerald)] mx-auto rounded-full mb-6"></div>
					<p class="text-2xl font-light leading-relaxed max-w-4xl mx-auto" style="color: var(--color-palette-light);">
						{currentPhase.description}
					</p>
				</div>
			</div>
			
			{#each currentPhase.sections as section}
			<div class="mb-12">
				<div class="flex items-center gap-4 mb-8">
					<div class="w-12 h-12 bg-[var(--color-palette-emerald)] rounded-2xl flex items-center justify-center shadow-lg">
						<span class="text-2xl">{getSectionIcon(section.title)}</span>
					</div>
					<div>
						<h3 class="text-3xl font-bold text-[var(--color-palette-emerald)]">{section.title}</h3>
						<div class="w-16 h-0.5 bg-[var(--color-palette-emerald)] mt-1"></div>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each section.items as item, i}
						{@const status = getItemStatus(item.id)}
						<div class="group bg-[var(--color-palette-faded-purple)] border-2 border-[var(--color-palette-faded-slate)] rounded-2xl shadow-xl hover:border-[var(--color-palette-pink)] transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl cursor-pointer relative overflow-hidden"
							style="transition-delay: {i * 75}ms">
							<div class="absolute top-0 right-0 w-32 h-32 bg-[var(--color-palette-faded-pink)] rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
							<!-- Technology Icon -->
							{#if item.icon}
								<div class="absolute top-4 right-4 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300" style="background-color: rgba(254, 254, 253, 0.1);">
									<img src={item.icon} alt="{item.title} logo" class="w-6 h-6 icon-hover" />
								</div>
							{/if}
							<div class="relative z-10 p-8">
								<div class="flex items-center justify-between mb-4">
									<div class="w-8 h-1 bg-[var(--color-palette-faded-emerald)] rounded-full group-hover:bg-[var(--color-palette-faded-pink)] transition-colors duration-300"></div>
								</div>
								<h4 class="font-bold text-xl mb-3 pr-16 group-hover:text-[var(--color-palette-pink)] transition-colors duration-300" style="color: var(--color-palette-light);">
									{item.title}
								</h4>
								<p class="text-sm opacity-70 mb-6 group-hover:translate-x-1 transition-transform duration-300" style="color: var(--color-palette-light);">
								{item.description}
							</p>
								<div class="flex items-center justify-between">
									<a href="{item.url}" target="_blank" rel="noopener noreferrer"
										class="text-sm font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
										style="background-color: var(--color-palette-pink); color: var(--color-palette-dark);">
										Go to Course
									</a>
									<span class="px-4 py-2 rounded-full text-xs font-bold shadow-sm"
										style="{status === 'completed' ? 'background-color: var(--color-palette-faded-emerald); color: var(--color-palette-emerald); border: 2px solid var(--color-palette-emerald);' : 
											status === 'in-progress' ? 'background-color: var(--color-palette-faded-pink); color: var(--color-palette-pink); border: 2px solid var(--color-palette-pink);' : 
											'border: 2px solid var(--color-palette-light); color: var(--color-palette-light); background-color: transparent;'}">
										{status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Pending'}
									</span>
								</div>
							</div>
						</div>
					{/each}
				</div>

			</div>
			{/each}
			
			<!-- Phase Certifications -->
			{#if currentPhase.certifications && currentPhase.certifications.length > 0}
				<div class="mt-16">
					<div class="flex items-center justify-center gap-4 mb-8">
						<div class="w-12 h-12 bg-[var(--color-palette-pink)] rounded-xl flex items-center justify-center shadow-lg">
							<span class="text-2xl">🏆</span>
						</div>
						<div class="text-center">
							<h3 class="text-3xl font-bold text-[var(--color-palette-pink)]">Pathway Certifications</h3>
							<div class="w-50 h-0.5 bg-[var(--color-palette-pink)] mt-1"></div>
						</div>
					</div>
					<div class="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
						{#each currentPhase.certifications as cert, i}
							{@const certStatus = getCertificationStatus(cert.name)}
							<div class="relative group w-48 flex-shrink-0">
								<a href="{cert.url}" target="_blank" rel="noopener noreferrer" 
									class="block bg-[var(--color-palette-faded-slate)] border-2 border-[var(--color-palette-pink)] p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full"
									style="transition-delay: {i * 75}ms">
									<div class="flex flex-col items-center justify-center h-full min-h-[140px]">
										<img src="{cert.img}" alt="{cert.name}" class="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300 mb-4">
										<p class="text-center text-sm font-bold leading-tight" style="color: var(--color-palette-light);">{cert.name}</p>
									</div>
								</a>
								<span class="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold shadow-lg"
									style="{certStatus === 'completed' ? 'background-color: var(--color-palette-faded-emerald); color: var(--color-palette-emerald); border: 2px solid var(--color-palette-emerald);' : 
										'border: 2px solid var(--color-palette-light); color: var(--color-palette-light); background-color: transparent;'}">
									{certStatus === 'completed' ? '✅' : '❌'}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</section>
		{/if}

		<!-- Footer Section -->
		<footer class="mt-12 pt-8 border-t text-center" style="border-color: var(--color-palette-faded-slate);">
			<p class="opacity-80" style="color: var(--color-palette-light);">
				Daniel's Learning Roadmap • Built with SvelteKit & Tailwind CSS
			</p>
		</footer>
	</main>
</div>