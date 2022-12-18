import { describe, it, expect } from 'vitest';
import db_service from './db/db_service';

describe('Greetings $env/dynamic/private variable', () => {
	it('should not cause the test to blow-up', () => {
		db_service.update_database();
	});
});
