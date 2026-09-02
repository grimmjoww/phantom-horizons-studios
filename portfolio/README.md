# AI Agent Systems Portfolio

Selected public integration and reliability work directed by **Willie Stewart / Phantom Horizon Studios**.

These case studies describe public repositories and the engineering workflow behind them. The work is AI-assisted and human-directed: Willie defines the outcome and safety constraints, directs coding agents through implementation, reviews changes and evidence, diagnoses failures, and coordinates revisions.

---

## 1. Safe Hindsight Embedding Upgrade MCP

**Repository:** [hindsight-installer-mcp](https://github.com/grimmjoww/hindsight-installer-mcp)

### Problem

Upgrading the embedding stack of a populated agent-memory system can require coordinated changes across Hindsight, Postgres, vector extensions, dimensions, environment configuration, re-embedding, validation, and recovery. Performing those steps manually is error-prone; giving an agent unrestricted shell access is difficult to audit.

### Solution

A stdio MCP server exposes narrow operational tools for detecting the Postgres mode, managing extensions, inspecting Hindsight state, changing configuration, migrating embeddings, verifying recall, validating compatibility, backing up, upgrading, and rolling back.

### Reliability design

- Inspect state before mutation.
- Distinguish user-space `pg0` from system Postgres.
- Surface elevation requirements instead of hiding them.
- Pair migration with backup and recall verification.
- Test compatibility before attempting an upgrade.
- Preserve rollback when post-flight checks fail.

### Willie's role

Defined the desired one-prompt operator workflow and its safety boundaries, directed the implementation, tested behavior in a Windows Hindsight environment, diagnosed integration failures, and iterated on the tool and documentation design.

### Evidence and status

The public repository contains the MCP implementation, compatibility data, migration tooling, smoke tests, and documentation. It is labeled version 0.2.0 alpha rather than being presented as a managed production service.

---

## 2. Native Windows VectorChord Integration

**Repository:** [vchord-windows-port](https://github.com/grimmjoww/vchord-windows-port)

### Problem

VectorChord exposes a Windows MSVC target, but turning that target into a working PostgreSQL extension requires a compatible toolchain, install procedure, service configuration, database verification, and a migration path for existing Hindsight data.

### Solution

A reproducible Windows-native guide and helper-script set covers the MSVC/LLVM/Rust/Postgres toolchain, release build, extension installation and removal, service preparation, a database smoke test, and a Hindsight embedding migration using an Ollama reindex workaround.

### Failure diagnosed

Rust 1.93 and 1.94 failed in the SIMD implementation because the required AVX-512 FP16 standard-library feature was not available on the tested path. Updating to Rust 1.95 resolved the build boundary, and the exact failure was documented for future operators.

### Willie's role

Directed the build investigation, environment diagnosis, script creation, smoke-test process, Hindsight migration, failure analysis, and final documentation review.

### Evidence and status

The repository records tested Windows, MSVC, LLVM, Rust, `cargo-pgrx`, and PostgreSQL versions; the produced DLL characteristics; install/uninstall scripts; SQL verification; and migration notes. The claims are scoped to the tested April and May 2026 configurations rather than asserted as universal compatibility.

---

## 3. Always-On Procedure Enforcement for Hermes Agent

**Repository:** [hermes-superpowers-plugin](https://github.com/grimmjoww/hermes-superpowers-plugin)

### Problem

A procedural skill library is ineffective when an agent forgets or chooses not to invoke it. An optional MCP or tool surface still leaves the discipline decision to the model.

### Solution

A Hermes plugin injects the Superpowers usage rule through a `pre_llm_call` hook on the first turn of every session, loads the canonical skills through Hermes' external-skills path, and maps canonical tool names to Hermes-native tools without rewriting the methodology.

### Reliability design

- Enforcement happens before model action.
- Only the first turn receives the steering injection.
- Later turns remain silent to avoid repeated context cost.
- Session tracking is bounded and the hook fails open.
- Upstream skill provenance is separated from original wrapper code.
- Command resolution and collisions are explicitly checked.

### Willie's role

Defined the missing gate-layer requirement, directed the Hermes adaptation and compatibility mapping, reviewed provenance boundaries, and required named pre-ship checks.

### Evidence and status

The release record documents **9 of 9 checks passing** on the tested Hermes profile, including hook behavior, first-turn injection, later-turn silence, external skill loading, command resolution, and collision checks. The repository does not claim a continuously rerun CI badge for those integration checks.

---

## 4. Persistent Memory Integrations for Coding Agents

**Repositories:** [claude-code-memu](https://github.com/grimmjoww/claude-code-memu) and [openclaw-memu](https://github.com/grimmjoww/openclaw-memu)

### Problem

A memory search endpoint alone does not decide when an agent should recall context, what a completed turn should capture, how multiple users and agent roles are isolated, which destructive actions require a gate, or how the host should behave when memory is unavailable.

### Claude Code integration

The Claude Code repository contains two related paths:

- A stdio MCP server with tools for memorize, retrieve, direct memory-item creation, category inspection, and confirmed clearing.
- Lifecycle hooks for session-start recall, prompt-specific recall, and capture of the most recent completed user/assistant exchange from the Claude transcript.

The recall hooks soft-fail so an unavailable memory service does not block the coding session. Focused tests cover the session-start, prompt, and stop stages.

### OpenClaw integration

The current OpenClaw 5.x source registers:

- Automatic pre-turn recall through a memory prompt supplement.
- Corpus search/get integration.
- Explicit `memu_recall`, `memu_store`, and `memu_forget` tools.
- Gateway methods for retrieve, memorize, and clear.
- CLI commands for search, stats, and guarded clear.

The repository retains capture helpers and explicit store operations, but **automatic post-turn capture is not wired in the current registration body**. That feature is therefore labeled unfinished rather than presented as complete.

### Willie's role

Directed the memory architecture, scoping model, lifecycle behavior, failure handling, test expectations, repository implementation, and iterative diagnosis across Claude Code, OpenClaw, and memU. During the portfolio audit, he reconciled the OpenClaw documentation with the actual 5.x source registrations.

### Status

Both repositories are development integrations. Their public documentation distinguishes implemented surfaces from unpublished or unfinished release work.

---

## Engagement fit

This work is relevant to projects involving:

- MCP servers and tool integrations
- Agent memory, RAG, and retrieval quality
- Lifecycle hooks and context injection
- Multi-step agent workflows
- Prototype or repository audits
- Failure diagnosis and workflow hardening
- Validation, backup, rollback, and operational documentation
- Directed AI-assisted development across unfamiliar systems
