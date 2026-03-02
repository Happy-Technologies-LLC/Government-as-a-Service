# Case Study 7: Indonesia's Satu Data Initiative

## Data Integration Ambition Meets Institutional Reality

---

### Executive Summary

Satu Data Indonesia ("One Data Indonesia") is a national data integration initiative launched by Presidential Regulation No. 39 of 2019. Its goal is to create a unified, interoperable data governance framework across all levels of Indonesian government -- national, provincial, and district/city -- to support evidence-based policymaking, reduce data silos, and improve public service delivery. Indonesia, a nation of 275 million people across 17,000 islands with 34 provinces and over 500 districts/cities, faces data fragmentation challenges that are among the most severe in the world: different agencies produce conflicting statistics on the same topics (e.g., poverty rates differing by millions of people between BPS/statistics bureau and the Ministry of Social Affairs), data is stored in incompatible formats, and there is no common data dictionary or standard.

Satu Data is conceptually ambitious and well-designed. Its principles -- data must be standards-compliant, interoperable, and accessible through an open data portal (data.go.id) -- align closely with international best practices. However, implementation has been slow. As of 2024, approximately 90 national government agencies have appointed Data Stewards (Walidata) as required by the regulation, but actual data sharing and standardization remain limited. The open data portal (data.go.id) contains over 10,000 datasets, but data quality is uneven and many critical datasets are incomplete or outdated. Institutional resistance, lack of technical capacity at sub-national levels, and absent enforcement mechanisms are the primary barriers.

---

### Timeline and Budget

| Date | Event |
|------|-------|
| 2014-2018 | Planning phase under President Joko Widodo's administration. Bappenas (National Development Planning Agency) leads design of the data governance framework |
| March 2019 | Presidential Regulation No. 39/2019 on Satu Data Indonesia issued. Establishes the framework: each agency must appoint a Data Steward (Walidata), adopt common metadata standards, and share data through the national portal |
| 2019-2020 | Institutional setup: approximately 90 national agencies appoint Walidata. Technical standards (metadata schemas, data dictionaries) developed |
| 2020 | COVID-19 pandemic exposes data fragmentation: conflicting case counts between Ministry of Health, provincial governments, and hospitals. Satu Data framework too immature to support coordinated pandemic response |
| 2020 | data.go.id portal relaunched with improved interface. Contains approximately 5,000 datasets |
| 2021-2022 | Expansion to sub-national level begins. Several provinces (DKI Jakarta, West Java, East Java) develop provincial-level Satu Data implementations. Most districts/cities have not started |
| 2023 | data.go.id exceeds 10,000 datasets. However, civil society audits (by organizations including Katadata and Open Data Lab Jakarta) find significant quality issues: outdated datasets, missing metadata, broken links, inconsistent formats |
| 2024 | New administration under President Prabowo Subianto. Institutional reorganization may affect Satu Data governance. Status uncertain |

**Budget Summary:**

| Category | Figure |
|----------|--------|
| Total Satu Data budget allocation | Not publicly consolidated. Estimated at IDR 500 billion - IDR 1 trillion (~USD 30-65 million) across agencies, 2019-2024 |
| data.go.id portal development and maintenance | Managed by the Ministry of Communication and Information Technology (Kominfo); specific budget not separately published |
| World Bank and donor support | World Bank's Indonesia Data for Policy program and DFAT (Australia) have provided technical assistance |

---

### What Worked

1. **The regulatory foundation is sound.** Presidential Regulation 39/2019 is a well-drafted data governance framework that correctly identifies the key elements: data stewardship, metadata standards, interoperability requirements, and open data access.

2. **National-level institutional buy-in was achieved.** Ninety national agencies appointing Walidata is a meaningful organizational commitment.

3. **Jakarta's provincial implementation shows what is possible.** DKI Jakarta's Smart City initiative has implemented Satu Data at the provincial level with genuine data integration across health, transportation, and social services -- demonstrating that the framework can work when political will and technical capacity are present.

**What Remains Challenging:**

