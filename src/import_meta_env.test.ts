import import_meta_env_constants from '$lib/server/import_meta_env_constants';
import { describe, it, expect } from 'vitest';

describe('Greetings import.meta.env variable', () => {
	it('should be present', () => {
		let message = import_meta_env_constants.greeting();
		expect(message).toBeDefined();
		expect(message.length).toBeGreaterThanOrEqual(3);
	});
});
