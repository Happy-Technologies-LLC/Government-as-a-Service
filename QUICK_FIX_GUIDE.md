# Quick Fix Guide: Layer Migration Critical Issues

**Status:** 🔴 BUILD FAILING - 15 dead links found
**Time to Fix:** ~60 minutes
**Priority:** CRITICAL - Site cannot deploy

---

## The Problem

VitePress config uses **SHORTENED directory names** that don't match **ACTUAL directory structure**.

### Config Uses (WRONG):
- `layer0-foundation`
- `layer1-core`
- `layer2-engine`
- `layer3-portfolio`
- `layer4-experience`

### Actual Directories (CORRECT):
- `layer0-legal-policy-foundation`
- `layer1-shared-technology-core`
- `layer2-people-process-engine`
- `layer3-transparent-service-portfolio`
- `layer4-unified-citizen-experience`

---

## Quick Fix Steps (30 minutes)

### Step 1: Fix VitePress Config (10 min)

**File:** `Version 1.0/docs/.vitepress/config.mts`

Open in editor and do global find/replace:

```javascript
Find: '/layer0-foundation/'
Replace: '/layer0-legal-policy-foundation/'

Find: '/layer1-core/'
Replace: '/layer1-shared-technology-core/'

Find: '/layer2-engine/'
Replace: '/layer2-people-process-engine/'

Find: '/layer3-portfolio/'
Replace: '/layer3-transparent-service-portfolio/'

Find: '/layer4-experience/'
Replace: '/layer4-unified-citizen-experience/'
```

**Total Changes:** 46+ instances

---

### Step 2: Fix GSVS Links (5 min)

**File:** `Version 1.0/docs/gaas-service-value-system.md`
**Lines:** 373-377

**FIND:**
```markdown
- **[Layer 0: The Legal & Policy Foundation](./layer0-foundation/README.md)**
- **[Layer 1: The Shared Technology Core](./layer1-core/README.md)**
- **[Layer 2: The People & Process Engine](./layer2-engine/README.md)**
- **[Layer 3: The Transparent Service Portfolio](./layer3-portfolio/README.md)**
- **[Layer 4: The Unified Citizen Experience](./layer4-experience/README.md)**
```

**REPLACE WITH:**
```markdown
- **[Layer 0: The Legal & Policy Foundation](./layer0-legal-policy-foundation/layer0-overview.md)**
- **[Layer 1: The Shared Technology Core](./layer1-shared-technology-core/layer1-overview.md)**
- **[Layer 2: The People & Process Engine](./layer2-people-process-engine/layer2-overview.md)**
- **[Layer 3: The Transparent Service Portfolio](./layer3-transparent-service-portfolio/layer3-overview.md)**
- **[Layer 4: The Unified Citizen Experience](./layer4-unified-citizen-experience/layer4-overview.md)**
```

---

### Step 3: Fix Layer 4 README (5 min)

**File:** `Version 1.0/docs/layer4-unified-citizen-experience/README.md`
**Lines:** 137-140

**FIND:**
```markdown
- [Layer 0: Legal & Policy Foundation](../layer0-legal-policy-foundation/README.md)
- [Layer 1: Shared Technology Core](../layer1-shared-technology-core/README.md)
- [Layer 2: People & Process Engine](../layer2-people-process-engine/README.md)
- [Layer 3: Transparent Service Portfolio](../layer3-transparent-service-portfolio/README.md)
```

**REPLACE WITH:**
```markdown
- [Layer 0: Legal & Policy Foundation](../layer0-legal-policy-foundation/layer0-overview.md)
- [Layer 1: Shared Technology Core](../layer1-shared-technology-core/layer1-overview.md)
- [Layer 2: People & Process Engine](../layer2-people-process-engine/layer2-overview.md)
- [Layer 3: Transparent Service Portfolio](../layer3-transparent-service-portfolio/layer3-overview.md)
```

---

### Step 4: Verify Build (10 min)

```bash
cd "Version 1.0"
npm run docs:build
```

**Expected Output:**
```
✓ building client + server bundles...
✓ rendering pages...
build complete in X.XXs
```

**If you still see dead links:** Check QA_REPORT_LAYER_MIGRATION.md for additional fixes

---

## Additional Fixes (Optional - 30 min)

### Fix 4: Layer 2 Index References

**Files to update:**
1. `layer2-people-process-engine/layer2-overview.md`
2. `layer2-people-process-engine/people/README.md`
3. `layer2-people-process-engine/processes/README.md`

**Change:**
```markdown
./people/index → ./people/README
./processes/index → ./processes/README
```

---

### Fix 5: Remove Legacy Tier Reference

**File:** `layer0-legal-policy-foundation/layer0-overview.md`
**Line:** 464

**Find:**
```markdown
- See [Technical Blueprint](/tier2-technical-blueprint/) for detailed architecture
```

**Action:** Delete line or update to reference Layer 1

---

## Verification Checklist

After applying fixes:

- [ ] Build completes with exit code 0
- [ ] No "dead link" warnings in output
- [ ] Dev server starts: `npm run docs:dev`
- [ ] All sidebar links work
- [ ] Layer overview pages load
- [ ] Cross-layer navigation works

---

## If Build Still Fails

1. Check exact error message
2. Review full QA report: `QA_REPORT_LAYER_MIGRATION.md`
3. Run: `npm run docs:build 2>&1 | grep "dead link"`
4. Fix each reported dead link individually

---

**See Full Details:** `QA_REPORT_LAYER_MIGRATION.md`
