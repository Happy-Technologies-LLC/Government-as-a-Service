#!/bin/bash

# Government as a Service - PDF Generation Script
# Converts all markdown documents to publication-quality PDFs using Pandoc

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 GaaS Framework - PDF Generation${NC}"
echo "================================================"
echo ""

# Check if Pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo -e "${RED}❌ Error: Pandoc is not installed${NC}"
    echo ""
    echo "Please install Pandoc:"
    echo "  macOS:   brew install pandoc"
    echo "  Windows: choco install pandoc"
    echo "  Linux:   sudo apt-get install pandoc"
    echo ""
    echo "Also install LaTeX for PDF generation:"
    echo "  macOS:   brew install --cask mactex"
    echo "  Windows: Download from tug.org/mactex"
    echo "  Linux:   sudo apt-get install texlive-full"
    exit 1
fi

# Create output directory
mkdir -p pdfs
echo -e "${GREEN}✓${NC} Created output directory: ./pdfs/"
echo ""

# Common Pandoc options
PANDOC_OPTS=(
    --pdf-engine=xelatex
    --toc
    --number-sections
    -V geometry:margin=1in
    -V fontsize=11pt
    -V papersize:letter
    -V linkcolor:blue
    -V urlcolor:blue
)

# Generate Tier 0 - Manifesto
echo -e "${BLUE}📄 Tier 0: Manifesto${NC}"
if [ -f "tier0-manifesto/gaas-manifesto.md" ]; then
    pandoc tier0-manifesto/gaas-manifesto.md \
        -o pdfs/tier0-gaas-manifesto.pdf \
        "${PANDOC_OPTS[@]}" \
        --metadata title="Government as a Service - The Manifesto" \
        --metadata subtitle="The Global Framework for 21st-Century Digital Governance" \
        --metadata date="October 2025"
    echo -e "${GREEN}   ✓ Generated: tier0-gaas-manifesto.pdf${NC}"
else
    echo -e "${RED}   ✗ Not found: tier0-manifesto/gaas-manifesto.md${NC}"
fi

# Generate Tier 1 - Executive Playbook
echo -e "${BLUE}📘 Tier 1: Executive Playbook${NC}"
if [ -f "tier1-executive-playbook/executive-playbook.md" ]; then
    pandoc tier1-executive-playbook/executive-playbook.md \
        -o pdfs/tier1-executive-playbook.pdf \
        "${PANDOC_OPTS[@]}" \
        --metadata title="GaaS Executive Playbook" \
        --metadata subtitle="Strategic Decision-Making for Digital Government Transformation"
    echo -e "${GREEN}   ✓ Generated: tier1-executive-playbook.pdf${NC}"
else
    echo -e "${RED}   ✗ Not found: tier1-executive-playbook/executive-playbook.md${NC}"
fi

# Generate Tier 2 - Technical Blueprints (3 volumes)
echo -e "${BLUE}🏗️  Tier 2: Technical Blueprints${NC}"

if [ -f "tier2-technical-blueprint/volume-1-foundational-architecture.md" ]; then
    pandoc tier2-technical-blueprint/volume-1-foundational-architecture.md \
        -o pdfs/tier2-volume-1-foundational-architecture.pdf \
        "${PANDOC_OPTS[@]}" \
        --metadata title="GaaS Technical Blueprint - Volume 1" \
        --metadata subtitle="Foundational Architecture"
    echo -e "${GREEN}   ✓ Generated: tier2-volume-1-foundational-architecture.pdf${NC}"
fi

if [ -f "tier2-technical-blueprint/volume-2-service-layer-architecture.md" ]; then
    pandoc tier2-technical-blueprint/volume-2-service-layer-architecture.md \
        -o pdfs/tier2-volume-2-service-layer-architecture.pdf \
        "${PANDOC_OPTS[@]}" \
        --metadata title="GaaS Technical Blueprint - Volume 2" \
        --metadata subtitle="Service Layer Architecture"
    echo -e "${GREEN}   ✓ Generated: tier2-volume-2-service-layer-architecture.pdf${NC}"
fi

if [ -f "tier2-technical-blueprint/volume-3-intelligence-analytics.md" ]; then
    pandoc tier2-technical-blueprint/volume-3-intelligence-analytics.md \
        -o pdfs/tier2-volume-3-intelligence-analytics.pdf \
        "${PANDOC_OPTS[@]}" \
        --metadata title="GaaS Technical Blueprint - Volume 3" \
        --metadata subtitle="Intelligence & Analytics"
    echo -e "${GREEN}   ✓ Generated: tier2-volume-3-intelligence-analytics.pdf${NC}"
fi

