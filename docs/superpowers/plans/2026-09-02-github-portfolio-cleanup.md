# GitHub Portfolio Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Willie's GitHub account into inspectable proof of AI-agent systems work without hiding provenance, overstating maturity, or disrupting working repositories.

**Architecture:** Use `phantom-horizons-studios` as the central portfolio index and improve featured repositories through documentation-only review branches. Each repository receives concise problem, architecture, contribution, status, verification, and evaluation sections appropriate to its evidence.

**Tech Stack:** GitHub, Markdown, Mermaid-compatible diagrams, repository metadata, pull requests

**Spec:** `docs/superpowers/specs/2026-09-02-marketability-overhaul-design.md`

## Global Constraints

- Make changes on dedicated branches and open pull requests.
- Do not delete, archive, force-push, expose, or rewrite private repositories.
- Do not present forks as original products.
- Preserve upstream attribution, license information, and project status.
- Do not expose secrets, credentials, private paths, personal tokens, or malware-related code.
- Keep agent systems as the primary professional lane and creative AI as a secondary studio lane.
- Every factual claim must be traceable to repository content, history, tests, or a clearly labeled user-provided fact.

---

### Task 1: Create the Central Portfolio Index

**Files:**
- Create: `README.md` in `grimmjoww/phantom-horizons-studios`

**Interfaces:**
- Consumes: featured repository evidence and approved positioning
- Produces: central GitHub portfolio landing page

- [ ] **Step 1: Create branch `portfolio-index` from `main`**

- [ ] **Step 2: Write the portfolio README**

The README must contain these sections in this order:

```markdown
# Phantom Horizon Studios
One-sentence positioning

## What I Build
Agent systems, memory/retrieval, MCP/tooling, reliability workflows

## Selected Work
Six concise project cards with status and links

## How I Work
Requirements, coding-agent direction, tests, diagnosis, evidence, rollback

## Technical Background
Military technical operations and program administration in supporting context

## Creative Technology
Secondary lane only

## Contact
Upwork profile link
```

- [ ] **Step 3: Verify all repository links**

Required links:

```text
grimmjoww/hindsight-installer-mcp
grimmjoww/vchord-windows-port
grimmjoww/hermes-superpowers-plugin
grimmjoww/claude-code-memu
grimmjoww/openclaw-memu
grimmjoww/phantom-horizons-studios
```

- [ ] **Step 4: Open a pull request**

Title:

```text
docs: turn studio repository into a professional portfolio index
```

### Task 2: Document Claude Code memU Integration

**Files:**
- Create: `README.md` in `grimmjoww/claude-code-memu`

**Interfaces:**
- Consumes: `config.py`, `server.py`, `hooks/`, `tests/`, `pyproject.toml`, and repository description
- Produces: complete public project explanation

- [ ] **Step 1: Create branch `docs/portfolio-readme` from `main`**

- [ ] **Step 2: Inspect the implementation surface**

Confirm the repository contains:

```text
config.py
server.py
hooks/
tests/
pyproject.toml
run-hook.cmd
```

- [ ] **Step 3: Write the README**

The README must include:

```markdown
# Claude Code + memU
Status badge: prototype or active development
Problem
What it does
Architecture
Lifecycle hooks
MCP tool surface
Configuration
Testing
Limitations
My role and workflow
License/provenance
```

Do not call the project published, production-ready, or generally available unless repository evidence proves it.

- [ ] **Step 4: Open a pull request**

Title:

```text
docs: add client-readable architecture and status documentation
```

### Task 3: Add a Portfolio Case Study to Hindsight Installer MCP

**Files:**
- Create: `PORTFOLIO.md` in `grimmjoww/hindsight-installer-mcp`

**Interfaces:**
- Consumes: current README, tool list, backup/migration/verification behavior
- Produces: short case study for Upwork and GitHub visitors

- [ ] **Step 1: Create branch `docs/portfolio-case-study` from `main`**

- [ ] **Step 2: Write the case study**

Required sections:

