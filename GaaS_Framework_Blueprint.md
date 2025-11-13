# Blueprint: Building the Government as a Service (GaaS) Framework

**To the AI:** This document is the master blueprint for refactoring the existing "Government as a Service" (GaaS) framework. The original framework's content (Tiers 0-5) is valuable, but its structure is a-la-carte and fails to show how the components integrate.

**The Goal:** Re-architect this content into a new, holistic **GaaS Operating Model**. This new model is a "full-stack" blueprint (Policy, People, Process, Technology) for a government built from the ground up, inspired by systems like ITIL and TBM.

## 1. The Core Vision: The GaaS Operating Model

The GaaS framework is not a collection of separate documents. It is a single, integrated "operating system" for a nation. This operating model is visualized through two complementary views that work as one:

1.  **The GaaS Architectural Framework:** A 5-layer architectural model that shows the *static structure* of the government (the "general management practices" or "governance framework").

2.  **The GaaS Service Value System (GSVS):** An ITIL-inspired *process model* that shows *how* work and value flow through that static structure (the "service management" or "service delivery framework").

Your primary task is to re-map all old GaaS content into these two new models.

## 2. The GaaS Architectural Framework (The Static Blueprint)

This is the main architecture. You will create a new "Framework" section based on these 5 layers, and migrate the old content into them.

### Layer 0: The Foundation (Policy, Law & Mandate)

* **Purpose:** This is the "bedrock." It provides the *legal authority* and rules for the entire system to exist. A digital government cannot exist without the law enabling it.
* **Key Principles:** Rule of Law, Mandate, Regulatory Governance.
* **Actions & Systems:** The legislative process, policy-making, regulatory bodies.
* **Content Mapping (Source: Old GaaS):**
    * **`Tier 4 (Policy & Legal Templates)`:** This is the *entire* content for this layer. You will move all `Tier 4` content here.
    * **`Tier 0 (Manifesto)`:** The Manifesto is the *political justification* for creating this layer.

### Layer 1: The Core (Technology Platforms & Blueprints)

* **Purpose:** The "Build Once, Use Everywhere" technology layer. This is the shared infrastructure and platforms that all agencies use.
* **Key Principles:** Zero-Trust, Interoperability (API-first), Shared Services, Data Sovereignty.
* **Actions & Systems:** Shared digital identity platforms, national payment gateways, data exchange layers (X-Road), government cloud infrastructure.
* **Content Mapping (Source: Old GaaS):**
    * **`Tier 2 (Technical Blueprints)`:** This is the *core* of this layer. Move all `Tier 2` content here. You will rename this section from "Technical Blueprints" to "Core Platforms & Blueprints."
    * **Example:** The `Digital Identity Blueprint` and `Payments Blueprint` are the architectures for the "Actions & Systems" in this layer.

### Layer 2: The Engine (Service Operations & Workforce)

* **Purpose:** The "Process" and "People" layer. This is the "how" and "who" of running the government. It's the operating model for the public servants who use the *Technology* (Layer 1) to build and manage services.
* **Key Principles:** Service Management (ITIL), Agile Delivery, Continual Improvement, Skilled Workforce.
* **Actions & Systems:** The "government factory." This includes Agile/DevOps teams, IT Operations, Service Desks, and the organizational structures that support them.
* **Content Mapping (Source: Old GaaS):**
    * **`Tier 3 (Implementation Playbooks)`:** This is the *entire* rulebook for this layer. These playbooks are the "Process."
        * `Agile Delivery Playbook`
        * `Service Management (ITIL) Playbook`
        * `Service Desk Playbook`
    * **`Tier 2 (Volume 1: People & Organizational Architecture)`:** This is the "People" part of this layer. You will *move* this specific volume from its old `Tier 2` home and place it here.

### Layer 3: The Portfolio (Public Value Services)

* **Purpose:** The "what" the government *does*. This is the complete, managed portfolio of all services offered to the public (e.g., "Start a Business," "Apply for Visa").
* **Key Principles:** **Radical Transparency (TBM)**, User-Centric Design, Portfolio Lifecycle Management.
* **Actions & Systems:** A "National Service Catalog." This layer uses **Technology Business Management (TBM)** to map the *cost* of Layers 1 & 2 to the *value* and *outcome* of each service in this portfolio.
* **Content Mapping (Source: Old GaaS):**
    * **`Tier 1 (Executive Playbook)`:** This playbook is the *strategic guide* for *managing* this portfolio. Move it here. It's the "how-to" for government leaders to perform Portfolio Management.

### Layer 4: The Experience (Citizen & Ecosystem Channels)

* **Purpose:** The *only* layer the citizen sees. The unified "front-door" to the entire government.
* **Key Principles:** Omnichannel, Accessible, Contactless, Proactive, Co-Design.
* **Actions & Systems:** The single `GOV.XX` portal, the unified mobile app, government chatbots, and the APIs that allow businesses (the "Ecosystem") to connect.
* **Content Mapping (Source: Old GaaS):**
    * **`Tier 5 (Community Hub)`:** This content moves here. The "Community Hub" is the mechanism for *citizen co-design* and feedback for this Experience Layer.
    * Parts of `Tier 3 (Digital Identity Playbook)` will be referenced here, as the "login" experience is a key part of this layer.

