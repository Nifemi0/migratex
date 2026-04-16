import fs from 'fs';
import path from 'path';

export function generateReport(outDir: string, report: any) {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const jsonPath = path.join(outDir, 'migrate-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), 'utf8');

  // human summary
  const summary = [] as string[];
  summary.push(`Migration report`);
  summary.push(`Target: wagmi v2`);
  summary.push(`Files scanned: ${report.filesScanned ?? report.totalFilesScanned ?? 0}`);
  summary.push(`Files changed (imports): ${report.imports?.filesChanged ?? 0}`);
  summary.push(`Files changed (exports): ${report.renamedExports?.filesChanged ?? 0}`);
  summary.push(`Unresolved items: ${(report.unresolved || []).length}`);

  const txtPath = path.join(outDir, 'migrate-summary.txt');
  fs.writeFileSync(txtPath, summary.join('\n'), 'utf8');

  return { jsonPath, txtPath };
}

export default { generateReport };
