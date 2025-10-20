# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **strategic planning and documentation repository** for the Government as a Service (GaaS) framework - a global framework for digital government transformation. The repository does not contain source code but rather strategic documents, blueprints, and planning materials for developing and disseminating the GaaS framework worldwide.

## Key Documents

### `blueprint.md` (26,000+ lines)
The core strategic document outlining the complete documentation architecture for GaaS dissemination, including:
- **Tier 0**: The Manifesto (4-6 pages) - viral spread and executive awareness
- **Tier 1**: Executive Playbook (25-30 pages) - decision-making guide for heads of government
- **Tier 2**: Technical Architecture Blueprint (60-80 pages) - detailed specifications for architects and CTOs
- **Tier 3**: Implementation Playbooks (15-20 pages each) - step-by-step guides for specific workstreams
- **Tier 4**: Policy and Legal Templates - legislative and policy frameworks
- **Tier 5**: Community and Learning Hub - global community of practice

## Claude-Flow Integration

This repository uses **Claude-Flow MCP servers** for AI-powered development orchestration:

### Enabled MCP Servers
- `claude-flow` - Swarm coordination, neural networks, memory management, task orchestration
- `ruv-swarm` - Multi-agent coordination and swarm intelligence

### Key MCP Capabilities Available
- **Swarm orchestration**: `mcp__claude-flow__swarm_init`, `mcp__claude-flow__agent_spawn`
- **Task coordination**: `mcp__claude-flow__task_orchestrate`, `mcp__claude-flow__parallel_execute`
- **Memory management**: `mcp__claude-flow__memory_usage`, `mcp__claude-flow__memory_persist`
- **Performance monitoring**: `mcp__claude-flow__performance_report`, `mcp__claude-flow__metrics_collect`

### Development Approach
When working on documentation or planning tasks:
1. Use **parallel operations** - batch multiple MCP calls in a single message for 10-100x speedup
2. Leverage **swarm coordination** for complex multi-document or multi-tier work
3. Use **memory persistence** to track progress across sessions
4. Monitor **performance metrics** in `.claude-flow/metrics/`

## Repository Structure

```
/
├── blueprint.md                      # Core strategic architecture document
├── .claude/
│   └── settings.local.json          # Claude Code MCP configuration
└── .claude-flow/
    └── metrics/
        └── system-metrics.json      # Performance tracking
```

## Working with This Repository

### Documentation Development
When creating or editing GaaS framework documentation:
- Follow the **5-tier architecture** defined in `blueprint.md`
- Maintain consistency with the multi-audience approach (executives, architects, implementers)
- Reference real-world examples from Estonia, Singapore, UAE, Denmark
- Ensure documents are actionable and include concrete implementation steps

### Content Organization
New documents should be organized by tier:
- `/tier0/` - Manifestos and executive summaries
- `/tier1/` - Executive playbooks
- `/tier2/` - Technical blueprints
- `/tier3/` - Implementation playbooks
- `/tier4/` - Policy and legal templates
- `/tier5/` - Community resources

### MCP-First Workflow
- **Always use MCP tools** for coordination and task orchestration
- **Batch operations**: Create multiple documents or sections in parallel
- **Track progress**: Use `mcp__claude-flow__memory_usage` to persist work status
- **Measure performance**: Review `.claude-flow/metrics/` for optimization opportunities

## Key Principles

1. **Multi-tier approach**: Different audiences need different entry points
2. **Global applicability**: Framework must work for greenfield, transformation, and acceleration pathways
3. **Open and accessible**: Documentation should be free, open-source, and community-driven
4. **Evidence-based**: Always reference real implementations and metrics
5. **Actionable**: Every document should enable concrete next steps

## Target Outcomes

The GaaS framework aims to achieve:
- **5-year adoption**: 30+ countries actively implementing
- **Certification program**: 500+ certified GaaS practitioners
- **Economic impact**: $10B+ in documented value
- **Standard status**: Recognized by ISO, ITU, World Bank, OECD

## Notes for Claude Code

- This is a **documentation-focused repository** - no code compilation or testing needed
- Focus on **content quality, structure, and global applicability**
- Leverage **MCP swarm capabilities** for large-scale documentation tasks
- Always consider the **international audience** - multiple languages and contexts
- Maintain the **strategic vision** while being practical and actionable