```markdown
# Safe Hindsight Embedding Upgrade MCP
Client problem
System responsibilities
Safety and rollback controls
Representative workflow
Verification evidence
Current status
What I contributed
```

- [ ] **Step 3: Cross-check every tool name against the README**

Expected examples include:

```text
detect_postgres_mode
install_extension
upgrade_embedding_pipeline
migrate_embeddings
verify_recall
validate_compatibility
safe_upgrade_hindsight
```

- [ ] **Step 4: Open a pull request**

Title:

```text
docs: add portfolio case study for safe agent-driven upgrades
```

### Task 4: Add a Portfolio Case Study to VectorChord Windows Port

**Files:**
- Create: `PORTFOLIO.md` in `grimmjoww/vchord-windows-port`

**Interfaces:**
- Consumes: current README, build docs, scripts, smoke test, validated configuration
- Produces: client-readable integration case study

- [ ] **Step 1: Create branch `docs/portfolio-case-study` from `main`**

- [ ] **Step 2: Write the case study**

Required sections:

```markdown
# Native Windows VectorChord Integration
Problem
Constraints
Approach
Failure diagnosis
Automation and helper scripts
Validated configuration
Result
What I contributed
```

- [ ] **Step 3: Preserve exact status language**

Use `validated on the stated Windows/PostgreSQL configuration`, not `production-ready on every Windows system`.

- [ ] **Step 4: Open a pull request**

Title:

```text
docs: add portfolio case study for Windows-native vector search
```

### Task 5: Add a Portfolio Case Study to Hermes Superpowers Plugin

**Files:**
- Create: `PORTFOLIO.md` in `grimmjoww/hermes-superpowers-plugin`

**Interfaces:**
- Consumes: current README, hook behavior, tool map, 9/9 pre-ship check claim
- Produces: client-readable reliability case study

- [ ] **Step 1: Create branch `docs/portfolio-case-study` from `master`**

- [ ] **Step 2: Write the case study**

Required sections:

```markdown
# Always-On Procedure Enforcement for Hermes Agent
Problem
Design decision
Hook behavior
Compatibility mapping
Verification
Provenance
What I contributed
```

- [ ] **Step 3: Preserve upstream attribution**

Name `obra/superpowers` as the source of canonical skill content and distinguish it from Willie's plugin wrapper and Hermes adaptation.

- [ ] **Step 4: Open a pull request**

Title:

```text
docs: add portfolio case study for agent procedure enforcement
```

### Task 6: Clarify OpenClaw memU Project Status

**Files:**
- Modify: `README.md` in `grimmjoww/openclaw-memu`

**Interfaces:**
- Consumes: current README, plugin manifest, source, tests, active-development status
- Produces: stronger explanation without maturity inflation

- [ ] **Step 1: Create branch `docs/portfolio-readme` from `master`**

- [ ] **Step 2: Fetch the current README blob SHA**

- [ ] **Step 3: Add these sections without removing existing install details**

```markdown
## Problem this solves
## Design
## Verification status
## Current limitations
## My role and workflow
```

- [ ] **Step 4: Preserve the active-development warning**

Keep the project explicitly labeled as not yet published to npm or ClawHub.

- [ ] **Step 5: Open a pull request**

Title:

```text
docs: clarify architecture, verification, and project status
```

### Task 7: Verify the Portfolio Changes

**Files:**
- Review: all pull-request diffs from Tasks 1–6

**Interfaces:**
- Consumes: six documentation pull requests
- Produces: verification report and merge recommendations

- [ ] **Step 1: Fetch every PR diff**

- [ ] **Step 2: Search for unsupported phrases**

Reject or revise occurrences of:

```text
production-ready
enterprise-grade
fully autonomous
guaranteed
cutting-edge
best-in-class
```

unless a specific claim is directly evidenced and scoped.

- [ ] **Step 3: Check all links and branch targets**

- [ ] **Step 4: Verify private repository names or sensitive local details were not introduced**

- [ ] **Step 5: Produce a merge recommendation per PR**

Use one of:

```text
Ready to merge
Ready after wording fix
Hold for technical verification
```
