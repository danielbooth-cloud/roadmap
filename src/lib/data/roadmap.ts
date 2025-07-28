// Centralized roadmap data
export interface Course {
	id: string;
	title: string;
	description: string;
	url: string;
	icon?: string;
}

export interface Certification {
	name: string;
	url: string;
	img: string;
}

export interface Section {
	title: string;
	items: Course[];
}

export interface Phase {
	id: number;
	title: string;
	description: string;
	sections: Section[];
	certifications: Certification[];
}

// Progress tracking - update these sets to manage your learning status
export const completedItems = new Set<string>([]);

export const inProgressItems = new Set<string>([
	'go-fundamentals'
]);

export const completedCertifications = new Set<string>([
	// Example: 'Platform Engineering Leadership'
]);

// All learning phases and their content
export const phases: Phase[] = [
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
					{ id: 'data', title: 'Algorithms and Data Structures', description: 'Algorithmic thinking, data manipulation, and problem-solving skills.', url: 'https://hyperskill.org/courses/41-computer-algorithms-and-data-structures', icon: 'https://www.svgrepo.com/show/495209/data-2.svg' },
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
		certifications: []
	}
];

// Helper functions
export function getItemStatus(itemId: string): 'completed' | 'in-progress' | 'pending' {
	if (completedItems.has(itemId)) return 'completed';
	if (inProgressItems.has(itemId)) return 'in-progress';
	return 'pending';
}

export function getCertificationStatus(certName: string): 'completed' | 'pending' {
	if (completedCertifications.has(certName)) return 'completed';
	return 'pending';
}

export function getPhaseProgress(phaseItems: Array<{id: string}>): number {
	const completed = phaseItems.filter(item => completedItems.has(item.id)).length;
	return Math.round((completed / phaseItems.length) * 100);
}

export const allItems = phases.flatMap(phase => phase.sections.flatMap(section => section.items));