<script>
	let selectedPhase = $state(1);
	
	// Set item statuses directly in these arrays by adding/removing item IDs
	// COMPLETED ITEMS: Add item IDs here for completed courses
	let completedItems = new Set([
	]);
	
	// IN PROGRESS ITEMS: Add item IDs here for courses you're currently taking
	let inProgressItems = new Set([
		'go-fundamentals'
	]);
	
	// COMPLETED CERTIFICATIONS: Add certification names here for completed certs
	let completedCertifications = new Set([
		// Example: 'Platform Engineering Leadership'
	]);
	
	// All other items will automatically show as "Pending"

	function getItemStatus(itemId) {
		if (completedItems.has(itemId)) return 'completed';
		if (inProgressItems.has(itemId)) return 'in-progress';
		return 'pending';
	}
	
	function getCertificationStatus(certName) {
		if (completedCertifications.has(certName)) return 'completed';
		return 'pending';
	}

	function getPhaseProgress(phaseItems) {
		const completed = phaseItems.filter(item => completedItems.has(item.id)).length;
		return Math.round((completed / phaseItems.length) * 100);
	}

	function getSectionIcon(sectionTitle) {
		const iconMap = {
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
					{ id: 'go-fundamentals', title: 'Go Programming Fundamentals', description: 'Learn Go syntax, concurrency, and build robust backend applications.', url: 'https://hyperskill.org/courses/81-introduction-to-go', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/go.svg' },
					{ id: 'go-advanced', title: 'Advanced Go', description: 'Master advanced Go patterns, performance optimization, and microservices.', url: 'https://hyperskill.org/courses/25-go-developer', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/go.svg' },
					{ id: 'js-basics', title: 'JavaScript/TypeScript Basics', description: 'Foundation in modern JavaScript and TypeScript for web development.', url: 'https://www.educative.io/courses/learn-html-css-javascript-from-scratch', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg' },
					{ id: 'typescript', title: 'TypeScript', description: 'Type-safe JavaScript development with advanced TypeScript features.', url: 'https://www.udemy.com/course/understanding-typescript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/typescript.svg' },
					{ id: 'tailwind', title: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development.', url: 'https://www.udemy.com/course/tailwind-from-scratch', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tailwindcss.svg' },
					{ id: 'cleancode', title: 'Clean Code', description: 'Learn how to write readable, understandable and therefore maintainable code.', url: 'https://www.udemy.com/course/writing-clean-code', icon: 'https://www.svgrepo.com/show/97554/clean-code.svg' }
				]
				},
				{
					title: "SysOps Fundamentals",
				items: [
					{ id: 'linux-admin', title: 'Linux System Administration', description: 'Master Linux server management, shell scripting, and system security.', url: 'https://www.udemy.com/course/complete-linux-training-course-to-get-your-dream-it-job', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linux.svg' },
					{ id: 'networking', title: 'Networking Concepts', description: 'Essential networking protocols, routing, and network troubleshooting.', url: 'https://www.udemy.com/course/essential-computer-networking-for-devops-cloud-and-more/', icon: 'https://www.svgrepo.com/show/111233/network.svg' },
					{ id: 'ccna', title: 'CCNA', description: 'Cisco networking fundamentals, switching, routing, and network security.', url: 'https://www.udemy.com/course/ccna-complete', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/cisco.svg' }
				]
				},
				{
					title: "CI/CD & Version Control",
				items: [
					{ id: 'git-advanced', title: 'Git Advanced Workflows', description: 'Advanced Git branching, merging strategies, and collaborative workflows.', url: 'https://www.datacamp.com/courses/advanced-git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/git.svg' },
					{ id: 'cicd', title: 'CI/CD', description: 'Continuous integration and deployment pipelines for automated software delivery.', url: 'https://www.codecademy.com/learn/ext-courses/devsecops-in-continuous-integration-delivery-ci-cd', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/githubactions.svg' },
					{ id: 'gitlab-cicd', title: 'GitLab CI/CD', description: 'GitLab pipelines, runners, and DevOps automation workflows.', url: 'https://kodekloud.com/courses/gitlab-ci-cd', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gitlab.svg' },
					{ id: 'github-actions', title: 'GitHub Actions', description: 'Automate workflows with GitHub Actions for testing and deployment.', url: 'https://kodekloud.com/courses/github-actions', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg' }
				]
				}
			],
			certifications: [
				{ name: 'Go Developer Certificate', url: 'https://hyperskill.org/courses/25-go-developer', img: 'https://icon.icepanel.io/Technology/svg/Go.svg' },
				{ name: 'LPIC-1', url: 'https://www.lpi.org/our-certifications/lpic-1-overview/', img: '/LPIC-1.png'},
				{ name: 'LPIC-2', url: 'https://www.lpi.org/our-certifications/lpic-2-overview/', img: 'https://images.credly.com/size/680x680/images/44eff2ce-0195-4c82-8762-d68916a2f63d/image.png'},
				{ name: 'CCNA', url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html', img: 'https://images.credly.com/size/680x680/images/683783d8-eaac-4c37-a14d-11bd8a36321d/ccna_600.png'},
				{ name: 'GitHub Actions', url: 'https://examregistration.github.com/certification/ACTIONS', img: 'https://images.credly.com/size/680x680/images/89efc3e7-842b-4790-b09b-9ea5efc71ec3/image.png'},
				{ name: 'GitLab CI/CD', url: 'https://university.gitlab.com/courses/gitlab-ci-cd-certification-exam', img: 'https://images.credly.com/size/680x680/images/cbfb08bb-74b3-4768-81ac-93c30335cb83/image.png'}
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
					{ id: 'aws', title: 'AWS Solutions Architect', description: 'Design scalable, secure AWS cloud architectures and services.', url: 'https://www.educative.io/courses/aws-solutions-architect-associate', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
					{ id: 'gcp', title: 'Google Cloud Platform', description: 'Master Google Cloud services, compute, storage, and networking.', url: 'https://www.coursera.org/professional-certificates/cloud-engineering-gcp', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/googlecloud.svg' },
					{ id: 'cloud-design', title: 'Cloud Design Principles', description: 'Learn cloud architecture patterns, scalability, and best practices.', url: 'https://www.udemy.com/course/the-complete-cloud-computing-software-architecture-patterns', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/materialdesign.svg' },
					{ id: 'hybrid-cloud', title: 'Hybrid Cloud', description: 'Multi-cloud strategies and hybrid infrastructure management.', url: 'https://www.udemy.com/course/mastering-multicloud-and-hybrid-cloud-strategy-execution/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/icloud.svg' }
				]
				},
				{
					title: "Infrastructure as Code",
				items: [
					{ id: 'terraform', title: 'Terraform', description: 'Infrastructure as Code with Terraform for cloud provisioning.', url: 'https://www.udemy.com/course/terraform-authoring-and-operations-professional', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/terraform.svg' },
					{ id: 'ansible', title: 'Ansible', description: 'Configuration management and automation with Ansible playbooks.', url: 'https://kodekloud.com/courses/ansible-for-the-absolute-beginners-course', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ansible.svg' }
				]
				},
				{
					title: "Container Orchestration",
				items: [
					{ id: 'kubernetes', title: 'Kubernetes Architecture and Frameworks', description: 'Learn to deploy, scale, and customize containerized applications using advanced Kubernetes programming concepts.', url: 'https://www.educative.io/courses/programming-with-kubernetes', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/kubernetes.svg' },
					{ id: 'k8s-admin', title: 'Kubernetes Administration', description: 'Advanced Kubernetes cluster management and troubleshooting.', url: 'https://kodekloud.com/courses/cka-certification-course-certified-kubernetes-administrator', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/kubernetes.svg' },
					{ id: 'istio', title: 'Service mesh concepts (Istio)', description: 'Learn how service mesh enables advanced traffic management, observability, security, and policy enforcement in Kubernetes environments.', url: 'https://www.udemy.com/course/istio-hands-on-for-kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Istio-bluelogo-nobackground-unframed.svg' }
				]
				}
			],
			certifications: [
				{ name: 'AWS Certified Solutions Architect - Associate', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/', img: 'https://miro.medium.com/v2/resize:fit:600/1*E6tqmlvuylHL8SMlOYUqhQ.png'},
				{ name: 'GCP Associate Cloud Engineer', url: 'https://cloud.google.com/learn/certification/cloud-engineer', img: 'https://miro.medium.com/v2/resize:fit:324/1*T59fnCvp71WqNeuytWGorA.png'},
				{ name: 'HashiCorp Certified: Terraform Authoring and Operations Professional', url: 'https://www.credly.com/org/hashicorp/badge/hashicorp-certified-terraform-authoring-and-operati.1', img: 'https://images.credly.com/size/340x340/images/246f2175-5dc3-4c17-ad9c-cba39f2deef6/blob'},
				{ name: 'Certified Kubernetes Administrator (CKA)', url: 'https://www.cncf.io/training/certification/cka/', img: 'https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png'},
				{ name: 'Kubernetes Cluster Lifecycle Management', url: 'https://university.platformengineering.org/kubernetes-cluster-lifecycle-management-in-platform-engineering', img: 'https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F5450glz3ab58e5up7yv83exmo%2Fpublic%2F1750418609%2Fpe-badge.1750418608783.png'}
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
						{ id: 'grafana-lgtm', title: 'Grafana LGTM Stack', description: 'Complete observability with Grafana, Loki, Tempo, and Prometheus.', url: 'https://www.udemy.com/course/grafana-prometheus-loki-alloy-tempo', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/grafana.svg' },
						{ id: 'k8s-monitoring', title: 'Monitoring in Kubernetes', description: 'Advanced Kubernetes monitoring, metrics, and alerting strategies.', url: 'https://www.educative.io/courses/advanced-kubernetes-techniques', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/kubernetes.svg' },
						{ id: 'sre', title: 'Site Reliability Engineering', description: 'SRE principles, incident response, and system reliability practices.', url: 'https://www.coursera.org/learn/site-reliability-engineering-slos', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/googlechrome.svg' }
					]
				},
				{
					title: "DevSecOps & Agile",
				items: [
						{ id: 'k8s-devsecops', title: 'Kubernetes DevOps & Security', description: 'Security scanning, policy enforcement, and secure K8s deployments.', url: 'https://kodekloud.com/courses/devsecops', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/kubernetes.svg' },
						{ id: 'agile', title: 'Agile', description: 'Agile methodologies, Scrum, and project management with Jira.', url: 'https://www.coursera.org/learn/agile-atlassian-jira', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/jira.svg' },
						{ id: 'microservices', title: 'Microservices', description: 'Microservices architecture patterns and implementation in Go.', url: 'https://www.udemy.com/course/working-with-microservices-in-go', icon: '/microservices.svg' },
						{ id: 'test-driven-development', title: 'Test-driven Development (TDD)', description: 'Test-first programming methodology and automated testing practices.', url: 'https://www.udemy.com/course/test-first-programming', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/testcafe.svg' }
					]
				}
			],
			certifications: [
				{ name: 'Observability for Platform Engineering', url: 'https://university.platformengineering.org/observability-for-platform-engineering', img: 'https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F5450glz3ab58e5up7yv83exmo%2Fpublic%2F1750425033%2Fpe-badge+%282%29.1750425033270.png'},
				{ name: 'Platform Engineering Leadership', url: 'https://university.platformengineering.org/platform-engineering-leadership', img: '/leadership-badge.png'},
				{ name: 'PMI Agile Certified Practitioner (PMI-ACP)', url: 'https://www.pmi.org/certifications/agile-acp', img: 'https://images.credly.com/size/340x340/images/884f1605-f439-4b0d-ba7c-76a921266d45/blob'}
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
					{ id: 'redis', title: 'Redis/Valkey Administration', description: 'In-memory data structure store for caching and real-time applications.', url: 'https://www.educative.io/courses/complete-guide-to-redis', icon: 'https://www.svgrepo.com/show/394393/redis.svg' },
					{ id: 'nosql', title: 'NoSQL Database Design & Optimization', description: 'Document, key-value, and graph database design patterns and performance tuning.', url: 'https://www.datacamp.com/courses/introduction-to-nosql', icon: 'https://www.svgrepo.com/show/381235/storage-drive-hard-hard-disk-disk.svg' },
					{ id: 'mongodb', title: 'MongoDB', description: 'Document-oriented NoSQL database for flexible data modeling and scaling.', url: 'https://www.coursera.org/learn/introduction-to-mongodb', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mongodb.svg' },
					{ id: 'truenas', title: 'TrueNAS', description: 'Network-attached storage solution for enterprise data management and backup.', url: 'https://www.udemy.com/course/truenas-fundamentals-for-beginners', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/truenas.svg' },
					{ id: 'vault', title: 'Secrets Management (Vault)', description: 'Secure secrets storage, encryption, and access management for applications.', url: 'https://www.udemy.com/course/hashicorp-vault', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/vault.svg' }
				]
				},
				{
					title: "Mathematics & AI/ML",
				items: [
						{ id: 'maths', title: 'Maths Introduction', description: 'Logic, equations, and functions.', url: 'https://hyperskill.org/courses/57-introduction-to-math', icon: 'https://www.svgrepo.com/show/210612/maths-add.svg' },
						{ id: 'data', title: 'Algorithms and Data Structures', description: 'Algorithmic thinking, data manipulation, and enhance problem-solving skills.', url: 'https://hyperskill.org/courses/41-computer-algorithms-and-data-structures', icon: 'https://www.svgrepo.com/show/495209/data-2.svg' },
						{ id: 'llm', title: 'LLM Integration', description: 'Large Language Model integration, prompt engineering, and AI application development.', url: 'https://www.udemy.com/course/llm-engineering', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/openai.svg' },
						{ id: 'mlops', title: 'Machine Learning Operations (MLOps)', description: 'ML model deployment, monitoring, and lifecycle management in production.', url: 'https://www.datacamp.com/tracks/mlops-fundamentals', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tensorflow.svg' }
					]
			}
		],
			certifications: [
				{ name: 'HashiCorp Certified: Vault Associate', url: 'https://www.credly.com/org/hashicorp/badge/hashicorp-certified-vault-associate-003', img: 'https://images.credly.com/size/340x340/images/db3ed794-8b04-48c0-a49e-3e1f64e78b55/blob'}
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
					{ id: 'svelte-tailwind', title: 'Svelte & Tailwind', description: 'Modern reactive web development with Svelte framework and Tailwind CSS.', url: 'https://www.educative.io/courses/building-reactive-apps-with-svelte-and-tailwind', icon: 'https://www.svgrepo.com/show/487218/code.svg' },
					{ id: 'sveltekit', title: 'Svelte 5 & SvelteKit', description: 'Full-stack web application development with SvelteKit framework.', url: 'https://www.udemy.com/course/practical-sveltekit-guide-build-and-deploy-real-world-apps', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/svelte.svg' },
					{ id: 'design-patterns', title: 'Design Patterns', description: 'Software design patterns and architectural principles in Go programming.', url: 'https://www.udemy.com/course/working-with-design-patterns-in-go-golang', icon: 'https://www.svgrepo.com/show/428788/pattern-architecture-8.svg' },
					{ id: 'auth', title: 'Authentication', description: 'OAuth, JWT, and enterprise authentication systems implementation.', url: 'https://www.udemy.com/course/enterprise-oauth-for-developers', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/auth0.svg' }
				]
				},
				{
					title: "Architecture & Design",
				items: [
						{ id: 'ux', title: 'UI/UX best practices', description: 'User experience design principles and interface design best practices.', url: 'https://www.udemy.com/course/ultimate-guide-to-ux/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/figma.svg' },
						{ id: 'api-design', title: 'API design', description: 'RESTful API design, documentation, and versioning strategies.', url: 'https://www.pluralsight.com/paths/api-design-and-development', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/postman.svg' },
						{ id: 'microservices-arch', title: 'Microservices architecture', description: 'Event-driven architecture and distributed system design patterns.', url: 'https://www.udemy.com/course/the-complete-microservices-event-driven-architecture/', icon: '/microservices.svg' }
					]
				},
				{
					title: "AdTech",
				items: [
					{ id: 'programmatic', title: 'Programmatic advertising', description: 'Automated ad buying, real-time bidding, and advertising technology platforms.', url: 'https://www.udemy.com/course/programmatic-advertising-master-course/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/googleads.svg' },
					{ id: 'digital-marketing', title: 'Digital Marketing', description: 'Digital advertising strategies, campaign optimization, and performance analytics.', url: 'https://www.udemy.com/course/digital-advertising-marketing-301-the-professional-course', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/googleanalytics.svg' },
					{ id: 'ctr-prediction', title: 'Predicting CTR', description: 'Machine learning models for click-through rate prediction and optimization.', url: 'https://www.datacamp.com/courses/predicting-ctr-with-machine-learning-in-python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/python.svg' }
				]
			}
		],
			certifications: [
			]
		}
	];

	const currentPhase = $derived(phases.find(p => p.id === selectedPhase));
	const allItems = $derived(phases.flatMap(phase => phase.sections.flatMap(section => section.items)));
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
									{#if typeof item.icon === 'string'}
										<img src={item.icon} alt="{item.title} logo" class="w-6 h-6 icon-hover" />
									{:else}
										<svelte:component this={item.icon} class="w-6 h-6" style="color: var(--color-palette-light);" />
									{/if}
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
										certStatus === 'in-progress' ? 'background-color: var(--color-palette-faded-pink); color: var(--color-palette-pink); border: 2px solid var(--color-palette-pink);' : 
										'border: 2px solid var(--color-palette-light); color: var(--color-palette-light); background-color: transparent;'}">
									{certStatus === 'completed' ? '✅' : certStatus === 'in-progress' ? '⏳' : '❌'}
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
