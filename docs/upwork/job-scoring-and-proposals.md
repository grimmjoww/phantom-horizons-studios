# Upwork Job Scoring and Proposal System

**Prepared:** 2026-09-02  
**Profile rate:** $33.33/hour  
**Public proof policy:** Only the two projects below may be presented as Willie's original portfolio work.

## Approved Public Proof

| Client need | Public proof |
|---|---|
| MCP tools, safe migrations, Postgres extension management, backup, verification, and rollback | [`hindsight-installer-mcp`](https://github.com/grimmjoww/hindsight-installer-mcp) |
| Native Windows vector infrastructure, VectorChord builds, Hindsight migrations, and Ollama reindexing | [`vchord-windows-port`](https://github.com/grimmjoww/vchord-windows-port) |

Do not cite other repositories as Willie's original portfolio work. The rest of the account contains research forks, copied reference projects, private work, abandoned experiments, or unfinished prototypes unless Willie explicitly reclassifies one after review.

## Scoring Rubric

| Category | Points |
|---|---:|
| Technical fit | 25 |
| Approved proof match | 20 |
| Scope clarity | 15 |
| Client quality | 15 |
| Budget realism | 15 |
| Timing and application cost | 5 |
| Fast-review potential | 5 |
| **Total** | **100** |

### Recommendation Thresholds

- **80–100:** Strong apply
- **65–79:** Apply selectively
- **50–64:** Save or clarify scope
- **Below 50:** Skip

### Automatic Rejection Flags

- Expert implementation scope attached to a token fixed budget
- Unpaid production work or an oversized test
- Requests to communicate or pay outside Upwork before a contract
- A vague autonomous-agent build with no bounded deliverables
- A client rating below 4.5 without a compelling explanation
- Required experience Willie cannot truthfully demonstrate
- A full platform disguised as a one-week or low-cost engagement

---

# Current First-Wave Leads

## 1. Agent Setup Expert — Live Call Support

**Job:** https://www.upwork.com/jobs/~022092536107749220992  
**Job ID:** `2092536107749220992`  
**Recommendation:** **Strong apply**  
**Estimated score:** **88/100**  
**Format:** Hourly, beginning with one paid 60-minute call  
**Client signal:** Established Upwork hiring history and strong freelancer feedback

### Why It Fits

The client wants somebody who uses Codex and agent tooling in real work, understands MCP, repository structure, persistent context, permissions, coordination failures, and can explain the trade-offs live. Willie has direct operating experience in that environment. His approved public proof shows an agent-callable MCP with explicit safety and recovery controls, plus a difficult Windows integration that required systematic diagnosis across several components.

### Proposal

```text
I have read your full job post.

The distinction you made—your team builds the system while the consultant advises, reviews, and unblocks you—is exactly the kind of engagement I understand. I use Codex and other coding agents as an engineering and operations layer, not only as code generators, and I’m comfortable tracing why an agent, tool, repository workflow, or environment is behaving differently from the intended procedure.

My strongest public example is Hindsight Installer MCP. It gives an agent controlled tools for inspecting a Hindsight/Postgres setup, installing vector extensions, changing embedding pipelines, checking compatibility, creating backups, verifying recall, and rolling back a failed upgrade:
https://github.com/grimmjoww/hindsight-installer-mcp

I also documented and automated a native Windows VectorChord build and Hindsight migration after working through Rust, LLVM, Postgres, index, environment, and re-embedding failures:
https://github.com/grimmjoww/vchord-windows-port

For the first call, I’d inspect your repository and folder structure, context files, MCP/tool surface, permission boundaries, and the operations workflow causing the most friction. You would leave with a concise list of what to keep, what to simplify, the main risks, and the next changes your team can make itself.

I’m comfortable thinking aloud on screen share and explaining the reasoning without turning the call into a lecture. My profile rate is $33.33/hour.

Which problem is costing you the most time right now: agents losing context, tool permissions, or multiple agents stepping on the same work?
```

### First Deliverable

A 60-minute live architecture and troubleshooting review followed by a short keep/change/risk/next-actions summary.

---

## 2. Senior AI/Backend Engineer — Skills Platform Architecture (MCP)

**Job:** https://www.upwork.com/jobs/~022094666830947344539  
**Job ID:** `2094666830947344539`  
**Recommendation:** **Apply selectively**  
**Estimated score:** **79/100**  
**Format:** Paid scoping consultation before a possible longer engagement

### Why It Fits

The strongest match is MCP architecture and under-specified technical decision-making. The limitation is equally important: Willie should not claim prior multi-tenant SaaS delivery or a finished shared-skills product. The proposal should lead with the real design decisions from Hindsight Installer MCP and VectorChord rather than implying experience he does not have.

### Proposal

```text
The central decision here is larger than choosing an MCP SDK. You need a clean boundary between the shared product, each client’s configuration, the data that stays inside the client environment, and the limited signals allowed to improve the common layer.

A relevant decision from my own work was keeping Hindsight as the memory engine while building a separate MCP operational layer around it. The MCP exposes inspection, extension installation, environment changes, migration, verification, backup, and rollback without pretending those responsibilities belong inside the upstream product:
https://github.com/grimmjoww/hindsight-installer-mcp

I made a similar boundary decision with VectorChord on Windows. Rather than presenting the upstream VectorChord code as mine, I kept a separate repository for the original Windows build documentation, helper scripts, and Hindsight migration work I actually produced:
https://github.com/grimmjoww/vchord-windows-port

For a paid scoping session, I would map the core-versus-client boundary, identify what data can cross it, compare a custom MCP-fronted library against extending a vendor, and produce two viable options with risks and a recommended first implementation slice.

Two questions I would settle immediately: What exact decision or action data may leave a client environment, and do improvements enter the shared layer automatically or only through a reviewed release process?

My profile rate is $33.33/hour.
```

### First Deliverable

A concise architecture decision record covering build-versus-vendor, core-versus-client boundaries, privacy/data flow, and the smallest testable first implementation.

---

## 3. Paid Research Interview — Premium AI Model Users

**Job:** https://www.upwork.com/jobs/~022087018044855480589  
**Job ID:** `2087018044855480589`  
**Recommendation:** **Apply only after eligibility is verified**  
**Estimated score:** **84/100 conditional**  
**Format:** One paid 45–60 minute interview

### Eligibility Gate

Do not apply unless Willie can truthfully confirm all required subscription dates, official-provider spending, model usage, and willingness to provide redacted proof. GitHub work cannot establish subscription eligibility.

### Proposal

```text
I use ChatGPT Pro, Codex, and several other models as part of a daily agent-systems workflow rather than only for general chat. My work includes directing repository changes, comparing model behavior, troubleshooting tool use, reviewing diffs and tests, and deciding when a premium model is worth the cost compared with a lower-cost alternative.

I can discuss where premium access materially changes an engineering workflow, where cheaper models are enough, and how I compare systems on planning, tool use, long-context work, latency, reliability, and cost. I can also keep employer, client, and private-repository information out of the interview.

I am available for a 45–60 minute Zoom interview and can provide the requested redacted subscription evidence only if my exact dates and spend satisfy your eligibility rules.
```

---

# Selective or Deferred Leads

## AI/RAG Engineer for SaaS Audit

The audit-first structure fits Willie's troubleshooting method, but the posted fixed price bundles retrieval, ingestion, application logic, security, scalability, performance, and engineering estimates. Apply only if the client accepts a sharply bounded first milestone.

## Production MCP Server Roles

Hindsight Installer MCP is relevant proof, but jobs requiring demonstrated production OAuth/JWT, AWS, Docker, and multi-tenant SaaS delivery should not be treated as automatic fits. Apply only when the first milestone matches demonstrated experience or the proposal clearly distinguishes current proof from new implementation work.

## Hermes, Claude Code, OpenClaw, and memU Jobs

Willie has hands-on experience using and experimenting with these systems, but the associated repositories are not approved portfolio proof. Do not link them, describe them as finished original products, or use them to satisfy a client's request for completed public examples.

---

# Hard Skips

| Job pattern | Reason |
|---|---|
| Full agentic RAG build for roughly $100 | Tool routing, multi-hop retrieval, evaluation, demos, and documentation exceed the budget. |
| Autonomous sales company for a small fixed price | Prospecting, scraping, enrichment, outreach, CRM, and booked-call delivery are separate systems, not one cheap milestone. |
| Broad RAG/security/scalability audit for a token fixed price | The requested surface is too large to inspect responsibly at that price. |
| Full-time agent and operations work at virtual-assistant rates | The scope and responsibility do not match the compensation. |
| Jobs requiring proof from cloned or unfinished repositories | A proposal cannot manufacture evidence the portfolio does not contain. |

# Connect Strategy

1. Re-fetch every job immediately before applying.
2. Check invitations and existing proposals before creating a new proposal.
3. Use only the two approved public proof links.
4. Present the final Upwork draft, Connect cost, bid, optional boost, and attachments before submission.
5. Do not spend Connects until Willie approves that job-specific draft.
