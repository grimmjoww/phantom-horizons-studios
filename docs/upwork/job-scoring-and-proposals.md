# Upwork Job Scoring and Proposal System

**Prepared:** 2026-09-02  
**Profile rate:** $33.33/hour  
**Available Connects at review:** 149

## Scoring Rubric

| Category | Points |
|---|---:|
| Technical fit | 25 |
| Public proof match | 20 |
| Scope clarity | 15 |
| Client quality | 15 |
| Budget realism | 15 |
| Competition and timing | 5 |
| Fast-review potential | 5 |
| **Total** | **100** |

### Recommendation Thresholds

- **80–100:** Strong apply
- **65–79:** Apply selectively
- **50–64:** Save or clarify scope
- **Below 50:** Skip

### Automatic Rejection Flags

- Expert implementation scope attached to a token fixed budget
- Unpaid production work or an oversized “test”
- Requests to communicate or pay outside Upwork before a contract
- Vague autonomous-agent build with no bounded deliverables
- Client rating below 4.5 unless the opportunity has a compelling explanation
- A required stack or domain outside Willie’s demonstrated lane
- A full-platform build disguised as a one-week or low-cost engagement

## Proof Map

| Client need | Best public proof |
|---|---|
| MCP servers, safe migrations, reversible agent actions | `hindsight-installer-mcp` |
| Windows vector infrastructure and embedding migrations | `vchord-windows-port` |
| Agent procedure enforcement and reliable skill activation | `hermes-superpowers-plugin` |
| Claude Code lifecycle memory | `claude-code-memu` |
| OpenClaw lifecycle memory | `openclaw-memu` |
| Broader studio and portfolio context | `phantom-horizons-studios` |

---

# Current Ranked Leads

## 1. Agent Setup Expert — Live Call Support (Hourly, Ad-Hoc)

**Job:** https://www.upwork.com/jobs/~022092536107749220992  
**Job ID:** `2092536107749220992`  
**Recommendation:** **Strong apply**  
**Score:** **92/100**  
**Connects:** 22  
**Posted:** 2026-08-26  
**Competition at review:** 39 proposals; 35 invites sent  
**Budget:** Hourly, not stated  
**Client:** Germany; 4.89 freelancer rating from 112 reviews; 188 contracts; 152 jobs with hires; $35,457.42 spent

### Score Evidence

- **Technical fit — 25/25:** Daily Codex use, MCP, repo/folder structure, persistent context, custom skills, operations briefings, agent coordination, and permission/security traps closely match Willie’s work.
- **Public proof — 20/20:** Hermes Superpowers, Hindsight Installer MCP, and the memory integrations provide direct examples.
- **Scope clarity — 15/15:** One paid 60-minute call first; the client builds while the freelancer advises and unblocks.
- **Client quality — 15/15:** Established hiring record and strong feedback from freelancers.
- **Budget realism — 10/15:** Paid hourly, but no range is stated.
- **Competition/timing — 2/5:** Meaningful proposal and invite volume.
- **Fast-review potential — 5/5:** A bounded paid consultation can close quickly and lead to repeat calls.

### Proposal

```text
I have read your full job post.

The distinction you made—your team builds it, while the consultant advises and unblocks you—is exactly the kind of engagement I understand. I use Codex as an engineering and operations layer, not only as a code generator, and I’ve built workflows around MCP servers, persistent memory, custom skills, repository controls, multi-agent handoffs, and verification gates.

One public example is my Hermes Superpowers plugin, which moves critical procedure use out of the model’s discretion and enforces it at the system layer: https://github.com/grimmjoww/hermes-superpowers-plugin

I also directed an MCP for safer Hindsight embedding migrations with backup, compatibility checks, recall verification, and rollback: https://github.com/grimmjoww/hindsight-installer-mcp

For the first call, I’d review your repository and folder structure, persistent context, skills/MCP surface, and the operations use cases you’re targeting. You’d leave with a short priority list: what to keep, what to simplify, what creates permission or coordination risk, and the next changes your team should make itself.

I’m comfortable thinking aloud on screen share and explaining trade-offs without turning the call into a lecture. My profile rate is $33.33/hour.

Which issue is creating the most friction right now: context persistence, MCP permissions, or agents overwriting one another’s work?
```

### First Deliverable

A 60-minute live architecture and troubleshooting review followed by a concise keep/change/risk/next-actions summary.

