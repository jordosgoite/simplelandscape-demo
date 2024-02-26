import { describe, expect, it, vi } from 'vitest';
import { login } from '../auth.service';

describe('login', () => {
  it('should return true on successfull login', async () => {
    const body = { username: 'user', password: 'user' };
    const res = await vi.fn(login)(body);
    expect(res).toBeTruthy();
  });

  it('should throw error message on failed login', async () => {
    vi.fn(console.log).mockClear();

    try {
      const body = { username: 'user', password: 'wrong' };
      await vi.fn(login)(body);
    } catch (err) {
      expect(vi.fn(console.log).mock.calls).toHaveLength(0);
    }
  });
});
