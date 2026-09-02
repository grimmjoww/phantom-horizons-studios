# Phantom Horizon Studios

I build the glue that makes AI agents useful: tools, memory, retrieval, lifecycle hooks, and the checks that keep multi-step work from quietly going sideways.

My work sits between a capable model and a dependable system. I focus on MCP and tool integrations, persistent memory, RAG, agent workflows, repository-based implementation, debugging, verification, and rollback.

## What I Build

- MCP servers and agent-tool integrations
- Persistent memory, semantic retrieval, and RAG workflows
- Lifecycle hooks that recall context, capture useful state, or enforce procedures
- Single-agent and multi-agent workflows with clear responsibilities
- Safer migrations, compatibility checks, backups, and rollback paths
- Technical documentation that explains what works, what is still experimental, and how to verify it

## Selected Work

### [Hindsight Installer MCP](https://github.com/grimmjoww/hindsight-installer-mcp)

**Status: Alpha; core workflows tested on Windows 11 and PostgreSQL 17.**

An MCP server that lets compatible agents inspect a Hindsight installation, manage Postgres extensions, migrate embedding pipelines, verify recall, and perform reversible upgrades. It includes mode detection, backup-aware migrations, compatibility checks, and rollback behavior.

### [VectorChord Windows Port](https://github.com/grimmjoww/vchord-windows-port)

**Status: Validated on the documented Windows and PostgreSQL configurations.**

Native Windows build documentation and helper scripts for VectorChord, plus an end-to-end Hindsight embedding migration workflow. The repository documents version-specific build failures, installation steps, smoke tests, and an Ollama-based reindex workaround.

### [Hermes Superpowers Plugin](https://github.com/grimmjoww/hermes-superpowers-plugin)

**Status: Working plugin with 9/9 documented pre-ship checks passing on the tested profile.**

An always-on Hermes Agent plugin that injects procedural discipline before the first model call and exposes the canonical Superpowers skills through Hermes-native tools. The repository preserves upstream attribution and separates the original skill content from my plugin wrapper and compatibility work.

### [Claude Code + memU](https://github.com/grimmjoww/claude-code-memu)

**Status: Prototype / active development.**

A Python MCP and lifecycle-hook integration for persistent memU-backed memory in Claude Code. The project includes configuration, server logic, hook runners, and tests for automatic recall and capture behavior.

### [OpenClaw + memU](https://github.com/grimmjoww/openclaw-memu)

**Status: Active development; not yet published to npm or ClawHub.**

A TypeScript memory plugin that connects OpenClaw lifecycle hooks to memU-server. It supports automatic recall before a turn, automatic capture after a turn, memory tools, and a CLI surface.

### [Phantom Horizon Studios](https://github.com/grimmjoww/phantom-horizons-studios)

**Status: Studio and portfolio hub.**

The umbrella for my agent-systems work, creative AI experiments, applications, games, and original media projects.

## How I Work

I use an AI-assisted engineering workflow. I turn the desired outcome into constraints and acceptance criteria, direct coding agents through research and implementation, inspect repository changes and outputs, run tests, diagnose failures, and keep iterating until the agreed evidence is there.

That means I am comfortable entering an unfamiliar repository, figuring out how the pieces connect, and turning a vague problem into a testable plan. I care about the unglamorous parts too: logs, failure handling, documentation, compatibility, cost, and rollback.

## Technical Background

Before moving into AI systems, I spent more than 12 years in the U.S. military across electrical systems, technical troubleshooting, welding and fabrication, operations, and travel-program administration. I supported a command-wide travel program serving approximately 300–400 travelers while also working in safety-critical technical environments.

That background still shapes how I approach software: isolate the fault, follow the evidence, document the work, and make sure the whole system functions—not only the demo.

## Creative Technology

Phantom Horizon Studios also explores creative AI, game systems, interactive characters, worldbuilding, music, and original storytelling. That work is a secondary lane here; this portfolio leads with agent systems and technical integrations.

## Contact

For freelance agent-system work, visit my [Upwork profile](https://www.upwork.com/freelancers/~015b0cc21b994e6c8d).