1. **Data quality over data quantity.** The 10,000+ datasets on data.go.id represent a "publish and forget" pattern: agencies upload datasets to meet compliance requirements but do not maintain them. Many datasets are static snapshots rather than regularly updated feeds.

2. **Sub-national capacity gap.** Indonesia's 500+ districts and cities vary enormously in technical capacity. Most lack the IT staff, infrastructure, and budget to implement Satu Data standards. The framework is a national regulation, but implementation depends on local capacity that does not exist uniformly.

3. **Institutional resistance to data sharing.** Many agencies view their data as a source of institutional power and are reluctant to share it. The regulation requires data sharing but provides no penalty for non-compliance.

4. **Interoperability remains aspirational.** Different agencies use different systems, formats, and identifiers. The common metadata standard exists on paper but has not been uniformly adopted. There is no Indonesian equivalent of Estonia's X-Road or India's IndiaStack to provide technical data exchange infrastructure.

---

### Root Cause Analysis

**People (40%):**
- Walidata (Data Stewards) at many agencies are appointed as an additional duty rather than a primary role, with no additional staff or budget.
- Sub-national technical capacity is insufficient. Data standards work requires skilled data engineers and architects; most local governments have general IT staff at best.
- Institutional culture treats data as agency property rather than public infrastructure.

**Process (40%):**
- The regulation has no enforcement mechanism. There are no penalties for non-compliance with data sharing requirements.
- No dedicated funding stream for Satu Data implementation. Agencies must absorb the cost within existing budgets.
- The governance structure (Bappenas as coordinator, Kominfo as technical platform provider, BPS as statistics authority) creates coordination complexity without clear authority.

**Technology (20%):**
- The data.go.id portal is functional but basic. It lacks automated data quality checks, API-based data access for most datasets, and real-time data integration capabilities.
- No national data exchange infrastructure exists to enable real-time interoperability between agency systems.
- Sub-national connectivity varies widely, with remote eastern Indonesian districts having limited bandwidth.

---

### Lessons for the GaaS Framework

1. **Layer 0 (Legal and Policy Foundation):** Regulation without enforcement is insufficient. The GaaS framework should note that data governance frameworks require both mandate and consequence. Estonia's X-Road succeeded partly because data sharing is legally mandatory AND non-compliance has institutional consequences.

2. **Layer 1 (Shared Technology Core):** The GaaS framework's emphasis on shared data exchange infrastructure (modeled on X-Road) is validated. Indonesia's Satu Data shows that data governance policy without data exchange technology produces limited results. The policy and the technology must be deployed together.

3. **Layer 2 (People and Process Engine):** Data stewardship must be a resourced role, not an unfunded mandate. The GaaS framework's workforce blueprint should specify that data governance requires dedicated personnel at every tier of government.

4. **For Middle-Income Countries:** Indonesia's experience suggests a sequenced approach: start with a small number of high-value datasets (poverty, health, education) and demonstrate integration success before expanding to comprehensive coverage. Trying to standardize all data simultaneously overwhelms institutional capacity.

5. **Archipelagic/Federal Challenge:** Countries with significant geographic dispersion or federal structures face data integration challenges that centralized models (like Estonia's or Singapore's) do not address. The GaaS framework should include an "asymmetric implementation" pattern for large, geographically dispersed countries.

---

### Sources

1. Presidential Regulation No. 39 of 2019 on Satu Data Indonesia. Republic of Indonesia.
2. Bappenas (Ministry of National Development Planning). "Satu Data Indonesia: Implementation Progress Report." 2022.
3. data.go.id -- Indonesia's Open Data Portal. https://data.go.id
4. World Bank. "Indonesia Digital Economy Country Assessment." 2021.
5. Open Data Lab Jakarta. "Indonesia Open Data Assessment." 2022-2023.
6. Katadata Insight Center. Reports on Indonesian data governance and digital government, 2020-2023.
7. DKI Jakarta Provincial Government. "Jakarta Smart City: Satu Data Implementation." 2021.
8. United Nations. "E-Government Survey 2022." (Indonesia's ranking and progress.)
9. OECD. "Open Government Data Report: Enhancing Policy Maturity for Sustainable Impact." 2020. (Indonesia country profile.)