---

## 2. Senior AI/Backend Engineer — Skills Platform Architecture (MCP)

**Job:** https://www.upwork.com/jobs/~022094666830947344539  
**Job ID:** `2094666830947344539`  
**Recommendation:** **Strong apply**  
**Score:** **86/100**  
**Connects:** 23  
**Posted:** 2026-09-01  
**Competition at review:** 32 proposals; 5 invites sent  
**Budget:** Hourly, not stated; short paid scoping consultation first  
**Client:** India; 5.0 freelancer rating from one review; one hire; $180 spent

### Score Evidence

- **Technical fit — 24/25:** MCP, shared skills, context architecture, privacy boundaries, Python/TypeScript, and under-specified design decisions align closely.
- **Public proof — 19/20:** Hermes Superpowers demonstrates shared canonical content plus a thin host-specific layer; Hindsight Installer MCP demonstrates agent-facing infrastructure and safety controls.
- **Scope clarity — 14/15:** Starts with a paid architecture consultation before a longer build.
- **Client quality — 9/15:** Positive but very limited history.
- **Budget realism — 12/15:** Paid scoping is appropriate, but no rate is stated.
- **Competition/timing — 3/5:** Moderate proposal volume on a recent posting.
- **Fast-review potential — 5/5:** Bounded paid consultation with a clear decision artifact.

### Proposal

```text
You’re not choosing only an MCP implementation. You’re deciding where the shared product ends, where each client’s configuration begins, and what information is allowed to cross that boundary. I would model those layers first, then compare building your own MCP-fronted library with extending a vendor against control, maintainability, tenant isolation, observability, and migration risk.

A relevant decision from my own work was separating canonical Superpowers skill content from a Hermes-specific enforcement layer. Instead of rewriting every skill per host, I preserved the upstream content, added a narrow compatibility map, and moved critical activation into a first-turn plugin hook. That reduced drift while keeping the host-specific layer replaceable:
https://github.com/grimmjoww/hermes-superpowers-plugin

I also directed an MCP for Hindsight/Postgres upgrades that separates detection, configuration, migration, verification, and rollback rather than hiding the entire process in one opaque tool:
https://github.com/grimmjoww/hindsight-installer-mcp

For the paid scoping session, I’d aim to leave you with a recommended boundary model, two viable architecture options, the main privacy risks, and a first implementation slice.

Two questions I’d want to settle early: What exact decision/action data is allowed to leave a client environment, and do shared improvements return automatically or only through a reviewed release process?

My profile rate is $33.33/hour.
```

### First Deliverable

A concise architecture decision record covering build-versus-vendor, core-versus-client boundaries, data-flow/privacy rules, and the smallest testable first implementation.

---

## 3. Paid Research Interview — Premium AI Model Users

**Job:** https://www.upwork.com/jobs/~022087018044855480589  
**Job ID:** `2087018044855480589`  
**Recommendation:** **Strong apply only if eligibility answers are yes**  
**Score:** **84/100 conditional**  
**Connects:** 14  
**Competition at review:** 39 proposals; 132 invites; 4 hires on the posting  
**Budget:** $50–$100/hour  
**Client:** 4.85 freelancer rating from 12 reviews; 24 contracts; 14 jobs with hires; $3,257.16 spent

### Eligibility Gate

Do not apply unless Willie can truthfully confirm:

1. Official Claude and/or ChatGPT subscriptions purchased directly from the provider.
2. More than $200/month in qualifying official subscriptions for the past six continuous months.
3. Exact approximate monthly spend for Claude, ChatGPT, and APIs.
4. Recent use of GLM, DeepSeek, or Kimi.
5. Willingness to provide a redacted subscription/payment screenshot.

### Score Evidence

- **Technical/user fit — 23/25:** Willie uses premium models and Codex in real agent-system and repository workflows and has recent GLM experience.
- **Proof match — 12/20:** The GitHub portfolio shows the workflows but cannot prove subscription dates or spend.
- **Scope clarity — 15/15:** One anonymous 45–60 minute research interview.
- **Client quality — 12/15:** Active hiring history and good overall rating, with mixed individual feedback that should be noted.
- **Budget realism — 15/15:** Appropriate paid research rate.
- **Competition/timing — 2/5:** High invite volume and multiple hires already.
- **Fast-review potential — 5/5:** Small, defined consultation that can become an early Upwork contract.

