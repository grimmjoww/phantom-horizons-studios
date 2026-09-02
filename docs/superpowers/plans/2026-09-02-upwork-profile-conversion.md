# Upwork Profile Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert Willie Stewart's Upwork profile from a generic AI-automation listing into an honest, humanized AI-agent systems specialist profile backed by public proof.

**Architecture:** Treat the profile as a single sales narrative: headline establishes the niche, overview translates technical work into client outcomes, skills improve discovery, and experience establishes credibility. All public copy is checked against the approved design and repository evidence before publishing.

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

If title, overview, skills, portfolio, or employment writes are unavailable through the current tool mode, switch to Upwork's search-and-execute mode or preserve exact paste-ready copy and report the blocked field.

### Task 2: Humanize the Specialist Copy

**Files:**
- Create: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: approved specialist positioning and public GitHub evidence
- Produces: final headline, overview, skills, and experience copy

- [ ] **Step 1: Diagnose the proposed overview**

Check for generic phrases, repetition, résumé-like language, unsupported claims, and overly technical lists.

- [ ] **Step 2: Adapt the overview for a freelancer marketplace**

Use a direct, confident, warm voice. Preserve these facts:

```text
MCP and agent-tool integrations
Persistent memory and semantic retrieval
RAG and multi-step workflows
Lifecycle hooks and procedure enforcement
Repository rescue, testing, verification, and rollback
AI-assisted engineering workflow
More than 12 years of U.S. military operations and technical experience
```

- [ ] **Step 3: Save the final copy**

The file must contain:

```markdown
# Upwork Profile Copy

## Headline
[final headline under 70 characters]

## Overview
[final overview under 5000 characters]

## Skills
[accepted ontology candidates in priority order]

## Navy Employment
[exact public entry]

## Marine Corps Employment
[exact public entry]
```

- [ ] **Step 4: Check character limits**

Verify the headline is 70 characters or fewer and the overview is 5000 characters or fewer.

### Task 3: Publish Headline and Overview

**Files:**
- Read: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: final humanized copy
- Produces: updated public Upwork headline and overview

- [ ] **Step 1: Draft the headline update**

Target headline:

```text
AI Agent Developer | MCP, RAG, Memory & Automation
```

- [ ] **Step 2: Confirm the headline draft under the user's approved implementation authorization**

If the connector requires a new post-preview confirmation that cannot use the user's blanket approval, present that single mandatory gate instead of guessing.

- [ ] **Step 3: Draft the overview update**

Use the exact humanized overview saved in `docs/upwork/profile-copy.md`.

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

- [ ] **Step 1: Submit the complete skill candidate set**

Use this order:

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

- [ ] **Step 2: Review ontology resolution**

Remove only rejected names. Use the closest accepted Upwork term when the connector returns an explicit mapping.

- [ ] **Step 3: Confirm the resolved complete set**

Do not accidentally append to the old three-skill set; replace the complete set.

- [ ] **Step 4: Fetch and verify the profile**

Expected: agent systems, MCP/RAG, integrations, and development skills appear ahead of generic categories.

### Task 5: Add Civilian-Readable Military Experience

**Files:**
- Read: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: verified résumé dates and scope
- Produces: two public Upwork employment records

- [ ] **Step 1: Add U.S. Navy employment**

Use:

```text
Company: U.S. Navy
Title: Electrician's Mate & Travel Program Administrator
Role: Technical Operations & Program Administration
Start: 2017-11-01
City: Indianapolis
Country: US
```

The description must mention electrical troubleshooting, travel and expense administration, government travel-card coordination, compliance review, and support for approximately 300–400 travelers without exposing sensitive information.

- [ ] **Step 2: Add U.S. Marine Corps employment**

Use:

```text
Company: U.S. Marine Corps
Title: Welder & Metal Fabrication Technician
Role: Welding, Fabrication & Equipment Support
Start: 2012-12-01
End: 2016-12-01
City: Various Locations
Country: US
```

The description must translate welding, fabrication, technical drawings, precision, safety, and equipment support into civilian language.

- [ ] **Step 3: Verify dates and public descriptions**

Expected: no acronyms that are unexplained, no disciplinary or medical information, and no claims outside the résumé evidence.

### Task 6: Verify the Completed Profile

**Files:**
- Read: `docs/upwork/profile-copy.md`

**Interfaces:**
- Consumes: all published profile sections
- Produces: final validation report

- [ ] **Step 1: Fetch the complete profile**

- [ ] **Step 2: Compare title, overview, skills, rate, availability, languages, and experience**

- [ ] **Step 3: Check the first 250 characters**

The opening must communicate the client problem, agent systems specialization, and concrete outcome without requiring expansion.

- [ ] **Step 4: Check honesty and status language**

No public project may be called production-ready unless repository evidence supports that status.

- [ ] **Step 5: Commit the final copy source**

```bash
git add docs/upwork/profile-copy.md
git commit -m "docs: add final Upwork specialist profile copy"
```
