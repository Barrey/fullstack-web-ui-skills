#!/usr/bin/env node

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import path from 'node:path';
import { SKILLS_REGISTRY, getAllSkills, getSkill } from '../src/registry.mjs';
import { loadSkillContent } from '../src/loader.mjs';
import { SUPPORTED_TARGETS, detectTargets, installSkillToTarget } from '../src/adapters.mjs';

// ANSI styling helpers
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  red: '\x1b[31m'
};

function banner() {
  console.log(`
${c.cyan}${c.bold}◆ fullstack-web-ui-skills${c.reset} ${c.dim}v1.0.0${c.reset}
${c.dim}Universal Agentic UI Design Skills for Antigravity, Cursor, OpenCode, Claude, Windsurf & Codex${c.reset}
`);
}

function printHelp() {
  banner();
  console.log(`${c.bold}USAGE:${c.reset}
  npx fullstack-web-ui-skills [command] [options]

${c.bold}COMMANDS:${c.reset}
  ${c.cyan}add <skill...>${c.reset}         Install one or more skills to your project
  ${c.cyan}add --all${c.reset}              Install all 11 skills at once
  ${c.cyan}list${c.reset}                   View all available skills and descriptions
  ${c.cyan}help${c.reset}                   Show this help message

${c.bold}OPTIONS:${c.reset}
  ${c.yellow}--target=<names>${c.reset}       Target platform(s) comma-separated:
                         ${c.dim}antigravity, cursor, opencode, claudecode, windsurf, codex, omp, all${c.reset}
                         ${c.dim}(Auto-detects your workspace editors if omitted)${c.reset}
  ${c.yellow}--all${c.reset}                  Select all skills

${c.bold}EXAMPLES:${c.reset}
  ${c.dim}# Interactive installer${c.reset}
  npx fullstack-web-ui-skills

  ${c.dim}# Install specific styles for Cursor & Antigravity${c.reset}
  npx fullstack-web-ui-skills add style-spatial-glass --target=cursor,antigravity

  ${c.dim}# Install full tri-factor system (style + structure + motion)${c.reset}
  npx fullstack-web-ui-skills add style-linear-dark landing-page-anatomy motion-choreography

  ${c.dim}# Install everything for all supported editors${c.reset}
  npx fullstack-web-ui-skills add --all --target=all
`);
}

function printList() {
  banner();
  console.log(`${c.bold}AVAILABLE SKILLS CATALOG:${c.reset}\n`);

  const categories = [
    { key: 'style', title: '🎨 VISUAL DESIGN STYLES' },
    { key: 'structure', title: '🏗️ STRUCTURAL ANATOMY' },
    { key: 'motion', title: '⚡ MOTION CHOREOGRAPHY' }
  ];

  for (const cat of categories) {
    console.log(`${c.yellow}${c.bold}${cat.title}${c.reset}`);
    const items = SKILLS_REGISTRY.filter(s => s.category === cat.key);
    for (const item of items) {
      console.log(`  ${c.cyan}${c.bold}${item.name.padEnd(26)}${c.reset} ${c.dim}${item.description}${c.reset}`);
    }
    console.log('');
  }
}

async function runInstaller(skillNames, targetIds, cwd = process.cwd()) {
  if (skillNames.length === 0) {
    console.log(`${c.red}Error: No skills specified to install.${c.reset}`);
    process.exit(1);
  }

  // Resolve target IDs
  let resolvedTargets = [];
  if (targetIds.includes('all')) {
    resolvedTargets = SUPPORTED_TARGETS.map(t => t.id);
  } else {
    resolvedTargets = targetIds.filter(id => SUPPORTED_TARGETS.some(t => t.id === id));
  }

  if (resolvedTargets.length === 0) {
    console.log(`${c.yellow}⚠️ No target editor detected in current directory.${c.reset}`);
    console.log(`${c.dim}Defaulting to Antigravity (.agents/skills/) & Cursor (.cursor/rules/).${c.reset}\n`);
    resolvedTargets = ['antigravity', 'cursor'];
  }

  console.log(`${c.bold}Installing ${skillNames.length} skill(s) across [${resolvedTargets.join(', ')}]...${c.reset}\n`);

  let installedCount = 0;
  for (const sName of skillNames) {
    const meta = getSkill(sName);
    if (!meta) {
      console.log(`  ${c.yellow}⚠️  Skipping unknown skill: '${sName}'${c.reset}`);
      continue;
    }

    try {
      process.stdout.write(`  ${c.dim}Loading ${meta.name}...${c.reset} `);
      const rawContent = await loadSkillContent(meta.name);
      process.stdout.write(`\r`);

      for (const target of resolvedTargets) {
        const outPath = await installSkillToTarget(target, meta, rawContent, cwd);
        const rel = path.relative(cwd, outPath);
        console.log(`  ${c.green}✓${c.reset} ${c.bold}${meta.name}${c.reset} ${c.dim}→${c.reset} ${c.cyan}${rel}${c.reset} ${c.dim}(${target})${c.reset}`);
        installedCount++;
      }
    } catch (err) {
      console.log(`  ${c.red}✗ Failed to install ${meta.name}: ${err.message}${c.reset}`);
    }
  }

  console.log(`\n${c.green}${c.bold}✨ Successfully installed ${installedCount} target file(s)!${c.reset}`);
  console.log(`${c.dim}You can now trigger these skills directly in your agent's chat prompt (e.g. "/${skillNames[0]}").${c.reset}\n`);
}

