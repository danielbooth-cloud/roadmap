<script>
	let selectedPhase = 1;
	
	// Set item statuses directly in these arrays by adding/removing item IDs
	// COMPLETED ITEMS: Add item IDs here for completed courses
	let completedItems = new Set([
	]);
	
	// IN PROGRESS ITEMS: Add item IDs here for courses you're currently taking
	let inProgressItems = new Set([
	]);
	
	// All other items will automatically show as "Pending"

	function getItemStatus(itemId) {
		if (completedItems.has(itemId)) return 'completed';
		if (inProgressItems.has(itemId)) return 'in-progress';
		return 'pending';
	}

	function getPhaseProgress(phaseItems) {
		const completed = phaseItems.filter(item => completedItems.has(item.id)).length;
		return Math.round((completed / phaseItems.length) * 100);
	}

	// Learning plan data
	const phases = [
		{
			id: 1,
			title: "Foundation",
			description: "Core Programming & System Fundamentals",
			sections: [
				{
					title: "Core Programming",
					items: [
						{ id: 'go-fundamentals', title: 'Go Programming Fundamentals', url: 'https://hyperskill.org/courses/81-introduction-to-go' },
						{ id: 'go-advanced', title: 'Advanced Go', url: 'https://hyperskill.org/courses/25-go-developer' },
						{ id: 'js-basics', title: 'JavaScript/TypeScript Basics', url: 'https://www.educative.io/courses/learn-html-css-javascript-from-scratch' },
						{ id: 'typescript', title: 'TypeScript', url: 'https://www.udemy.com/course/understanding-typescript' },
						{ id: 'tailwind', title: 'Tailwind CSS', url: 'https://www.udemy.com/course/tailwind-from-scratch' }
					]
				},
				{
					title: "SysOps Fundamentals",
					items: [
						{ id: 'linux-admin', title: 'Linux System Administration', url: 'https://www.udemy.com/course/complete-linux-training-course-to-get-your-dream-it-job' },
						{ id: 'networking', title: 'Networking Concepts', url: 'https://www.udemy.com/course/essential-computer-networking-for-devops-cloud-and-more/' },
						{ id: 'ccna', title: 'CCNA', url: 'https://www.udemy.com/course/ccna-complete' }
					]
				},
				{
					title: "CI/CD & Version Control",
					items: [
						{ id: 'git-advanced', title: 'Git Advanced Workflows', url: 'https://www.datacamp.com/courses/advanced-git' },
						{ id: 'cicd', title: 'CI/CD', url: 'https://www.codecademy.com/learn/ext-courses/devsecops-in-continuous-integration-delivery-ci-cd' },
						{ id: 'gitlab-cicd', title: 'GitLab CI/CD', url: 'https://kodekloud.com/courses/gitlab-ci-cd' },
						{ id: 'github-actions', title: 'GitHub Actions', url: 'https://kodekloud.com/courses/github-actions' }
					]
				}
			]
		},
		{
			id: 2,
			title: "Cloud Infrastructure",
			description: "Multi-Cloud Platforms & Infrastructure Management",
			sections: [
				{
					title: "Multi-Cloud Platforms",
					items: [
						{ id: 'aws', title: 'AWS Solutions Architect', url: 'https://www.educative.io/courses/aws-solutions-architect-associate' },
						{ id: 'gcp', title: 'Google Cloud Platform', url: 'https://www.coursera.org/professional-certificates/cloud-engineering-gcp' },
						{ id: 'cloud-design', title: 'Cloud Design Principles', url: 'https://www.udemy.com/course/the-complete-cloud-computing-software-architecture-patterns' },
						{ id: 'hybrid-cloud', title: 'Hybrid Cloud', url: 'https://www.udemy.com/course/mastering-multicloud-and-hybrid-cloud-strategy-execution/' }
					]
				},
				{
					title: "Infrastructure as Code",
					items: [
						{ id: 'terraform', title: 'Terraform', url: 'https://www.udemy.com/course/terraform-authoring-and-operations-professional' },
						{ id: 'ansible', title: 'Ansible', url: 'https://kodekloud.com/courses/ansible-for-the-absolute-beginners-course' }
					]
				},
				{
					title: "Kubernetes",
					items: [
						{ id: 'k8s-arch', title: 'Kubernetes Architecture & Frameworks', url: 'https://www.educative.io/courses/programming-with-kubernetes' },
						{ id: 'k8s-admin', title: 'Kubernetes Administration', url: 'https://kodekloud.com/courses/cka-certification-course-certified-kubernetes-administrator' },
						{ id: 'istio', title: 'Service Mesh Concepts (Istio)', url: 'https://www.udemy.com/course/istio-hands-on-for-kubernetes' }
					]
				}
			]
		},
		{
			id: 3,
			title: "Platform Engineering",
			description: "Monitoring, Observability, and DevSecOps Practices",
			sections: [
				{
					title: "Monitoring & Observability",
					items: [
						{ id: 'grafana-lgtm', title: 'Grafana LGTM Stack', url: 'https://www.udemy.com/course/grafana-prometheus-loki-alloy-tempo' },
						{ id: 'k8s-monitoring', title: 'Monitoring in Kubernetes', url: 'https://www.educative.io/courses/advanced-kubernetes-techniques' },
						{ id: 'sre', title: 'Site Reliability Engineering', url: 'https://university.platformengineering.org/observability-for-platform-engineering' }
					]
				},
				{
					title: "DevSecOps & Agile",
					items: [
						{ id: 'k8s-devsecops', title: 'Kubernetes DevOps & Security', url: 'https://kodekloud.com/courses/devsecops' },
						{ id: 'agile', title: 'Agile', url: 'https://www.coursera.org/learn/agile-atlassian-jira' },
						{ id: 'microservices', title: 'Microservices', url: 'https://www.udemy.com/course/working-with-microservices-in-go' }
					]
				}
			]
		},
		{
			id: 4,
			title: "Advanced Topics",
			description: "Database Management & AI/ML Integration",
			sections: [
				{
					title: "Database & Data Management",
					items: [
						{ id: 'redis', title: 'Redis/Valkey Administration', url: 'https://www.educative.io/courses/complete-guide-to-redis' },
						{ id: 'nosql', title: 'NoSQL Database Design & Optimization', url: 'https://www.datacamp.com/courses/introduction-to-nosql' },
						{ id: 'mongodb', title: 'MongoDB', url: 'https://www.coursera.org/learn/introduction-to-mongodb' },
						{ id: 'truenas', title: 'TrueNAS', url: 'https://www.udemy.com/course/truenas-fundamentals-for-beginners' },
						{ id: 'vault', title: 'Secrets Management (Vault)', url: 'https://www.udemy.com/course/hashicorp-vault' }
					]
				},
				{
					title: "AI/ML Integration",
					items: [
						{ id: 'llm', title: 'LLM Integration', url: 'https://www.udemy.com/course/llm-engineering' },
						{ id: 'mlops', title: 'Machine Learning Operations (MLOps)', url: 'https://www.datacamp.com/tracks/mlops-fundamentals' }
					]
				}
			]
		},
		{
			id: 5,
			title: "Specialization",
			description: "Advanced Development & Architecture Skills",
			sections: [
				{
					title: "Further Programming",
					items: [
						{ id: 'svelte-tailwind', title: 'Svelte & Tailwind', url: 'https://www.educative.io/courses/building-reactive-apps-with-svelte-and-tailwind' },
						{ id: 'sveltekit', title: 'Svelte 5 & SvelteKit', url: 'https://www.udemy.com/course/practical-sveltekit-guide-build-and-deploy-real-world-apps' },
						{ id: 'design-patterns', title: 'Design Patterns', url: 'https://www.udemy.com/course/working-with-design-patterns-in-go-golang' },
						{ id: 'auth', title: 'Authentication', url: 'https://www.udemy.com/course/enterprise-oauth-for-developers' }
					]
				},
				{
					title: "Architecture & Design",
					items: [
						{ id: 'ux', title: 'UI/UX best practices', url: 'https://www.udemy.com/course/ultimate-guide-to-ux/' },
						{ id: 'api-design', title: 'API design', url: 'https://www.pluralsight.com/paths/api-design-and-development' },
						{ id: 'microservices-arch', title: 'Microservices architecture', url: 'https://www.udemy.com/course/the-complete-microservices-event-driven-architecture/' }
					]
				},
				{
					title: "AdTech",
					items: [
						{ id: 'programmatic', title: 'Programmatic advertising', url: 'https://www.udemy.com/course/programmatic-advertising-master-course/' },
						{ id: 'digital-marketing', title: 'Digital Marketing', url: 'https://www.udemy.com/course/digital-advertising-marketing-301-the-professional-course' },
						{ id: 'ctr-prediction', title: 'Predicting CTR', url: 'https://www.datacamp.com/courses/predicting-ctr-with-machine-learning-in-python' }
					]
				}
			]
		}
	];

	$: currentPhase = phases.find(p => p.id === selectedPhase);
	$: allItems = phases.flatMap(phase => phase.sections.flatMap(section => section.items));
	$: overallProgress = Math.round((completedItems.size / allItems.length) * 100);
