import fs from 'fs';
import path from 'path';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { transformFileUseNetwork } from '../../src/codemods/useNetwork';

const FIXTURE_DIR = path.join(__dirname, '..', 'fixtures', 'use-network');
const TMP_DIR = path.join(__dirname, 'tmp_use_network');

describe('useNetwork codemod', () => {
  beforeEach(() => {
    if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
  });

  afterEach(() => {
    if (fs.existsSync(TMP_DIR)) fs.rmSync(TMP_DIR, { recursive: true, force: true });
  });

  it('rewrites { chain } = useNetwork() to useAccount()', async () => {
    const before = fs.readFileSync(path.join(FIXTURE_DIR, 'before-chain.tsx'), 'utf8');
    const tmpFile = path.join(TMP_DIR, 'before-chain.tsx');
    fs.writeFileSync(tmpFile, before, 'utf8');

    const res = await transformFileUseNetwork(tmpFile);
    expect(res.changed).toBe(true);

    const after = fs.readFileSync(tmpFile, 'utf8');
    const normalized = after.replace(/\s+/g, ' ').trim();
    expect(normalized).toContain("import { useAccount } from 'wagmi';");
    expect(normalized).toContain("const { chain } = useAccount()");
    expect(normalized).not.toContain("useNetwork");
  });

  it('rewrites { chains } = useNetwork() to useConfig()', async () => {
    const before = fs.readFileSync(path.join(FIXTURE_DIR, 'before-chains.tsx'), 'utf8');
    const tmpFile = path.join(TMP_DIR, 'before-chains.tsx');
    fs.writeFileSync(tmpFile, before, 'utf8');

    const res = await transformFileUseNetwork(tmpFile);
    expect(res.changed).toBe(true);

    const after = fs.readFileSync(tmpFile, 'utf8');
    const normalized = after.replace(/\s+/g, ' ').trim();
    expect(normalized).toContain("import { useConfig } from 'wagmi';");
    expect(normalized).toContain("const { chains } = useConfig()");
    expect(normalized).not.toContain("useNetwork");
  });
});
