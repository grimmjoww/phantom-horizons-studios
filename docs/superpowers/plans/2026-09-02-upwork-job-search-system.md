# Upwork Job Search System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a repeatable, evidence-backed process that finds current AI-agent work, rejects bad-fit postings quickly, and produces tailored proposals linked to Willie's strongest public proof.

**Architecture:** Search in focused lanes, inspect the full posting and client record, score each opportunity with a consistent rubric, then draft only the highest-value proposals. Store the rubric, proof map, and proposal structure in the central portfolio repository for reuse.

**Tech Stack:** Upwork connector, GitHub, Markdown, current job and client data

**Spec:** `docs/superpowers/specs/2026-09-02-marketability-overhaul-design.md`

## Global Constraints

- Do not submit a proposal or spend Connects without a job-specific preview and any mandatory Upwork confirmation.
- Do not claim skills or production experience not supported by the profile and repositories.
- Every proposal must identify one specific client problem and one relevant proof asset.
- Avoid generic openings, copied technology lists, and promises that cannot be evaluated.
- Prefer focused work that can earn an early review without trapping Willie in expert-scope bargain work.
- Treat client ratings as ratings freelancers gave the client.

---

### Task 1: Create the Job Scoring Rubric

**Files:**
- Create: `docs/upwork/job-scoring-and-proposals.md`

**Interfaces:**
- Consumes: approved specialist positioning
- Produces: reusable 100-point scoring rubric and rejection rules

- [ ] **Step 1: Write the scoring model**

Use:

```text
Technical fit: 0–25
Public proof match: 0–20
Scope clarity: 0–15
Client quality: 0–15
Budget realism: 0–15
Competition and timing: 0–5
Fast-review potential: 0–5
Total: 0–100
```

- [ ] **Step 2: Define recommendation thresholds**

```text
80–100: Strong apply
65–79: Apply selectively
50–64: Save or ask a scope question
Below 50: Skip
```

- [ ] **Step 3: Define automatic rejection flags**

```text
Expert scope with token budget
Unpaid production test
Requests to communicate or pay outside Upwork before contract
Vague autonomous-agent build with no deliverables
Client rating below 4.5 unless the opportunity has a compelling explanation
Required stack is primarily outside Willie's demonstrated lane
```

- [ ] **Step 4: Add the proof map**

Map:

```text
MCP / safe migrations → hindsight-installer-mcp
Windows vector infrastructure / embeddings → vchord-windows-port
Procedure enforcement / reliability → hermes-superpowers-plugin
Claude Code memory → claude-code-memu
OpenClaw memory hooks → openclaw-memu
Studio and broader work → phantom-horizons-studios
```

### Task 2: Search the Specialist Lanes

**Files:**
- Update: `docs/upwork/job-scoring-and-proposals.md`

**Interfaces:**
- Consumes: current Upwork marketplace
- Produces: candidate set across three search lanes

- [ ] **Step 1: Search MCP and agent-tool work**

Queries:

```text
MCP AI agent
Model Context Protocol Python
AI agent tool calling API integration
```

- [ ] **Step 2: Search memory, RAG, and retrieval work**

Queries:

```text
AI agent memory RAG
agentic RAG multi-hop
vector database embedding migration
```

- [ ] **Step 3: Search prototype-rescue work**

Queries:

```text
AI prototype audit fix
AI agent debugging
Claude Code workflow setup
```

- [ ] **Step 4: Deduplicate by job ID**

Keep the newest version of duplicate or reposted jobs.

### Task 3: Inspect and Score Current Jobs

**Files:**
- Update: `docs/upwork/job-scoring-and-proposals.md`

**Interfaces:**
- Consumes: candidate job IDs
- Produces: ranked shortlist with evidence

- [ ] **Step 1: Open each promising full job**

Capture:

```text
Title
Job ID
Posted date
Budget or hourly range
Connect cost
Proposal count
Scope and required deliverables
Client country
Client spend
Client hires
Client rating and review count
```

- [ ] **Step 2: Score each category**

Include one sentence of evidence per score category.

- [ ] **Step 3: Rank the top five**

At least one top-five job should be a focused starter contract capable of producing an early review.

- [ ] **Step 4: Flag budget traps explicitly**

State when a technically relevant posting is not worth applying to because the budget is inconsistent with the scope.

### Task 4: Draft Tailored Proposals

**Files:**
- Update: `docs/upwork/job-scoring-and-proposals.md`

**Interfaces:**
- Consumes: top-ranked jobs and proof map
- Produces: job-specific proposals and screening answers

- [ ] **Step 1: Use the four-part proposal structure**

```text
1. Specific observation about the client's problem
2. Concise approach to the first deliverable
3. One matching proof asset with an accurate status statement
4. One useful scope question or concrete next step
```

- [ ] **Step 2: Keep each proposal concise**

Target 120–220 words unless the job explicitly requests more detail.

- [ ] **Step 3: Answer screening questions directly**

Use concrete projects, tools, and personal contribution. Do not paste the overview.

- [ ] **Step 4: Humanize each proposal**

Remove templated phrases such as:

```text
I am thrilled to apply
I am the perfect fit
leveraging cutting-edge technology
I understand your requirements
```

### Task 5: Prepare Applications Without Spending Connects

**Files:**
- Read: `docs/upwork/job-scoring-and-proposals.md`

**Interfaces:**
- Consumes: final proposal copy and bid strategy
- Produces: Upwork application drafts or exact submission previews

- [ ] **Step 1: Select no more than three first-wave applications**

Prefer the highest scores with realistic scope and client quality.

- [ ] **Step 2: Create application drafts**

Use the job's stated budget and Willie's `$33.33/hour` launch rate unless the scope supports a better fixed-price milestone.

- [ ] **Step 3: Present mandatory submission previews**

Each preview must show:

```text
Job
Bid or rate
Connect cost
Proposal
Screening answers
Expected first deliverable
```

- [ ] **Step 4: Submit only after the required job-specific authorization**

A blanket request to help find work does not override Upwork's mandatory proposal confirmation gate.

### Task 6: Track Outcomes and Improve One Variable at a Time

**Files:**
- Create: `docs/upwork/application-log.md`

**Interfaces:**
- Consumes: submitted applications and marketplace responses
- Produces: reusable outcome log

- [ ] **Step 1: Create the log format**

```markdown
| Date | Job | Score | Connects | Proof Used | Proposal Version | Viewed | Interview | Offer | Result | Notes |
```

- [ ] **Step 2: Record every submitted application**

- [ ] **Step 3: Review after five applications**

Change only one of these variables per review cycle:

```text
Opening sentence
Proof asset
Job lane
Bid structure
Scope question
```

- [ ] **Step 4: Raise the profile rate only after evidence**

Reassess after several completed contracts, strong reviews, or a consistent interview rate that supports the increase.
