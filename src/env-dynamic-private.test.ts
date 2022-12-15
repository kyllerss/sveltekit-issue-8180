import env_dynamic_private_constants from '$lib/server/env_dynamic_private_constants';
import { describe, it, expect } from 'vitest';

describe('Greetings $env/dynamic/private variable', () => {
	it('should be present', () => {
		let message = env_dynamic_private_constants.greeting();
		expect(message).toBeDefined();
		expect(message.length).toBeGreaterThanOrEqual(3);
	});
});