## 3. The GaaS Service Value System (GSVS) (The Dynamic Process Engine)

After explaining the 5-layer static blueprint, you will create a *new* section (e.g., "How Work Gets Done: The GSVS") that explains this process. This process model *runs on* the Architectural Framework.

The GSVS shows how the 5 layers work together as an *engine* to create value.

1.  **Guiding Principles:** The "philosophy" that steers the engine.
    * **Content:** This is the **`Old Tier 0 (Manifesto)`**.
2.  **Governance:** The "steering wheel" and "dashboard."
    * **Content:** This is the **`Old Tier 1 (Exec Playbook)`** (Portfolio Mgt) and the **`TBM Framework`** (Transparency) and the **`Old Tier 4 (Policy)`** (The Rules).
3.  **The Service Value Chain (The Engine Block):** The core process flow.
    * **(New Content):** You will describe this flow:
        * **Mandate:** A new policy (Layer 0) or public need is identified.
        * **Architect:** A solution is designed using the **`Core Blueprints`** (Layer 1).
        * **Build/Acquire:** The service is built using the **`Agile Playbook`** (Layer 2).
        * **Transition:** The service is tested and released using the **`Service Mgt Playbook`** (Layer 2).
        * **Deliver & Support:** The service is live in the **`Portfolio`** (Layer 3), accessed via the **`Experience`** (Layer 4), and supported by the **`Service Desk Playbook`** (Layer 2).
4.  **Practice & Blueprint Library (The "Toolbox"):** The assets the engine uses.
    * **Content:** This is not a new set of documents. You will state: "The Library is comprised of all the assets in **`GaaS Layers 1, 2, and 4`**."
5.  **Continual Improvement (The Feedback Loop):**
    * **Content:** This is the **`Old Tier 5 (Community Hub)`** (citizen feedback) and data from TBM (service performance).

## 4. Content Migration Plan (Explicit Instructions)

This is your primary task. You will create the new framework structure and migrate the old content.

| **Old GaaS Asset** | **New GaaS Layer (Primary Home)** | **Purpose in New Model** |
| :--- | :--- | :--- |
| **Tier 0 (Manifesto)** | **GaaS Layer 0 (Foundation)** | The *political justification* and "why" for the entire system. Also the "Guiding Principles" of the GSVS. |
| **Tier 1 (Exec Playbook)** | **GaaS Layer 3 (Portfolio)** | The *strategic guide* for managing the national service portfolio and implementing TBM governance. |
| **Tier 2 (Technical Blueprints)** | **GaaS Layer 1 (Core)** | The *architectural standards* for the shared technology platforms (ID, Payments, Data, etc.). |
| **Tier 2 (People & Org Arch.)** | **GaaS Layer 2 (Engine)** | The *organizational blueprint* for the "People" who will run the processes in this layer. |
| **Tier 3 (Impl. Playbooks)** | **GaaS Layer 2 (Engine)** | The *process rulebooks* (ITIL, Agile, Service Desk) for the "Process" in this layer. |
| **Tier 4 (Policy & Legal)** | **GaaS Layer 0 (Foundation)** | The *legal bedrock* and authority for the entire system. The "Rule of Law" for digital government. |
| **Tier 5 (Community Hub)** | **GaaS Layer 4 (Experience)** | The *citizen engagement model* for co-designing and providing feedback on the experience layer. |

## 5. Summary of Generation Tasks

1.  **Delete the Old Structure:** Do not present the framework as Tiers 0-5.
2.  **Create New Homepage:** Generate a new "Framework Overview" page that introduces the **GaaS Operating Model**, explaining its two parts: The **GaaS Architectural Framework** (the 5 Layers) and the **GaaS Service Value System** (the process).
3.  **Create 5 New Sections:** Create the 5 main navigation sections based on the GaaS Layers:
    * `Layer 0: The Foundation (Policy & Law)`
    * `Layer 1: The Core (Technology Platforms)`
    * `Layer 2: The Engine (People & Process)`
    * `Layer 3: The Portfolio (Public Value Services)`
    * `Layer 4: The Experience (Citizen Channels)`
4.  **Migrate & Rewrite Content:**
    * Move the *content* from `Tier 4` into the `Layer 0` section.
    * Move the *content* from `Tier 2 (Tech)` into the `Layer 1` section.
    * Move the *content* from `Tier 3` AND `Tier 2 (People)` into the `Layer 2` section.
    * Move the *content* from `Tier 1` into the `Layer 3` section.
    * Move the *content* from `Tier 5` into the `Layer 4` section.
5.  **Create GSVS Explanation:** Generate a new page (e.g., "How it Works: The GaaS Service Value System") that details the **GSVS** process flow (Mandate -> Architect -> Build -> etc.) and explicitly *links* each step to the assets in the 5 GaaS layers.
6.  **Integrate Frameworks:** When rewriting the content for each layer, *explicitly* name-check the integrated frameworks:
    * **Layer 0/3:** Mention **TBM** and **COBIT** for governance and transparency.
    * **Layer 1:** Mention **Zero-Trust** and **TOGAF/Archimate**.
    * **Layer 2:** Mention **ITIL** and **Agile/Scrum** as the core processes.