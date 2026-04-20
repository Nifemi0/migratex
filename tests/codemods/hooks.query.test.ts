import fs from 'fs';
import path from 'path';
import { transformFileHookSignatures } from '../../src/codemods/hooks';
import { describe, it, expect } from 'vitest';

describe('hook query option nesting codemod', () => {
  it('moves top-level query options under query', async () => {
    const cwd = process.cwd();
    const before = path.join(cwd, 'tests', 'fixtures', 'hooks', 'query-before.tsx');
    const tmp = path.join(cwd, 'tests', 'fixtures', 'hooks', 'tmp.query.before.tsx');
    fs.copyFileSync(before, tmp);

    const res = await transformFileHookSignatures(tmp, {});
    expect(res.changed).toBe(true);
    const afterText = fs.readFileSync(tmp, 'utf8');
    const normalized = afterText.replace(/\s+/g, ' ').trim();
    expect(normalized).toContain("query: { enabled: true, staleTime: 1_000 }");
    expect(normalized).not.toContain("enabled: true, staleTime: 1_000,");

    fs.unlinkSync(tmp);
  });
});