</script>

<div class="min-h-screen" style="background-color: var(--color-palette-dark);">
	<!-- Header Section -->
	<header class="p-8">
		<h1 class="text-4xl font-bold mb-4" style="color: var(--color-palette-light);">
			Daniel's Learning Roadmap
		</h1>
		<p class="text-lg opacity-80 mb-6" style="color: var(--color-palette-light);">
			Developing deep expertise across Homelab Operations, Cloud Infrastructure, and DevOps Engineering to build, automate, and scale modern systems with hands-on precision and industry-grade practices.
		</p>
		
		<!-- Overall Progress -->
		<div class="mb-6">
			<div class="flex justify-between items-center mb-2">
				<span class="text-sm font-medium" style="color: var(--color-palette-light);">
					Overall Progress
				</span>
				<span class="text-sm font-medium" style="color: var(--color-palette-light);">
					{overallProgress}% ({completedItems.size}/{allItems.length})
				</span>
			</div>
			<div class="w-full rounded-full h-4" style="background-color: rgba(254, 254, 253, 0.1);">
				<div class="h-4 rounded-full transition-all duration-500" style="width: {overallProgress}%; background-color: var(--color-palette-pink);"></div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="px-8 pb-8">
		<!-- Phase Navigation -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Learning Paths
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
				{#each phases as phase}
					{@const phaseItems = phase.sections.flatMap(section => section.items)}
					{@const phaseProgress = getPhaseProgress(phaseItems)}
					<button 
						class="p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 text-left"
						style="{selectedPhase === phase.id ? 'border-color: var(--color-palette-pink); background-color: rgba(255, 26, 117, 0.1);' : 'border-color: var(--color-palette-light); background-color: rgba(254, 254, 253, 0.05);'}"
						on:click={() => selectedPhase = phase.id}
					>
						<h3 class="font-semibold mb-2" style="color: var(--color-palette-light);">
							Pathway {phase.id}: {phase.title}
						</h3>
						<p class="text-sm opacity-80 mb-3" style="color: var(--color-palette-light);">
							{phase.description}
						</p>
						<div class="mb-2">
							<div class="flex justify-between text-xs mb-1" style="color: var(--color-palette-light);">
								<span>Progress</span>
								<span>{phaseProgress}%</span>
							</div>
							<div class="w-full rounded-full h-2" style="background-color: rgba(254, 254, 253, 0.2);">
								<div class="h-2 rounded-full transition-all duration-300" style="width: {phaseProgress}%; background-color: var(--color-palette-pink);"></div>
							</div>
						</div>
					</button>
				{/each}
			</div>
		</section>

		<!-- Current Phase Details -->
		{#if currentPhase}
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Phase {currentPhase.id}: {currentPhase.title}
			</h2>
			<p class="text-lg opacity-80 mb-6" style="color: var(--color-palette-light);">
				{currentPhase.description}
			</p>
			
			{#each currentPhase.sections as section}
			<div class="mb-8">
				<h3 class="text-xl font-semibold mb-4" style="color: var(--color-palette-light);">
					{section.title}
				</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each section.items as item}
						{@const status = getItemStatus(item.id)}
						<div class="rounded-lg border transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 flex flex-col"
							style="background-color: rgba(254, 254, 253, 0.05); border-color: var(--color-palette-light);">
							<div class="p-6 flex-grow">
								<h4 class="font-bold text-lg mb-2" style="color: var(--color-palette-light);">
									{item.title}
								</h4>
								<p class="text-sm opacity-70 mb-4 flex-grow" style="color: var(--color-palette-light);">
									<!-- Placeholder for a course description if you add one -->
									Click the link below to start the course.
								</p>
							</div>
							<div class="p-6 pt-0 flex items-center justify-between">
								<a href="{item.url}" target="_blank" rel="noopener noreferrer"
									class="text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200"
									style="background-color: var(--color-palette-pink); color: var(--color-palette-dark);">
									Go to course
								</a>
								<span class="px-3 py-1 rounded-full text-xs font-medium"
									style="{status === 'completed' ? 'background-color: var(--color-palette-pink); color: var(--color-palette-light);' : 
										status === 'in-progress' ? 'background-color: rgba(255, 26, 117, 0.2); color: var(--color-palette-pink); border: 1px solid var(--color-palette-pink);' : 
										'border: 1px solid var(--color-palette-light); color: var(--color-palette-light); background-color: transparent;'}">
									{status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Pending'}
								</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
			{/each}
		</section>
		{/if}

		<!-- Footer Section -->
		<footer class="mt-12 pt-8 border-t text-center" style="border-color: var(--color-palette-light);">
			<p class="opacity-80" style="color: var(--color-palette-light);">
				Daniel's Learning Roadmap • Built with SvelteKit
			</p>
		</footer>
	</main>
</div>