async function runInteractive() {
  banner();
  const rl = readline.createInterface({ input, output });

  try {
    console.log(`${c.bold}Select skills to install:${c.reset}`);
    SKILLS_REGISTRY.forEach((s, idx) => {
      console.log(`  ${c.cyan}[${(idx + 1).toString().padStart(2)}]${c.reset} ${s.name.padEnd(25)} ${c.dim}${s.description.slice(0, 50)}...${c.reset}`);
    });
    console.log(`  ${c.cyan}[ A]${c.reset} ${c.bold}Install ALL 11 skills${c.reset}\n`);

    const skillAnswer = await rl.question(`${c.yellow}Enter numbers separated by comma (or 'A' for all) [A]: ${c.reset}`);
    let chosenSkills = [];
    const trimmedSkillAnswer = skillAnswer.trim().toUpperCase();

    if (!trimmedSkillAnswer || trimmedSkillAnswer === 'A') {
      chosenSkills = SKILLS_REGISTRY.map(s => s.name);
    } else {
      const parts = trimmedSkillAnswer.split(',').map(p => p.trim());
      for (const p of parts) {
        const idx = parseInt(p, 10) - 1;
        if (idx >= 0 && idx < SKILLS_REGISTRY.length) {
          chosenSkills.push(SKILLS_REGISTRY[idx].name);
        }
      }
    }

    if (chosenSkills.length === 0) {
      console.log(`${c.red}No valid skills selected. Exiting.${c.reset}`);
      rl.close();
      return;
    }

    // Auto-detect targets first
    const autoDetected = await detectTargets(process.cwd());
    console.log(`\n${c.bold}Target Editors:${c.reset}`);
    SUPPORTED_TARGETS.forEach((t, idx) => {
      const isDetected = autoDetected.includes(t.id);
      const tag = isDetected ? `${c.green}(detected in workspace)${c.reset}` : '';
      console.log(`  ${c.cyan}[${idx + 1}]${c.reset} ${t.name} [${t.id}] ${tag}`);
    });
    console.log(`  ${c.cyan}[A]${c.reset} Install for ALL supported editors`);
    console.log(`  ${c.cyan}[D]${c.reset} Use auto-detected only ${c.dim}(${autoDetected.join(', ') || 'default'})${c.reset}\n`);

    const defaultChoice = autoDetected.length > 0 ? 'D' : 'A';
    const targetAnswer = await rl.question(`${c.yellow}Choose target editors [${defaultChoice}]: ${c.reset}`);
    const trimmedTarget = (targetAnswer.trim() || defaultChoice).toUpperCase();

    let chosenTargets = [];
    if (trimmedTarget === 'A') {
      chosenTargets = SUPPORTED_TARGETS.map(t => t.id);
    } else if (trimmedTarget === 'D') {
      chosenTargets = autoDetected.length > 0 ? autoDetected : ['antigravity', 'cursor'];
    } else {
      const parts = trimmedTarget.split(',').map(p => p.trim());
      for (const p of parts) {
        const idx = parseInt(p, 10) - 1;
        if (idx >= 0 && idx < SUPPORTED_TARGETS.length) {
          chosenTargets.push(SUPPORTED_TARGETS[idx].id);
        }
      }
    }

    rl.close();
    console.log('');
    await runInstaller(chosenSkills, chosenTargets);
  } catch (err) {
    rl.close();
    console.error(`\n${c.red}Error: ${err.message}${c.reset}`);
  }
}

// Main CLI entry point
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    await runInteractive();
    return;
  }

  const cmd = args[0].toLowerCase();

  if (cmd === '--help' || cmd === '-h' || cmd === 'help') {
    printHelp();
    return;
  }

  if (cmd === 'list' || cmd === 'ls') {
    printList();
    return;
  }

  if (cmd === 'add') {
    const rawOptions = args.slice(1);
    let targetArg = null;
    let isAll = false;
    const requestedSkills = [];

    for (const opt of rawOptions) {
      if (opt === '--all' || opt === '-a') {
        isAll = true;
      } else if (opt.startsWith('--target=')) {
        targetArg = opt.slice('--target='.length);
      } else if (opt === '--target') {
        // next arg is handled if present
      } else if (!opt.startsWith('--')) {
        requestedSkills.push(opt);
      }
    }

    const finalSkills = isAll ? SKILLS_REGISTRY.map(s => s.name) : requestedSkills;

    if (finalSkills.length === 0) {
      await runInteractive();
      return;
    }

    let targets = [];
    if (targetArg) {
      targets = targetArg.split(',').map(t => t.trim().toLowerCase());
    } else {
      targets = await detectTargets(process.cwd());
    }

    await runInstaller(finalSkills, targets);
    return;
  }

  // Fallback if user typed skill name directly e.g. `npx fullstack-web-ui-skills style-spatial-glass`
  if (getSkill(cmd) || cmd === '--all') {
    const isAll = cmd === '--all';
    const finalSkills = isAll ? SKILLS_REGISTRY.map(s => s.name) : [cmd];
    const targets = await detectTargets(process.cwd());
    await runInstaller(finalSkills, targets);
    return;
  }

  console.log(`${c.red}Unknown command: '${cmd}'${c.reset}\n`);
  printHelp();
  process.exit(1);
}

main().catch(err => {
  console.error(`\n${c.red}Fatal Error: ${err.message}${c.reset}`);
  process.exit(1);
});
