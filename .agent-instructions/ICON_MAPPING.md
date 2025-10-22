# Icon Mapping Strategy - Emoji to Icon Replacement

## Quick Reference

### Country Flags (Use flag-icons CSS)
```html
<!-- Old -->
🇪🇪 Estonia

<!-- New -->
<span class="flag-icon"><span class="fi fi-ee fis"></span>Estonia</span>
```

**Flag Icon Codes:**
- 🇪🇪 → `fi-ee` (Estonia)
- 🇸🇬 → `fi-sg` (Singapore)
- 🇦🇪 → `fi-ae` (UAE)
- 🇩🇰 → `fi-dk` (Denmark)
- 🇺🇸 → `fi-us` (USA)
- 🇬🇧 → `fi-gb` (UK)
- 🇪🇸 → `fi-es` (Spain)
- 🇫🇷 → `fi-fr` (France)
- 🇩🇪 → `fi-de` (Germany)
- 🇯🇵 → `fi-jp` (Japan)
- 🇰🇷 → `fi-kr` (South Korea)
- 🇨🇳 → `fi-cn` (China)
- 🇮🇳 → `fi-in` (India)

### Common Emoji to Text Replacements

**Checkmarks (Simple lists - keep as-is or use HTML entity):**
```markdown
<!-- Old -->
✅ Feature enabled

<!-- New (Option 1 - HTML entity) -->
✓ Feature enabled

<!-- New (Option 2 - Keep as-is in simple lists) -->
✅ Feature enabled
```

**Section Headers (Replace with text or styled divs):**
```markdown
<!-- Old -->
## 📥 Download Key Documents

<!-- New -->
## Download Key Documents

<!-- Or with styled prefix -->
<div class="section-header">
  <span class="section-icon">📥</span>
  <h2>Download Key Documents</h2>
</div>
```

**Common Icon Replacements:**

| Emoji | Replacement | Context |
|-------|-------------|---------|
| 🚀 | "Launch" or remove | Deployment, getting started |
| 📥 | "Download" text | Downloads section |
| 🖨️ | Keep (used in Print Button component) | Print functionality |
| 💡 | "Tip:" or "Note:" | Callouts, tips |
| 🏛️ | "Government" or remove | Government-related |
| 🤝 | "Community" or "Collaboration" | Community sections |
| 🐛 | "Bug" or "Issue" | Issue tracking |
| ❓ | "Question" or "Q&A" | Questions section |
| 📣 | "Announcement" | Announcements |
| 🎉 | Remove or "Success" | Celebrations |
| 🔗 | "Link" or remove | Links |
| 📖 | "Documentation" or remove | Docs references |
| 🌍 | "Global" or remove | International context |
| ⚠️ | Use VitePress warning callout | Warnings |

### VitePress Callout Blocks (For warnings, tips, etc.)

```markdown
<!-- Old -->
⚠️ **Warning:** This is important

<!-- New -->
::: warning
This is important
:::

<!-- Old -->
💡 **Tip:** Here's a suggestion

<!-- New -->
::: tip
Here's a suggestion
:::
```

## Specific Patterns

### 1. List Items with Checkmarks
**Keep simple checkmarks** in markdown lists - they're least intrusive:
```markdown
- ✅ No third-party tracking cookies
- ✅ User data stored by GitHub
- ✅ Open source and auditable
```

### 2. Decorative Header Emojis
**Remove or replace with styled text:**
```markdown
<!-- Old -->
## 🚀 Ready to Deploy

<!-- New -->
## Ready to Deploy

<!-- Or -->
## <span class="text-gradient">Ready to Deploy</span>
```

### 3. GitHub Discussion Categories
**Use plain text with proper formatting:**
```markdown
<!-- Old -->
- 📣 **Announcements** - Framework updates

<!-- New -->
- **Announcements** - Framework updates, new releases
- **Q&A** - Questions about implementation
- **Ideas** - Feature requests, improvements
```

## Guidelines for Agents

1. **Priority Order:**
   - First: Replace flag emojis (most problematic)
   - Second: Remove decorative emojis from headers
   - Third: Convert warnings/tips to VitePress callouts
   - Last: Handle list checkmarks (keep most as-is)

2. **Preserve Meaning:**
   - Don't remove information, only decoration
   - If emoji adds semantic value, keep or replace with text

3. **Consistency:**
   - Use the same replacement pattern throughout your assigned files
   - Follow the mapping table exactly

4. **Testing:**
   - Ensure markdown still renders correctly
   - Check that flag icons display properly in headings

5. **Don't Touch:**
   - Code blocks and inline code
   - Comments in source files
   - Commit messages or git history

## Example Transformations

### Before:
```markdown
## 📥 Download Key Documents (PDF)

<h3>🚀 Executive Quick Start</h3>

### 🇪🇪 Estonia
Estonia's success story...

✅ Clean layouts without navigation sidebars
✅ Optimized typography for reading

⚠️ **Note:** Make sure to enable discussions
```

### After:
```markdown
## Download Key Documents (PDF)

<h3>Executive Quick Start</h3>

### <span class="flag-icon"><span class="fi fi-ee fis"></span>Estonia</span>
Estonia's success story...

✓ Clean layouts without navigation sidebars
✓ Optimized typography for reading

::: warning
Make sure to enable discussions
:::
```
