import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_REPO = 'Barrey/fullstack-web-ui-skills';
const FALLBACK_BRANCHES = ['main', 'skill-landingpage-&-motion'];

export async function loadSkillContent(skillName) {
  // 1. Try local bundled package path
  const localCandidates = [
    path.resolve(__dirname, '..', '.agents', 'skills', skillName, 'SKILL.md'),
    path.resolve(__dirname, '..', '..', '.agents', 'skills', skillName, 'SKILL.md'),
    path.resolve(process.cwd(), '.agents', 'skills', skillName, 'SKILL.md')
  ];

  for (const candidate of localCandidates) {
    try {
      const data = await fs.readFile(candidate, 'utf-8');
      if (data && data.trim().length > 0) {
        return data;
      }
    } catch {
      // Continue to next candidate
    }
  }

  // 2. Fetch from GitHub Raw
  for (const branch of FALLBACK_BRANCHES) {
    const rawUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/${branch}/.agents/skills/${skillName}/SKILL.md`;
    try {
      const res = await fetch(rawUrl);
      if (res.ok) {
        const text = await res.text();
        if (text && text.trim().length > 0) {
          return text;
        }
      }
    } catch {
      // Try next branch
    }
  }

  throw new Error(`Unable to load skill content for '${skillName}'. Checked bundled package and remote GitHub raw URLs.`);
}