# Generate Tier 3 - Implementation Playbooks (8 guides)
echo -e "${BLUE}📋 Tier 3: Implementation Playbooks${NC}"
tier3_count=0
for file in tier3-playbooks/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .md")
        title=$(echo "$filename" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
        pandoc "$file" \
            -o "pdfs/tier3-$filename.pdf" \
            "${PANDOC_OPTS[@]}" \
            --metadata title="GaaS Implementation Playbook" \
            --metadata subtitle="$title"
        echo -e "${GREEN}   ✓ Generated: tier3-$filename.pdf${NC}"
        ((tier3_count++))
    fi
done

# Generate Tier 4 - Policy & Legal Templates (21 documents)
echo -e "${BLUE}⚖️  Tier 4: Policy & Legal Templates${NC}"
tier4_count=0
for file in tier4-policy-legal/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .md")
        title=$(echo "$filename" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
        pandoc "$file" \
            -o "pdfs/tier4-$filename.pdf" \
            "${PANDOC_OPTS[@]}" \
            --metadata title="GaaS Template" \
            --metadata subtitle="$title"
        echo -e "${GREEN}   ✓ Generated: tier4-$filename.pdf${NC}"
        ((tier4_count++))
    fi
done

# Generate Tier 5 - Community Hub (5 documents)
echo -e "${BLUE}🌐 Tier 5: Community Hub${NC}"
tier5_count=0
for file in tier5-community/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .md")
        title=$(echo "$filename" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
        pandoc "$file" \
            -o "pdfs/tier5-$filename.pdf" \
            "${PANDOC_OPTS[@]}" \
            --metadata title="GaaS Community" \
            --metadata subtitle="$title"
        echo -e "${GREEN}   ✓ Generated: tier5-$filename.pdf${NC}"
        ((tier5_count++))
    fi
done

# Generate Critical Modules (3 documents)
echo -e "${BLUE}🎯 Critical Modules${NC}"
critical_count=0
for file in critical-modules/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .md")
        title=$(echo "$filename" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
        pandoc "$file" \
            -o "pdfs/critical-$filename.pdf" \
            "${PANDOC_OPTS[@]}" \
            --metadata title="GaaS Critical Module" \
            --metadata subtitle="$title"
        echo -e "${GREEN}   ✓ Generated: critical-$filename.pdf${NC}"
        ((critical_count++))
    fi
done

# Generate Peer Review Summary
echo -e "${BLUE}📊 Additional Documents${NC}"
if [ -f "PEER_REVIEW_SUMMARY.md" ]; then
    pandoc PEER_REVIEW_SUMMARY.md \
        -o pdfs/peer-review-summary.pdf \
        "${PANDOC_OPTS[@]}" \
        --metadata title="GaaS Framework - Peer Review Summary" \
        --metadata date="October 2025"
    echo -e "${GREEN}   ✓ Generated: peer-review-summary.pdf${NC}"
fi

if [ -f "IMPLEMENTATION_ROADMAP.md" ]; then
    pandoc IMPLEMENTATION_ROADMAP.md \
        -o pdfs/implementation-roadmap.pdf \
        "${PANDOC_OPTS[@]}" \
        --metadata title="GaaS Framework - Implementation Roadmap" \
        --metadata subtitle="4-Week Launch Plan"
    echo -e "${GREEN}   ✓ Generated: implementation-roadmap.pdf${NC}"
fi

echo ""
echo -e "${BLUE}📦 Creating ZIP Bundle${NC}"
cd pdfs
zip -q -r gaas-framework-complete.zip *.pdf
cd ..
echo -e "${GREEN}   ✓ Created: pdfs/gaas-framework-complete.zip${NC}"

# Summary
echo ""
echo "================================================"
echo -e "${GREEN}✅ PDF Generation Complete!${NC}"
echo ""
echo "Summary:"
echo "  • Tier 0: 1 document"
echo "  • Tier 1: 1 document"
echo "  • Tier 2: 3 volumes"
echo "  • Tier 3: $tier3_count playbooks"
echo "  • Tier 4: $tier4_count templates"
echo "  • Tier 5: $tier5_count documents"
echo "  • Critical: $critical_count modules"
echo "  • Additional: 2 documents"
echo ""
total_pdfs=$(ls -1 pdfs/*.pdf 2>/dev/null | wc -l)
echo -e "  ${BLUE}Total PDFs: $total_pdfs${NC}"
echo ""
echo "Output:"
echo "  📁 Directory: ./pdfs/"
echo "  📦 ZIP Bundle: ./pdfs/gaas-framework-complete.zip"
echo ""

# Show ZIP file size
if [ -f "pdfs/gaas-framework-complete.zip" ]; then
    zip_size=$(du -h pdfs/gaas-framework-complete.zip | cut -f1)
    echo -e "  Bundle Size: ${BLUE}$zip_size${NC}"
fi

echo ""
echo "================================================"
