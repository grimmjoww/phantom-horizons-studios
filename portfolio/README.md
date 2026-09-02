# AI Agent Systems Portfolio

Selected integration and reliability work directed by **Willie Stewart / Phantom Horizon Studios**.

These case studies describe public repositories and the engineering workflow behind them. The work is AI-assisted and human-directed: Willie defines the outcome and safety constraints, directs coding agents through implementation, reviews changes and evidence, diagnoses failures, and coordinates revisions.

---

## 1. Safe Hindsight Embedding Upgrade MCP

**Repository:** [hindsight-installer-mcp](https://github.com/grimmjoww/hindsight-installer-mcp)

### Problem

Upgrading the embedding stack of a populated agent-memory system can require coordinated changes across Hindsight, Postgres, vector extensions, dimensions, environment configuration, re-embedding, validation, and recovery. Performing those steps manually is error-prone; giving an agent unrestricted shell access is difficult to audit.

### Solution

A stdio MCP server exposes narrow operational tools for detecting the Postgres mode, managing extensions, inspecting Hindsight state, changing configuration, migrating embeddings, verifying recall, validating compatibility, backing up, upgrading, and rolling back.

### Reliability design

- inspect state before mutation;
- distinguish user-space `pg0` from system Postgres;
- surface elevation requirements instead of hiding them;
- pair migration with backup and recall verification;
- test compatibility before attempting an upgrade;
- preserve rollback when post-flight checks fail.

### Willie's role

Defined the desired one-prompt operator workflow and its safety boundaries, directed the implementation, tested behavior in a Windows Hindsight environment, diagnosed integration failures, and iterated on the tool and documentation design.

### Evidence

The public repository contains the MCP implementation, compatibility data, migration tooling, documentation, and an explicit alpha status rather than a production-readiness claim.

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

### Evidence

The repository records tested Windows, MSVC, LLVM, Rust, `cargo-pgrx`, and PostgreSQL versions; the produced DLL characteristics; install/uninstall scripts; SQL verification; and migration notes.

---

## 3. Always-On Procedure Enforcement for Hermes Agent

**Repository:** [hermes-superpowers-plugin](https://github.com/grimmjoww/hermes-superpowers-plugin)

### Problem

A procedural skill library is ineffective when an agent forgets or chooses not to invoke it. An optional MCP or tool surface still leaves the discipline decision to the model.

### Solution

A Hermes plugin injects the Superpowers usage rule through a `pre_llm_call` hook on the first turn of every session, loads the canonical skills through Hermes' external-skills path, and maps canonical tool names to Hermes-native tools without rewriting the methodology.

### Reliability design

- enforcement happens before model action;
- only the first turn receives the steering injection;
- later turns remain silent to avoid repeated context cost;
- upstream skill provenance is separated from original wrapper code;
- command resolution and collisions are explicitly checked.

### Willie's role

Defined the missing gate-layer requirement, directed the Hermes adaptation and compatibility mapping, reviewed provenance boundaries, and required named pre-ship checks.

### Evidence

The repository documents **9/9 checks passing** on the tested Hermes profile, including hook behavior, first-turn injection, later-turn silence, external skill loading, command resolution, and collision checks.

---

## 4. Persistent Memory Integrations for Coding Agents

**Repositories:** [claude-code-memu](https://github.com/grimmjoww/claude-code-memu) and [openclaw-memu](https://github.com/grimmjoww/openclaw-memu)

### Problem

A memory search tool alone does not reliably give an agent context at the right time or capture the completed interaction afterward. Multiple users and agent roles also need scoped memory rather than one shared pool.

### Solution

The Claude Code integration combines automatic lifecycle hooks with explicit MCP tools:

- session-start recall for broad current context;
- prompt-specific recall before the model acts;
- stop-hook capture of the latest completed exchange;
- stdio tools for memorize, retrieve, direct item creation, category inspection, and confirmed deletion;
- user and agent identifiers for memory scoping.

The OpenClaw integration explores the same lifecycle pattern through `before_prompt_build` and `agent_end`, with plugin tools, CLI commands, and schema-driven configuration.

### Reliability design

- retrieval hooks soft-fail instead of breaking the host agent;
- empty prompts skip unnecessary calls;
- capture reads the actual transcript path supplied by the host;
- only the latest pair is captured from a cumulative transcript;
- destructive clearing requires explicit confirmation;
- hook tests exercise a real local HTTP boundary rather than only mocked function calls.

### Willie's role

Directed the memory architecture, scoping model, lifecycle behavior, failure handling, test expectations, repository implementation, and iterative diagnosis across Claude Code, OpenClaw, and memU.

### Status

Both repositories are development integrations. Their public documentation deliberately distinguishes implemented/tested surfaces from unpublished or unfinished release work.

---

## Engagement fit

This work is relevant to projects involving:

- MCP servers and tool integrations;
- agent memory, RAG, and retrieval quality;
- lifecycle hooks and context injection;
- multi-step agent workflows;
- prototype or repository audits;
- failure diagnosis and workflow hardening;
- validation, backup, rollback, and operational documentation;
- directed AI-assisted development across unfamiliar systems.
