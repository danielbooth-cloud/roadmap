import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// This mirrors the data from your main page - keep this in sync
const completedItems = new Set<string>([]);

const inProgressItems = new Set<string>([
	'go-fundamentals'
]);

const phases = [
	{
		id: 1,
		title: "Foundation",
		sections: [
			{
				title: "Core Programming",
				items: [
					{ id: 'go-fundamentals', title: 'Go Programming Fundamentals', description: 'Learn Go syntax, concurrency, and build robust backend applications.', url: 'https://hyperskill.org/courses/81-introduction-to-go' },
					{ id: 'go-advanced', title: 'Advanced Go', description: 'Master advanced Go patterns, performance optimization, and microservices.', url: 'https://hyperskill.org/courses/25-go-developer' },
					{ id: 'js-basics', title: 'JavaScript/TypeScript Basics', description: 'Foundation in modern JavaScript and TypeScript for web development.', url: 'https://www.educative.io/courses/learn-html-css-javascript-from-scratch' },
					{ id: 'typescript', title: 'TypeScript', description: 'Type-safe JavaScript development with advanced TypeScript features.', url: 'https://www.udemy.com/course/understanding-typescript' },
					{ id: 'tailwind', title: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development.', url: 'https://www.udemy.com/course/tailwind-from-scratch' },
					{ id: 'cleancode', title: 'Clean Code', description: 'Learn how to write readable, understandable and therefore maintainable code.', url: 'https://www.udemy.com/course/writing-clean-code' }
				]
			},
			{
				title: "SysOps Fundamentals",
				items: [
					{ id: 'linux-admin', title: 'Linux System Administration', description: 'Master Linux server management, shell scripting, and system security.', url: 'https://www.udemy.com/course/complete-linux-training-course-to-get-your-dream-it-job' },
					{ id: 'networking', title: 'Networking Concepts', description: 'Essential networking protocols, routing, and network troubleshooting.', url: 'https://www.udemy.com/course/essential-computer-networking-for-devops-cloud-and-more/' },
					{ id: 'ccna', title: 'CCNA', description: 'Cisco networking fundamentals, switching, routing, and network security.', url: 'https://www.udemy.com/course/ccna-complete' }
				]
			},
			{
				title: "CI/CD & Version Control", 
				items: [
					{ id: 'git-advanced', title: 'Git Advanced Workflows', description: 'Advanced Git branching, merging strategies, and collaborative workflows.', url: 'https://www.datacamp.com/courses/advanced-git' },
					{ id: 'cicd', title: 'CI/CD', description: 'Continuous integration and deployment pipelines for automated software delivery.', url: 'https://www.codecademy.com/learn/ext-courses/devsecops-in-continuous-integration-delivery-ci-cd' },
					{ id: 'gitlab-cicd', title: 'GitLab CI/CD', description: 'GitLab pipelines, runners, and DevOps automation workflows.', url: 'https://kodekloud.com/courses/gitlab-ci-cd' },
					{ id: 'github-actions', title: 'GitHub Actions', description: 'Automate workflows with GitHub Actions for testing and deployment.', url: 'https://kodekloud.com/courses/github-actions' }
				]
			}
		]
	}
];

function getItemStatus(itemId: string): 'completed' | 'in-progress' | 'pending' {
	if (completedItems.has(itemId)) return 'completed';
	if (inProgressItems.has(itemId)) return 'in-progress';
	return 'pending';
}

export const GET: RequestHandler = async () => {
	const allItems = phases.flatMap(phase => 
		phase.sections.flatMap(section => 
			section.items.map(item => ({
				...item,
				status: getItemStatus(item.id),
				phase: phase.title,
				section: section.title
			}))
		)
	);

	const inProgress = allItems.filter(item => item.status === 'in-progress');
	const completed = allItems.filter(item => item.status === 'completed');
	const pending = allItems.filter(item => item.status === 'pending');

	const response = {
		inProgress,
		completed,
		pending,
		stats: {
			total: allItems.length,
			completedCount: completed.length,
			inProgressCount: inProgress.length,
			pendingCount: pending.length,
			overallProgress: Math.round((completed.length / allItems.length) * 100)
		},
		lastUpdated: new Date().toISOString()
	};

	return json(response);
};