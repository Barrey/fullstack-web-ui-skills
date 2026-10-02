import fs from 'node:fs/promises';
import path from 'node:path';

export const SUPPORTED_TARGETS = [
  { id: 'antigravity', name: 'Google Antigravity / Gemini CLI', folder: '.agents' },
  { id: 'cursor', name: 'Cursor Rules (.mdc)', folder: '.cursor' },
  { id: 'opencode', name: 'OpenCode Skills', folder: '.opencode' },
  { id: 'claudecode', name: 'Claude Code', folder: '.claude' },
  { id: 'windsurf', name: 'Windsurf Cascade Rules', folder: '.windsurf' },
  { id: 'codex', name: 'GitHub Copilot / Codex', folder: '.github' },
  { id: 'omp', name: 'Open Multi-Platform (OMP)', folder: '.omp' }
];

export async function detectTargets(cwd = process.cwd()) {
  const detected = [];

  const checks = [
    { id: 'antigravity', paths: ['.agents'] },
    { id: 'cursor', paths: ['.cursor'] },
    { id: 'opencode', paths: ['.opencode'] },
    { id: 'claudecode', paths: ['.claude', 'CLAUDE.md'] },
    { id: 'windsurf', paths: ['.windsurf', '.windsurfrules'] },
    { id: 'codex', paths: ['.github', '.github/copilot-instructions.md'] },
    { id: 'omp', paths: ['.omp'] }
  ];

  for (const check of checks) {
    for (const rel of check.paths) {
      try {
        await fs.access(path.join(cwd, rel));
        detected.push(check.id);
        break;
      } catch {
        // Not present
      }
    }
  }

  return detected;
}

function parseMarkdownFrontmatter(rawContent) {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: rawContent.trim() };
  }

  const fmRaw = match[1];
  const body = match[2].trim();
  const frontmatter = {};

  for (const line of fmRaw.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      const val = line.slice(colonIdx + 1).trim();
      frontmatter[key] = val;
    }
  }

  return { frontmatter, body };
}

export async function installSkillToTarget(targetId, skillMeta, rawContent, cwd = process.cwd()) {
  const { frontmatter, body } = parseMarkdownFrontmatter(rawContent);
  const description = skillMeta.description || frontmatter.description || skillMeta.title;

  switch (targetId) {
    case 'antigravity': {
      const outDir = path.join(cwd, '.agents', 'skills', skillMeta.name);
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, 'SKILL.md');
      await fs.writeFile(outFile, rawContent.trim() + '\n', 'utf-8');
      return outFile;
    }

    case 'cursor': {
      const outDir = path.join(cwd, '.cursor', 'rules');
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, `${skillMeta.name}.mdc`);
      const cursorMdc = `---
description: ${description}
globs: **/*
alwaysApply: false
---

${body}
`;
      await fs.writeFile(outFile, cursorMdc.trim() + '\n', 'utf-8');
      return outFile;
    }

    case 'opencode': {
      const outDir = path.join(cwd, '.opencode', 'skills', skillMeta.name);
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, 'SKILL.md');
      await fs.writeFile(outFile, rawContent.trim() + '\n', 'utf-8');
      return outFile;
    }

    case 'claudecode': {
      const outDir = path.join(cwd, '.claude', 'skills', skillMeta.name);
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, 'SKILL.md');
      await fs.writeFile(outFile, rawContent.trim() + '\n', 'utf-8');
      return outFile;
    }

    case 'windsurf': {
      const outDir = path.join(cwd, '.windsurf', 'rules');
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, `${skillMeta.name}.md`);
      await fs.writeFile(outFile, rawContent.trim() + '\n', 'utf-8');
      return outFile;
    }

    case 'omp': {
      const outDir = path.join(cwd, '.omp', 'skills', skillMeta.name);
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, 'SKILL.md');
      await fs.writeFile(outFile, rawContent.trim() + '\n', 'utf-8');
      return outFile;
    }

    case 'codex': {
      const outDir = path.join(cwd, '.github');
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, 'copilot-instructions.md');

      let current = '';
      try {
        current = await fs.readFile(outFile, 'utf-8');
      } catch {
        current = '# Workspace Guidelines\n\n';
      }

      const startTag = `<!-- START_SKILL: ${skillMeta.name} -->`;
      const endTag = `<!-- END_SKILL: ${skillMeta.name} -->`;
      const block = `${startTag}\n## Skill: ${skillMeta.title}\n> ${description}\n\n${body}\n${endTag}`;

      const regex = new RegExp(`${startTag}[\\s\\S]*?${endTag}`, 'g');
      if (regex.test(current)) {
        current = current.replace(regex, block);
      } else {
        current = current.trim() + '\n\n' + block + '\n';
      }

      await fs.writeFile(outFile, current.trim() + '\n', 'utf-8');
      return outFile;
    }

    default:
      throw new Error(`Unsupported target platform: '${targetId}'`);
  }
}
