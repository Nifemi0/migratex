import fs from 'fs';
import path from 'path';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { transformFileProvider } from '../../src/codemods/provider';

const FIXTURE_DIR = path.join(__dirname, '..', 'fixtures', 'provider');
const TMP_DIR = path.join(__dirname, 'tmp_provider');

describe('provider codemod (WagmiProvider -> WagmiConfig)', () => {
  beforeEach(() => {
    if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
  });

  afterEach(() => {
    if (fs.existsSync(TMP_DIR)) fs.rmSync(TMP_DIR, { recursive: true, force: true });
  });

  it('replaces named import and JSX tag', async () => {
    const before = fs.readFileSync(path.join(FIXTURE_DIR, 'before-provider.tsx'), 'utf8');
    const tmpFile = path.join(TMP_DIR, 'before-provider.tsx');
    fs.writeFileSync(tmpFile, before, 'utf8');

    const res = await transformFileProvider(tmpFile as any);
    expect(res.changed).toBe(true);

    const after = fs.readFileSync(tmpFile, 'utf8');
    const expected = fs.readFileSync(path.join(FIXTURE_DIR, 'after-provider.tsx'), 'utf8');
    expect(after.trim()).toBe(expected.trim());
  });
});
