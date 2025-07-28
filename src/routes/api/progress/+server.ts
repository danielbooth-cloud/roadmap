import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { phases, allItems, getItemStatus } from '$lib/data/roadmap';

export const GET: RequestHandler = async () => {
	const allItemsWithStatus = allItems.map(item => {
		const phase = phases.find(p => p.sections.some(s => s.items.some(i => i.id === item.id)));
		const section = phase?.sections.find(s => s.items.some(i => i.id === item.id));
		
		return {
			...item,
			status: getItemStatus(item.id),
			phase: phase?.title || 'Unknown',
			section: section?.title || 'Unknown'
		};
	});

	const inProgress = allItemsWithStatus.filter(item => item.status === 'in-progress');
	const completed = allItemsWithStatus.filter(item => item.status === 'completed');
	const pending = allItemsWithStatus.filter(item => item.status === 'pending');

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