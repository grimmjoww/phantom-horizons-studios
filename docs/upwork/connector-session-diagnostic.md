# Upwork Connector Session Diagnostic

**Observed:** 2026-09-02

## Intended State

- Connected account: `Willie Stewart`
- Organization UID: `2022805480551853811`
- Role returned by `list_accounts`: `TALENT` / Freelancer
- Requested tool mode: `search_execute`

## Reproduction

1. `set_tool_mode(action="set", mode="search_execute")` returned success and said the change would apply on the next session or reconnect.
2. A later turn explicitly invoked the Upwork plugin again.
3. `list_accounts` returned the same Freelancer account and organization UID.
4. Role-gated calls using that exact organization UID failed:
   - `get_profile(action="get")` said the current account was not a Freelancer.
   - `update_profile(action="add_employment")` said the current account was not a Freelancer.
   - `find_jobs(action="smart_search")` incorrectly said the tool required a Client or Agency account.
   - `set_tool_mode(action="get")` said the tool required a Client or Agency account.
5. The directly registered `update_profile` schema omitted `update_title`, `update_overview`, and `set_skills`, even though `get_tool_help("update_profile")` reported all three as supported actions.

## Diagnosis

The connected account is being identified correctly by `list_accounts`, but the role binding used by downstream tools is inconsistent after the mode change. The host also continues to register the full-list schema rather than the expected `search_tools` / `execute_tool` surface.

This is a connector-session/schema problem, not missing profile copy or missing user authorization.

## Safety Result

No headline, overview, skill, employment, proposal, Connects, or contract changes were executed during the failed calls. Each rejected before producing a draft.

## Resume Point

The approved public copy remains in:

- `docs/upwork/profile-copy.md`
- `docs/superpowers/plans/2026-09-02-upwork-profile-conversion.md`
- `docs/upwork/job-scoring-and-proposals.md`

Retry from a newly connected Upwork session. Fetch `list_accounts` and `get_profile` first. Do not create any draft until both agree that organization `2022805480551853811` is a Freelancer account.
