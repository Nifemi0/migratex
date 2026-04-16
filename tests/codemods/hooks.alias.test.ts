import fs from 'fs';
import path from 'path';
import { transformFileHookSignatures } from '../../src/codemods/hooks';
import { describe, it, expect } from 'vitest';

describe('hook signature codemod alias handling', () => {
  it('handles aliased imports', async () => {
    const cwd = process.cwd();
    const before = path.join(cwd, 'tests', 'fixtures', 'hooks', 'alias-before.tsx');
    const tmp = path.join(cwd, 'tests', 'fixtures', 'hooks', 'tmp.alias.before.tsx');
    fs.copyFileSync(before, tmp);

    const mapping = {
      useConnect: {
        onSuccess: 'onConnected',
        onError: 'onFailure'
      }
    } as any;

    const res = await transformFileHookSignatures(tmp, mapping);
    expect(res.changed).toBe(true);
    const afterText = fs.readFileSync(tmp, 'utf8');
    const expected = fs.readFileSync(path.join(cwd, 'tests', 'fixtures', 'hooks', 'alias-after.tsx'), 'utf8');
    expect(afterText.replace(/\s+/g, ' ').trim()).toBe(expected.replace(/\s+/g, ' ').trim());

    fs.unlinkSync(tmp);
  });
});
