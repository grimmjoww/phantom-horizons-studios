# Upwork Profile Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert Willie Stewart's Upwork profile from a generic AI-automation listing into an honest, humanized AI-agent systems specialist profile backed by public proof.

**Architecture:** Treat the profile as a single sales narrative: headline establishes the niche, overview translates technical work into client outcomes, skills improve discovery, and experience establishes credibility. Check every public claim against the approved design and repository evidence before publishing.

**Tech Stack:** Upwork connector, RewriteLy Humanizer, GitHub evidence, ChatGPT

**Spec:** `docs/superpowers/specs/2026-09-02-marketability-overhaul-design.md`

## Global Constraints

- Keep the public hourly rate at `$33.33/hour`.
- Keep availability at `More than 30 hrs/week`.
- Lead with `AI Agent Developer` in the headline.
- Do not claim conventional senior software-engineering authorship or unsupported enterprise production experience.
- Describe AI-assisted implementation, testing, diagnosis, and repository oversight accurately.
- Preserve the approved Phantom Horizon Studios experience entry.
- Publish only skills accepted by Upwork's ontology.
- Use plainspoken, client-centered language without AI-marketing clichés.

---

### Task 1: Capture and Validate the Baseline

**Files:**
- Evidence: live Upwork profile returned by `get_profile`

**Interfaces:**
- Consumes: Upwork freelancer account `2022805480551853811`
- Produces: verified baseline for title, overview, rate, availability, skills, languages, jobs, and experience

- [ ] **Step 1: Fetch the current profile**

Run the Upwork profile read for organization `2022805480551853811`.

Expected baseline:

```text
Title: AI Agent Developer & Automation Specialist
Rate: $33.33/hour
Availability: More than 30 hrs/week
Skills: Artificial Intelligence, Web Development, Scripting
```

- [ ] **Step 2: Verify the Phantom Horizon entry exists**

Expected subject:

```text
Phantom Horizon Studios — AI Agent Systems Builder
```

- [ ] **Step 3: Record any connector limitations**

If title, overview, skills, portfolio, or employment writes are unavailable through the current tool mode, switch to Upwork's search-and-execute mode. If a field is still unavailable, retain the exact copy in `docs/upwork/profile-copy.md` and report the blocked field rather than pretending it changed.

### Task 2: Humanize and Freeze the Specialist Copy

**Files:**
- Create: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: approved specialist positioning and public GitHub evidence
- Produces: exact final headline, overview, skills, and experience copy

- [ ] **Step 1: Diagnose the proposed overview**

Check for generic phrases, repetition, résumé-like language, unsupported claims, and overly technical lists.

- [ ] **Step 2: Adapt the overview for a freelancer marketplace**

Preserve the facts about MCP and tool integrations, persistent memory and retrieval, RAG, lifecycle hooks, repository rescue, testing, verification, rollback, AI-assisted engineering, and more than 12 years of military technical and operations experience.

- [ ] **Step 3: Save the exact headline**

```text
AI Agent Developer | MCP, RAG, Memory & Automation
```

- [ ] **Step 4: Save the exact overview**

```text
Most AI agents don’t fail because the model is too weak. They fail because the tools, memory, instructions, and handoffs around the model are unreliable.

I help turn half-working agents and AI prototypes into systems that can actually complete multi-step work. That includes MCP servers and tool integrations, RAG and persistent memory, agent lifecycle hooks, model routing, approval gates, repository workflows, and the testing and rollback controls needed to keep changes manageable.

I’m a strong fit when:

• An agent ignores tools, loses context, or skips procedures
• Retrieval returns the wrong information or memory becomes noisy
• A prototype works in a demo but breaks during real workflows
• Several models, tools, or agents need clear responsibilities and handoffs
• An existing repository or integration needs investigation and rescue
• You need useful documentation and evidence—not just “it should work”

My process is practical. I inspect the current workflow, repository, logs, and dependencies; define what success looks like; direct AI-assisted implementation; review changes and outputs; run tests; diagnose failures; and iterate until the agreed evidence is there.

Public examples of my work include an MCP server for safer Hindsight embedding upgrades and rollback, a native Windows VectorChord build and migration workflow, an always-on procedure-enforcement plugin for Hermes Agent, and persistent-memory integrations for Claude Code and OpenClaw.

Before moving into AI systems, I spent more than 12 years in the U.S. military working across electrical systems, technical troubleshooting, operations, and travel-program administration supporting hundreds of travelers. That background is why I care about procedures, fault isolation, documentation, and making the whole workflow work—not only the impressive demo.

Tell me what the agent is supposed to do, what it is doing instead, and what it needs to connect to. I’ll help you turn that into a working, testable system.
```

