import fs from 'fs';
import path from 'path';
import { transformFileHookSignatures } from '../../src/codemods/hooks';
import { describe, it, expect } from 'vitest';

describe('hook signature codemod spread handling', () => {
  it('skips object literal with spread properties', async () => {
    const cwd = process.cwd();
    const before = path.join(cwd, 'tests', 'fixtures', 'hooks', 'spread-before.tsx');
    const tmp = path.join(cwd, 'tests', 'fixtures', 'hooks', 'tmp.spread.before.tsx');
    fs.copyFileSync(before, tmp);

    const mapping = {
      useConnect: {
        onSuccess: 'onConnected'
      }
    } as any;

    const res = await transformFileHookSignatures(tmp, mapping);
    expect(res.changed).toBe(false);
    expect(res.diagnostics.length).toBeGreaterThan(0);

    const afterText = fs.readFileSync(tmp, 'utf8');
    const original = fs.readFileSync(before, 'utf8');
    expect(afterText).toBe(original);

    fs.unlinkSync(tmp);
  });
});