### Conditional Proposal

```text
I use ChatGPT Pro and Codex as part of a daily agent-systems workflow rather than only for general chat. My work includes directing repository changes, comparing model behavior, building tool and memory integrations, diagnosing failures, and deciding when a premium model is worth the cost versus a lower-cost alternative.

I’ve also used GLM recently and regularly compare models on tool use, long-context work, planning quality, latency, reliability, and subscription value—not only benchmark scores.

I can discuss where premium access materially changes the workflow, where less expensive models are enough, and why I switch between systems depending on the job. I’m also comfortable providing a redacted screenshot of official subscription status and payment history, provided my dates and spend meet your stated eligibility rules.

I’m available for a 45–60 minute Zoom interview and can keep all employer, client, and private repository information out of the discussion.
```

### Screening Answers

```text
1. Continuous official spend above $200/month for six months: [REQUIRES WILLIE'S EXACT ANSWER]

2. Approximate monthly spending:
Claude subscription: [EXACT AMOUNT]
ChatGPT subscription: [EXACT AMOUNT]
API: [EXACT AMOUNT]

3. Recent models used: GLM [add DeepSeek/Kimi only if true]

4. Future plan: [A OR B — REQUIRES WILLIE'S CHOICE]

5. Willing to provide redacted verification screenshot: [YES/NO]
```

---

## 4. Claude Code / MCP Automation Cleanup and Buildout

**Job:** https://www.upwork.com/jobs/~022093045916527103425  
**Job ID:** `2093045916527103425`  
**Recommendation:** **Apply selectively only with real Google Workspace API experience**  
**Score:** **72/100 conditional**  
**Connects:** 11  
**Competition at review:** 68 proposals  
**Budget:** Hourly, not stated  
**Client:** New Upwork client; no completed contracts or spend

### Why It Is Not First Wave Yet

The Claude Code, MCP, skills, hooks, scheduled-task, documentation, and training work fits well. However, the client explicitly requires Google Workspace API experience. Adjacent connector use is not enough to claim that requirement. Apply only when a specific, truthful example is available.

---

## 5. AI Technical Generalist — Product, Automation & Development

**Job:** https://www.upwork.com/jobs/~022095033414185450911  
**Job ID:** `2095033414185450911`  
**Recommendation:** **Skip for now**  
**Score:** **66/100**  
**Connects:** 23  
**Competition at review:** 41 proposals; one freelancer already hired  
**Budget:** $10–$30/hour  
**Client:** 5.0 freelancer rating from one review; two contracts; $50 spent

### Why It Is Not First Wave

The language describes Willie’s working style unusually well: unfamiliar-system investigation, Codex/Claude Code, APIs, RAG, vector databases, tool calling, testing, and documentation. The downside is material: the rate tops out below the current profile rate, the client has limited spend, the posting requests production-quality code ownership, and one freelancer is already hired. It is useful market evidence, but not a good use of 23 Connects today.

---

# Hard Skips Reviewed

| Job | Reason |
|---|---|
| Agentic RAG with tool calling — $100 fixed | Multi-hop retrieval, tool routing, demos, evaluation, and write-up for $100; hiring count showed zero. |
| Autonomous sales agent — $2,000 fixed | Full prospecting, scraping, competitor/SEO analysis, outreach, CRM, and booked-call system compressed into one fixed budget. |
| AI/RAG SaaS audit — $400 fixed | RAG, ingestion, app logic, security, scalability, performance, and effort estimation bundled into an oversized audit. |
| AI Automation Builder + Operations Generalist — $11–$15/hour | Strong work-style fit with radically unrealistic compensation. |
| Claude Code webhook fix — $10 fixed | Payment is not worth proposal effort or Connects. |
| Northquill SaaS repair | Interesting problem, but outside the strongest proof lane and the full posting showed zero people to hire. |

# First-Wave Connect Strategy

1. Agent Setup Expert — 22 Connects
2. Skills Platform Architecture — 23 Connects
3. Premium AI Research Interview — 14 Connects, only after eligibility is verified

**Maximum first-wave spend:** 59 Connects  
**Remaining if all three are submitted:** 90 Connects

Do not submit any proposal until Upwork displays the final rate, Connect cost, cover letter, and screening answers for job-specific approval.