- [ ] **Step 5: Save the ordered skill candidates**

```text
AI Agent Development
Model Context Protocol
Retrieval-Augmented Generation
AI Model Integration
API Integration
Workflow Automation
Large Language Models
Generative AI
Python
JavaScript
TypeScript
GitHub
Software Debugging
Technical Documentation
Prompt Engineering
Chatbot Development
```

- [ ] **Step 6: Save the exact employment copy**

Navy:

```text
Served in technical operations and program administration roles covering electrical systems, travel and expense workflows, government travel-card coordination, records review, and customer support. Troubleshot electrical equipment using technical documentation, inspections, test equipment, and structured fault isolation. As a travel program administrator, supported approximately 300–400 travelers, reviewed authorizations and vouchers for accuracy and compliance, resolved payment and account issues, tracked program requirements, and translated detailed policy into practical guidance for employees and leaders.
```

Marine Corps:

```text
Performed welding, cutting, fabrication, and repair using MIG/TIG, brazing, plasma cutting, and oxy-fuel equipment. Worked from technical drawings and measurements, inspected finished work, maintained tools and equipment, and followed strict safety and quality procedures in a high-accountability maintenance environment.
```

- [ ] **Step 7: Check character limits**

Expected:

```text
Headline: 50 characters
Overview: 1,999 characters
```

### Task 3: Publish Headline and Overview

**Files:**
- Read: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: exact final humanized copy
- Produces: updated public Upwork headline and overview

- [ ] **Step 1: Draft the headline update**

Use the exact headline saved in `docs/upwork/profile-copy.md`.

- [ ] **Step 2: Confirm the headline draft under the user's approved implementation authorization**

If the connector requires a new post-preview confirmation that cannot use the user's blanket approval, present that single mandatory gate instead of guessing.

- [ ] **Step 3: Draft the overview update**

Use the exact overview saved in `docs/upwork/profile-copy.md`.

- [ ] **Step 4: Confirm the overview draft under the user's approved implementation authorization**

If the connector requires a new post-preview confirmation that cannot use the user's blanket approval, present that single mandatory gate.

- [ ] **Step 5: Fetch the profile and compare exact text**

Expected: live title and overview match the saved source copy, with no truncation or escaped markup.

### Task 4: Replace the Skill Set

**Files:**
- Read: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: ordered skill candidates
- Produces: complete revised Upwork skill set, maximum 20

- [ ] **Step 1: Submit the complete candidate set**

Use the 16 skills saved in `docs/upwork/profile-copy.md`.

- [ ] **Step 2: Review ontology resolution**

Remove only rejected names. Use the closest accepted Upwork term when the connector returns an explicit mapping.

- [ ] **Step 3: Confirm the resolved complete set**

Replace the complete skill set; do not append to the old three-skill set.

- [ ] **Step 4: Fetch and verify the profile**

Expected: agent systems, MCP/RAG, integrations, and development skills appear ahead of generic categories.

### Task 5: Add Civilian-Readable Military Experience

**Files:**
- Read: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: verified résumé dates and exact public descriptions
- Produces: two public Upwork employment records

- [ ] **Step 1: Add U.S. Navy employment**

```text
Company: U.S. Navy
Title: Electrician's Mate & Travel Program Administrator
Role: Technical Operations & Program Administration
Start: 2017-11-01
City: Indianapolis
Country: US
Description: use the exact Navy copy in docs/upwork/profile-copy.md
```

- [ ] **Step 2: Add U.S. Marine Corps employment**

```text
Company: U.S. Marine Corps
Title: Welder & Metal Fabrication Technician
Role: Welding, Fabrication & Equipment Support
Start: 2012-12-01
End: 2016-12-01
City: Various Locations
Country: US
Description: use the exact Marine Corps copy in docs/upwork/profile-copy.md
```

- [ ] **Step 3: Verify dates and public descriptions**

Expected: no unexplained military acronyms, disciplinary or medical information, or claims outside the résumé evidence.

### Task 6: Verify the Completed Profile

**Files:**
- Read: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: all published profile sections
- Produces: final validation report

- [ ] **Step 1: Fetch the complete profile**

- [ ] **Step 2: Compare title, overview, skills, rate, availability, languages, and experience**

- [ ] **Step 3: Check the first 250 characters**

The opening must communicate the client problem, agent-systems specialization, and concrete outcome without requiring expansion.

- [ ] **Step 4: Check honesty and status language**

No public project may be called production-ready unless repository evidence supports that status.

- [ ] **Step 5: Confirm the copy source is committed**

Expected file and commit message:

```text
docs/upwork/profile-copy.md
docs: add final humanized Upwork profile copy
```
