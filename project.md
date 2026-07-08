# Tri Anugerah Yusra - Portfolio Lengkap

**Portfolio Website:** https://triyusra77.wixsite.com/portfolio
**Tagline:** "Find your happiness and success at the same time"
**Professional Title:** UX Designer | Product Designer | Graphic Designer

---

## TABLE OF CONTENTS
1. [Project 1: Market place (Pasar)](#project-1-market-place-pasar)
2. [Project 2: REPO](#project-2-repo)
3. [Project 3: Ploting Area "Rekam Wilayah"](#project-3-ploting-area-rekam-wilayah)
4. [Project 4: Invoicing and manage](#project-4-invoicing-and-manage)
5. [Project 5: Design System](#project-5-design-system)
6. [Project 6: Lampu Kuning](#project-6-lampu-kuning)
7. [Project 7: Wasnack](#project-7-wasnack)
8. [Project 8: Social Media "Hylo"](#project-8-social-media-hylo)
9. [Project 9: Social Media "LitUP"](#project-9-social-media-litup)
10. [Project 10: Social Media "Biotalk"](#project-10-social-media-biotalk)
11. [Project 11: Branding "PCC"](#project-11-branding-pcc)
12. [Project 12: My Collection](#project-12-my-collection)

---

# PROJECT 1: Market place (Pasar)

**Project Type:** UI/UX Design - Full-time Job
**Company:** PasarMIKRO
**URL:** https://triyusra77.wixsite.com/portfolio/pasarmikro-marketplace

## Project Overview
This is a marketplace platform for users to conduct transactions, either buying or selling commodities. The project focuses on creating a trading platform where users can buy or sell their commodities with ease.

## Problem Statement
Users (both buyers and sellers) need a simple way to find each other and conduct transactions. Buyers want to find new sellers and expand their network. Sellers are confused about who they should sell to. The platform needed to address these fundamental trading needs.

## User Research & Pain Points
Based on research and field visits, the main pain points identified:

1. Users want to find new buyers or sellers to expand their network
2. Users want to do transactions with people they already know and trust (due to large transactions)
3. Users want to buy or sell variants of commodities
4. Some users don't have enough money to buy commodities but need to maintain their business
5. Users want to search for specific commodities or sellers
6. Users (aged 40+) struggle with complex interfaces
7. Users want trust indicators to identify reliable traders

## Research Findings
- Users mostly discover new traders through word of mouth (drivers, brokers, personal approach)
- Track record is critical for trust building
- After 2-3 successful transactions, users can trust the seller
- Farmers are the main decision-makers
- Trust builds when payment is made in full cash/transfer in advance
- Some farmers don't have Android phones (only SMS capability)
- Prices vary daily and farmers don't know the best selling price

## Team Composition
- 2 UI/UX Designers
- 2 Front-end Developers
- 2 Back-end Developers
- 1 Lead Technology
- 1 CPO (Chief Product Officer)
- 1 QA (Quality Assurance)
- Duration: 1 month (two sprints)

## User Personas
**Persona 1: Trader**
- Main activity: Buy commodities
- Goal: Find suppliers and resell to customers
- Need: Efficient marketplace with search capabilities

**Persona 2: Farmer**
- Main activity: Sell commodities
- Goal: Reach more buyers
- Need: Simple interface to list and manage sales

## Design Goals
Focus on three main objectives:
1. **Discovery (Matchmaking)** - Help buyers and sellers find each other
2. **Trust** - Build confidence in transactions through transparency
3. **Value/Stickiness** - Give users reasons to return regularly

## Key Features Implemented

### 1. Priority Commodity Feature
- Allows users to set specific commodities they want to trade
- Users can select up to 10 commodities, or all if preferred
- Prevents irrelevant offers

### 2. Commodity Category & Search
- Search bar for finding specific toko (stores) and commodities
- Commodity category listing to help users discover available items
- Designed for users who may not know exactly what they're looking for

### 3. "Sukses" (Success) Feature
- Replaces traditional ratings system (not applicable in early-stage market)
- Shows number of transactions completed
- Displays transaction history timeline
- Indicates trustworthiness based on transaction volume

### 4. Badge System
- Silver badge indicates established users with at least 3 transactions
- Helps distinguish new users from experienced traders

### 5. Banner Feature
- Allows users to showcase commodities in their toko (store)
- Similar to social media promotion feature
- Customizable through "atur toko" (store settings)

### 6. Quantity Selection
- Previous: Directed users to separate page for quantity selection (overwhelming)
- New: Quantity selection on same page with real-time summary
- Shows total cost to pay for selected commodities

### 7. Marketplace Consolidation
- Merged "Pasar permintaan" (demand marketplace) and "Pasar baru" (new marketplace)
- Simplified interface and reduced confusion

## Design Process

### Initial Interface
- Marketplace with selectable Toko (stores)
- Users choose commodity and offer price if selling
- "Beli" (Buy) button directs to separate pages for quantity and payment
- Multiple redirects made process cumbersome

### Redesigned Concept (High-Fidelity)
- Streamlined purchasing flow - no page redirects for quantity selection
- Floating summary button shows purchase overview
- One-page checkout process with PIN verification
- Users can modify selections before final payment

## Implementation Status
Due to priority shifts and project size, initial design was postponed. However, after several months with expanded team, project was revamped with proper research and implementation. All features have been designed, developed, and deployed successfully.

## Final Deliverables
- Complete redesigned marketplace interface
- All key features implemented and live
- Improved user experience for both buyers and sellers
- System tested and deployed to production

### Screenshots Reference
[Foto: PasarMIKRO marketplace interface with commodity category view]
[Foto: Quantity selection interface with price summary]
[Foto: Toko profile with success metrics and transaction history]
[Foto: Search and filter functionality]
[Foto: Checkout process with PIN security]

---

# PROJECT 2: REPO

**Project Type:** Feature Development - Full-time Job
**Company:** PasarMIKRO
**URL:** https://triyusra77.wixsite.com/portfolio/copy-of-pasarmikro-ploting-area-1

## Project Overview
REPO feature allows traders to submit documents (Purchase Orders or Sales Orders) to PasarMIKRO to get instant credit. This enables them to purchase supplies to restock commodities without waiting for payment from end buyers.

## Problem Statement
Traders often have large transactions with end buyers but need money upfront to purchase supplies from suppliers. Without access to quick credit, they can't fulfill customer orders, impacting their business continuity.

## Real-World Scenario
1. Trader needs 1,000kg milk to sell to end buyer
2. Warehouse only has 500kg milk
3. Doesn't have cash to buy remaining 500kg from supplier
4. Solution: "REPO" Sales Order (SO) to PasarMIKRO
5. PasarMIKRO provides credit
6. Trader buys 500kg milk from supplier
7. Trader delivers 1,000kg to end buyer
8. Trader repays PasarMIKRO with margin

## Team Composition
- 1 UI/UX Designer
- 2 Full-stack Developers
- 2 Back-end Developers
- 1 Lead Technology
- 1 QA
- Duration: 1 sprint (2 weeks or 10 working days)

## Feature Requirements

### Commodity Purchase Requirements
- Traders must have already purchased the commodity
- Commodity serves as collateral/basis for repo

### Repo Process
- Based on existing inventory
- Validates that commodity has been purchased
- Ensures repo backed by tangible assets

### Transaction Documentation
- Traders must submit Purchase Order (PO) and invoice
- Provides proof of sale agreement between parties

### Direct Purchase Model
- Transactions made directly on platform
- Follows PO or sale agreement

### Accumulated Repo
- Traders can accumulate repo credits from multiple suppliers
- Each supplier has varying repo amounts
- Provides financing flexibility

### Repo Funding & Reimbursement
- Full repo financing for commodity purchases
- Option to reimburse funds later
- Restores repo limits upon reimbursement

### Inventory-Based Reimbursement
- After storing inventory, traders can receive reimbursements
- Based on commodity value in holdings

### Repo Limits
- May have daily or cumulative limits
- Ensures sustainable resource allocation

## Trader-Specific Conditions

### PO Verification Process
1. Trader presents PO from end buyer
2. PasarMIKRO reviews PO authenticity
3. If approved, PO serves as guarantee
4. PasarMIKRO extends loan to trader

### Credit Terms & Default Protection
- Traders receive funds based on PO
- PasarMIKRO contacts end buyer about transaction
- In case of default, PasarMIKRO can collect from end buyer
- Default contingency built into system

### Fast Transaction Turnaround
- Platform designed for quick transactions
- Commodities bought and sold swiftly
- Maintains liquidity and cash flow

## Client Purchase & Re-Sale Model

### Trading Framework
- Traders sell commodities to PasarMIKRO per PO amount
- PasarMIKRO may not purchase entire PO quantity

### Buyback Clause
- Commodities sold to PasarMIKRO can be repurchased later
- Higher price within specified timeframe
- Ownership transfers back to trader

### End Buyer Flow
- Final ownership moves from PasarMIKRO to end buyer
- Often through trader completing the cycle

## User Flow
[Foto: Complete REPO process flow diagram]
- Showing trader request → PasarMIKRO review → credit issuance → commodity purchase → sale to end buyer → repayment

## Design Process

### Design System Implementation
- Used existing library and design system from PasarMIKRO
- Created High-Fidelity mockups
- Website project for desktop view (PasarMikro Business - PMB)

### Design Documentation
- Added notes to design for developer reference
- Used User Stories to define processes clearly
- Ensured developers understand flow and function

### User Story Structure
- Clear process definition
- Function and purpose documentation
- Development-friendly documentation

## Design Examples
[Foto: REPO request form interface]
[Foto: Document upload interface for PO and invoice]
[Foto: Repo status tracking dashboard]
[Foto: Reimbursement request interface]
[Foto: Transaction history and repo balance]

## Implementation & Deployment
- Completed within 1 sprint timeline
- Designed, developed, and deployed to public
- Feature now available for PasarMIKRO users and partners

## Final Status
Feature successfully implemented and live in production. Traders can now access credit efficiently through the REPO feature.

---

# PROJECT 3: Ploting Area "Rekam Wilayah"

**Project Type:** Feature Development - Full-time Job
**Company:** PasarMIKRO
**URL:** https://triyusra77.wixsite.com/portfolio/copy-of-wasnack-2

## Project Overview
Feature allows users (traders/farmers) to measure and document their business territory/land area. Users can either map their land by walking with GPS or pin specific areas.

## Problem Statement
Partners want to understand and document the size of their business area. This information is needed for business documentation and planning purposes. Currently, no easy way to measure territory.

## Solution
"Rekam Wilayah" allows users to:
1. Capture land area by walking GPS tracking
2. Pin specific areas for quick marking
3. Input commodity data for each land plot
4. Document territory size for records

## Team Composition
- 2 UI/UX Designers
- 2 Front-end Developers
- 2 Back-end Developers
- 1 Lead Technology
- 1 Project Manager
- 1 QA
- Duration: 1 sprint (2 weeks or 10 working days)

## Feature Requirements

### Data Set Definition
Each user may have 1-to-many production plots with:
- Name/label for the plot
- Multiple GPS coordinates (long-lat)
- Can be single point or closed polygon
- Production capacity
- Unit of measurement
- Reference to multiple objects (photos, images)
- Series of validation dates

### Data Entry & Editing
- Entry available from menu or Edit Profile section
- Show all fields with mandatory indicators
- Reference and validation dates optional
- Specific editing for GPS coordinates needed

### Feature Options
**Point vs Plot:**
- Point: Records current position only
- Plot: User adds points by walking, one point at a time
- Auto-closure feature for polygons (snapping)
- Auto-adds last line to complete polygon

## Design Approach & Inspiration

### Benchmarking Research
- Desk research on land plotting/tracing methods
- Studied sports tracking apps (running, cycling)
- Sports apps have trail tracking features
- Applied trail tracking logic to land measurement

### Key Difference from Sports Apps
- Capture area (polygon) instead of linear path
- Users input commodity data for land plots
- Option to "Pin" specific areas (like game "Genshin Impact")
- Pinned areas show 0km size

## Design Process

### High-Fidelity Mockups
- Used existing product library and design system
- Created capture area flow
- Added input fields for commodity data
- Pin area feature with same data fields

### Design Variations
- Capture Area: Calculates actual area size
- Pin Area: Auto-fills 0km size
- Both feature same commodity data input requirements

## Final Deliverables

### Screenshots
[Foto: Point capture interface on map]
[Foto: Polygon area capture while walking GPS]
[Foto: Completed area plot with measurements]
[Foto: Pin area quick marking interface]
[Foto: Commodity data input form for plots]
[Foto: Area summary and validation screen]

## Implementation Status
Completed within 1 sprint timeline. Successfully deployed to production. Users and partners can now use the feature to document their territory and business areas.

## Future Improvements
Coming soon improvements planned for enhanced functionality

---

# PROJECT 4: Invoicing and manage

**Project Type:** Product Improvement - Full-time Job
**Company:** Linkz
**URL:** https://triyusra77.wixsite.com/portfolio/copy-of-pasarmikro-marketplace

## Project Overview
Comprehensive project to improve invoicing features, inventory management, and order form handling. Addresses tax calculations, inventory management, role-based access control, and PDF document generation.

## Problem Situation
Users frequently create and send Purchase Orders (POs) and Sales Orders (SOs) for business transactions involving large quantities of goods. While large companies have dedicated teams, startups handle this manually, leading to:
- Time-consuming processes
- Complex tax calculation errors
- Difficulty tracking sales and purchases

## Team Composition
- 1 UI/UX Designer
- 4 Full-stack Developers
- 1 Lead Developer
- 1 Head of Product
- Duration: 1 month

## User Pain Points Identified

### Complexity Issues
- System overly complex, especially for PO/SO creation
- Too many steps in order process
- Limited visibility into order status

### Tax Calculations
- Incorrect tax application to POs
- Difficulty editing tax information
- Different requirements for Indonesia, Malaysia, Singapore

### Document Editing
- Unable to edit customer names
- Difficulty tracking price changes
- Limited remarks/notes functionality

### Customization Needs
- Want automatic discount and tax settings
- Desire more control over document layout
- Need custom report creation

### Interface Issues
- UI cluttered and confusing
- Difficult navigation
- Time-consuming data entry
- Limited search functionality

### Inventory Management
- Difficulties with large quantities
- Multiple supplier management challenges
- Manual spreadsheet uploads required

### Communication Preferences
- Users prefer WhatsApp over email
- Want more customization in communication methods

### System Features Requested
- Custom report generation
- Order history tracking
- Multiple currency support

## Focus Areas for Improvement

### 1. Accurate Formula Implementation
Ensuring all calculations (taxes and totals) are accurate and consistent

### 2. Granular Access Control
Robust system allowing owners to:
- Onboard employees
- Assign specific permissions by role
- Limit employee platform access

### 3. Inventory & Catalog Management
- Enhanced inventory features
- User-friendly experience

### 4. Document Generation
- Improved invoices, SOs, and POs
- Clear and complete information

### 5. Partner Experience
- Streamlined transaction process
- Intuitive interface

## Major Improvements Implemented

### A. Tax Formula Improvements

**Indonesia Tax Calculations:**
- PPh Gross Up
- PPh
- PPN Inclusive
- PPN Exclusive
- Consulted with colleagues and tax experts
- Significantly different from Malaysia and Singapore

**Malaysia Tax Formula:**
- Implemented with stakeholder feedback

**Singapore Tax Formula:**
- Implemented with stakeholder feedback

### B. Roles and Permissions Feature

**Previous System:**
- Owners could onboard employees
- Employees assigned roles: "Business Admin" or "Business User"
- Owner also "Business Admin"
- Unrestricted platform access (security risk)
- No access controls

**New System:**
- Owners control employee access granularly
- Edit vs View-only permissions
- Role-based access control
- Only owners can manage roles/permissions
- Enhanced security

### C. Inventory Management Improvements

**Previous Process:**
- Users input all inventory into Excel spreadsheet
- Upload entire spreadsheet to Linkz
- Any errors required complete re-upload
- No direct editing capability
- Very inconvenient

**New Process:**
- Upload Excel files OR input manually in platform
- Direct editing capability within Linkz
- No need for frequent re-uploads
- Flexible inventory management

**User Feedback Implementation:**
- Users wanted to maintain Excel workflow
- Also wanted platform editing capability
- Solution addresses both preferences

### D. Catalog Separation from Inventory

**Previous Design:**
- Inventory and catalog combined
- Creating inventory automatically created catalog
- To offer different pricing (public vs private), users had to create duplicate inventories
- Tedious duplicate data entry

**New Design:**
- Separate inventory and catalog functions
- Single inventory creates multiple catalogs
- Eliminates duplicate data entry
- Features:
  - Create private catalogs with special pricing for partners
  - Create public catalogs with standard pricing
  - Manage public/private offerings independently

### E. Order Form Improvements

**Challenge:**
- Core feature of Linkz platform
- Each order form incurs credit charge
- Initial release had limited time constraints
- No sprint development cycle initially

**Previous Design Issues:**
- Imprecise calculation engine
- Required manual tax input
- Users entered taxes as fixed amounts or percentages
- Led to inconsistencies and errors

**New Features:**
- "Payable Amount" feature for down payments
- Payment of remaining balance upon goods receipt
- Enables sellers to receive partial payment upfront
- Mitigates fraud risk for large orders
- Standardized tax calculation (percentages only)
- Aligns with standard tax practices

### F. PDF SO and PO Improvements

**Previous Problems:**
- Unclear whether document was SO or PO
- Unclear who issued and who received order
- Lack of delivery info
- No remarks/notes section
- Users confused about document purpose

**New Features:**
- Explicit "Sales Order" or "Purchase Order" indicator
- Clear issuer and recipient identification in title
- Delivery information included
- Remarks field for additional notes
- Clearer overall presentation

### G. Employee Feature Enhancement

**Previous Design:**
- Owners could onboard employees
- Employees assigned basic roles
- Unrestricted platform access
- Security concerns

**New Design:**
- "Roles and Permissions" feature
- Owners control which platform sections employees access
- Edit or view-only permissions per section
- Only owners manage roles/permissions
- Enhanced security and control

## Final Deliverables

### Screenshots and Examples
[Foto: Tax formula documentation for Indonesia, Malaysia, Singapore]
[Foto: Roles and permissions management interface]
[Foto: Inventory upload interface (Excel and manual input options)]
[Foto: Inventory item editing interface]
[Foto: Catalog creation from inventory]
[Foto: Order form with payable amount feature]
[Foto: Updated PDF SO/PO with clear labeling]
[Foto: Employee roles and permissions dashboard]

## Implementation Status
All improvements designed and implemented successfully. Platform now offers significantly enhanced functionality for users managing invoices, inventory, and team access.

---

# PROJECT 5: Design System

**Project Type:** Internal Tool - Full-time Job
**Company:** Linkz
**URL:** https://triyusra77.wixsite.com/portfolio/copy-of-pasarmikro-ploting-area

## Project Overview
Creating a comprehensive, organized design system from scratch for the Linkz product. Previous design system was disorganized, with unused components and inconsistent styling causing designer and developer confusion.

## Problem Statement
The previous design system had:
- Too many colors without proper organization
- Different button styles throughout
- Many unused components
- Excessive typography options
- Components not properly recorded
- Inconsistent application across designs
- Confusion among designers and developers

## Solution Goal
Create new, properly organized design system from scratch, adjusted to company style and standards. System should be clear, usable, and followed by both designers and developers.

## Project Duration
3 days completion

## Previous Design System Issues

### Components
- Too many components not being used
- Components not organized logically
- Confusing component library
- Inconsistent naming

### Typography
- Too many typography styles
- Not all styles actually used
- Inconsistent application

### Colors
- Multiple unused colors
- No clear color hierarchy
- Confusion about which colors to use

### Documentation
- Previous documentation unclear
- Components not properly recorded
- Hard to understand purpose of components

## New Design System Creation

### Design Principles
**Guidance Sources:**
- Material Design by Google
- WCAG 2.0 for color accessibility

### Component Development
- Created components based on actual product needs
- Ensured all components follow company guidelines
- Maintained company color palette
- Aligned with company brand identity
- Every component has clear purpose

### Color System
- Followed WCAG 2.0 accessibility guidelines
- Proper contrast ratios
- Clear color hierarchy
- Limited palette (not excessive)

### Typography
- Organized typography options
- Only include styles actually used
- Clear hierarchy for different text types

### Structure
- Logically organized components
- Easy to navigate
- Clear naming conventions
- Comprehensive documentation

## Final Results

### Screenshots
[Foto: Design system color palette with accessibility ratings]
[Foto: Typography scale and styles]
[Foto: Button component variations]
[Foto: Input field components]
[Foto: Form elements and states]
[Foto: Navigation components]
[Foto: Card and layout components]
[Foto: Icon system]

## Benefits

### For Designers
- Clear component library to reference
- Consistent styling across projects
- Faster design process
- Easy to maintain brand consistency

### For Developers
- Clear understanding of expected design
- Consistent component implementation
- Easier to code components
- Reduced back-and-forth with designers

## Implementation Impact
New design system provides foundation for consistent, efficient product development. All team members now follow same guidelines, reducing confusion and improving collaboration.

---

# PROJECT 6: Lampu Kuning

**Project Type:** Studio Production / Web Design - Group Project (School)
**School:** International Design School (IDS)
**URL:** https://triyusra77.wixsite.com/portfolio/copy-of-wasnack-1

## Project Overview
Collaborative studio production project bringing together students from three departments: Digital Design, Digital Animation, and Digital Film/Multimedia. Project created during COVID-19 pandemic with strict activity limitations. Resulted in interactive website showcasing short film, games, and design work.

## Project Theme & Concept
**Theme:** "Dilema" - Reflecting the dilemma and difficult choices faced during COVID-19 pandemic
**Design Team Project Name:** "Lampu Kuning" (Yellow Light) - Symbolizing the intersection between choices or pausing on the road

## Background Context

### The Challenge
- Normally studio production happens at end of term with cinema screening
- COVID-19 severely limited all activities
- Project had to continue despite restrictions
- Team faced choice: stop project and risk grades or push forward with challenges
- This fundamental dilemma became project theme

### Resonance with Theme
- Project "Lampu Kuning" perfectly aligned with "Dilema" theme
- Yellow light symbolizes pausing point between choices
- All team members felt deeply connected to theme concept

## Design Team Composition (9 members)

### Leadership & Direction
1. **Rizky Vireza** - Producer and Team Lead
2. **Aulia Fransisca** - Art Director
3. **Adi Suryo Pramono** - Head of Publication

### Web & Design
4. **Tri Anugerah Yusra (You)** - Website Director
5. **Adisya Al Zahra** - Publication Designer
6. **Jabal Satya Witjaksono** - Publication
7. **Widya Lani Wijaya** - Web Designer
8. **Faldi Calvin** - Web Designer

### Marketing & Communications
9. **Galih Anugrah** - Social Media / Public Relations

## Role: Website Director

### Responsibilities
- Ensure website runs smoothly
- Determine how to create interactive website
- Identify and implement appropriate tools and technologies

### Technology Stack
- **Platform:** WordPress
- **Plugin:** Slider Revolution (chosen for ease of use, drag-and-drop functionality)
- **Reason:** Already familiar with WordPress, easy implementation

### Key Contributions
- Smooth website operation
- Interactive design implementation
- Tool selection and implementation

## Branding & Visual Identity

### Logo Design
- Created logo using line shapes forming ball-like figure
- Inspiration: Cartoon characters showing dizziness (swirly balls above head)
- Three balls with different colors
- Colors based on traffic lights: Red, Green, Yellow
- Symbolizes decision-making at intersection

### Brand Application
- Website visual language matched branding
- Applied traffic light color scheme throughout
- Maintained cohesive visual identity

## Website Structure & Sitemap

### Design Philosophy
- Focus on simplicity and ease of use
- Added interactive design elements to enhance user experience
- Simple navigation for better usability

### Menu Structure (5 main sections)
1. **Homepage** - Main entry point with overview
2. **Film Pendek** - Short film section
3. **Game** - Interactive mini-games section
4. **Talkshow** - Discussion/interview content
5. **Galeri** - Gallery section featuring IDS and all teams

### Homepage Content
- Showcases main content (short film and games)
- Displays trailers and teasers only
- Users directed to specific pages for full experience

### Galeri (Gallery) Section
- Dedicated to International Design School information
- Features all three teams (design, animation, film)
- Interactive voice notes while scrolling
- Tour guide-inspired audio experience
- Guides users through content with narration

## Design Process

### Initial Concept
- Hand sketches and preliminary ideas
- Focus on homepage first (critical for user retention)
- Design sketches for interface approach

### Sketching & Wireframing
- Sketched multiple page layouts
- Found design benchmarks for inspiration
- Focused on creating interesting, engaging pages
- Made gallery more interactive with audio narration

### Interactive Gallery Concept
- Audio narration triggered by scroll
- Similar to tour guide experience
- Explains objects while users view them
- Enhances engagement and user guidance

## Team Activities & Process

### Documentation
[Foto: Team brainstorming session]
[Foto: Sketching and design process]
[Foto: Team members working on project]
[Foto: Behind-the-scenes team activities]
[Foto: Collaborative work environment]

## Final Result & Deployment

### Project Completion
- Despite pandemic challenges, completed full project
- Successfully published on International Design School official website
- Integrated short film (film team)
- Integrated mini-games (animation team)
- Professional website interface (design team)

### Public Availability
**Project Link:** "Studio production: Lampu Kuning"
- Available on IDS official website
- Short film playable
- Mini-games accessible
- Design portfolio showcased

### Impact
- Proved team resilience during pandemic
- Successfully merged three disciplines
- Created engaging user experience
- Demonstrated ability to work under constraints
- Successfully executed complex collaborative project

## Key Takeaways
- Collaborative design across disciplines
- Problem-solving under constraints
- Interactive web design implementation
- User experience focus
- Successful project management

---

# PROJECT 7: Wasnack

**Project Type:** UX/UI Design - Course Project
**Course:** Google & Coursera
**URL:** https://triyusra77.wixsite.com/portfolio/wasnack

## Project Overview
Wasnack is a mobile app designed to solve the problem of long waiting lines at movie theaters. Users can pre-order snacks and tickets before arriving, ensuring they can enjoy both without wasting time.

## Real-World Problem

### The Scenario
You want to watch a movie at 20:00. You need to:
1. Drive 25 minutes to the theater
2. Order tickets
3. Buy snacks
4. Get seated before movie starts

But you hate standing in line...

### The Problem
- People hate standing in line for long periods
- Often arrive late and miss ordering opportunity
- Movie starts before snacks are purchased
- Time pressure creates stress

## Solution
Allow users to pre-order snacks and tickets before arriving at theater, then skip lines and go directly to seats with purchased items.

## User Research

### Research Methods
- User interviews with potential users
- User journey mapping
- Identified primary user group: working adults
- Users want convenience without long waits

### Key Insights
- Time is not only limiting factor
- Other challenges in buying snacks at theater
- Accessibility issues for diverse users
- Older users find interface confusing

## User Pain Points

### 1. Time Pressure
- Sometimes arrive late to theater
- Don't have enough time to order snacks
- Miss movie because of waiting

### 2. Accessibility Issues
- Platform not equipped for diverse users
- Challenges for people with disabilities
- Older people struggle with interface

### 3. Information Architecture (IA)
- Menu behind counter not visible
- Text too small to read
- Must ask workers for explanations
- Name announcement for pickup uncomfortable

## User Persona

### Persona: Christine
- **Profession:** Freelance Graphic Designer
- **Age:** Working adult
- **Goal:** Eat snacks while watching movie
- **Challenge:** Limited time to purchase before movie starts
- **Behavior:** Prefers convenience and efficiency

### User Story
"Christine is a Freelance Graphic Designer who needs to buy snacks because she wants to eat inside the movie theater"

## User Journey Mapping
[Foto: Christine's normal journey buying snacks at theater]
- Shows current process from arrival to sitting in movie
- Identifies pain points at each step
- Reveals opportunity for improvement

## Design Process

### Phase 1: Initial Concept

**Hand-Drawn Sketches:**
- Conceptualized app structure
- Sketched wireframes on paper
- Prioritized quick theater selection
- Streamlined snack selection process
- Ensured one-page, one-app experience

**Benefits of Paper Sketching:**
- Easy translation of ideas
- No UI concerns during ideation
- Faster iteration process
- Validated concepts before digitizing

### Phase 2: Digital Wireframing

**Low-Fidelity Mockups in Figma:**
- Converted paper sketches to digital
- Created clickable wireframes
- Process flow from home → theater selection → snack selection → payment
- Validated information architecture
- Ensured addresses user pain points

**Design Principles:**
- Easy to pick movie and snacks
- Single app, single page concept
- Simple transaction flow
- One-page checkout process

### Phase 3: User Testing

**Usability Study (Moderated):**
- Recruited users from interview phase (matching persona)
- Conducted via Zoom
- Provided interactive prototype
- Gave specific tasks to complete
- Gathered qualitative feedback

## Testing Findings

### Finding 1: Synopsis & Time Info
- Users want movie synopsis on homepage
- Movie show times needed for decision-making
- Required homepage improvement

### Finding 2: Menu & Search Bar
- Users want to find specific snacks
- Need search functionality
- Want menu visibility
- Helped refine snack discovery

### Finding 3: Quantity & Seats
- Need amount selection for items
- Want to choose seats in app
- Not handled in initial design

### Finding 4: Sharing & Group Purchase
- Not everyone buys for themselves
- Users want to share receipt with friends
- Others don't need to wait for purchaser
- Social/sharing feature needed

## Design Refinement

### Iteration Based on Findings

**Search Bar Addition:**
- Allows users to find specific snacks
- Helps with snack discovery
- Reduces browsing friction

**Share Button:**
- Enables receipt sharing with friends
- Others can pick up snacks directly
- Improves group movie experience

### Accessibility & Usability
- Improved information hierarchy
- Better visibility of key information
- Simplified navigation

## Visual Design

### Color Palette
**Primary Color: Blue**
- Represents security and calm
- Evokes sense of order and peace
- Builds user trust and confidence
- Makes users feel safe while using app

**Reasoning:**
- Users need to trust purchasing process
- Feel relaxed when using app
- Blue psychologically supports these feelings

### Typography
**Font: Poppins**
- Reflects brand values
- Represents dedication to quality
- Communicates brand promise
- Clear and modern aesthetic

### Brand Philosophy
Wasnack dedicated to loyal customers:
- All tickets and food are best quality
- Always available at affordable price
- Always served with smiles and humility

## Final Mockup App Design

### Complete User Flow
[Foto: Homepage with theater selection]
[Foto: Movie details with synopsis and times]
[Foto: Snack menu with search functionality]
[Foto: Snack selection with quantity chooser]
[Foto: Cart/summary screen]
[Foto: Checkout process]
[Foto: Payment confirmation]
[Foto: Receipt sharing screen]

### Key Features Shown
- Theater selection quick access
- Movie synopsis and times
- Snack menu with search
- Quantity selection
- Real-time price calculation
- Seat selection
- Payment processing
- Receipt generation and sharing

## Design Achievement
Successfully created app design that:
- Solves identified user problems
- Incorporates user research findings
- Implements discovered user needs
- Provides intuitive interface
- Maintains visual brand consistency
- Enhances overall movie experience

---

# PROJECT 8: Social Media "Hylo"

**Project Type:** Freelance Graphic Design
**Client:** Hylo Interior Design
**Instagram:** https://www.instagram.com/hylo.id/

## Client Overview

### Who is Hylo
Hylo is a company engaged in interior design for buildings including homes, offices, and other spaces. With experience and professionalism, Hylo has become one of the best interior design companies in Indonesia.

### Target Market
- **Age:** 30-50 years old
- **Socioeconomic Status:** B-A (Upper-middle to upper class)
- **Characteristics:** People with passion for beautiful spaces
- **Key Requirement:** Must own or be planning to build

## Brand Positioning
Making interior design for buildings more aesthetic and great

## Design Process

### Brand Colors
**Color Palette:**
- #EF9A52 (Warm orange)
- #231F20 (Dark charcoal/black)
- #ffffff (White)

**Note:** Color palette pre-selected by client, designer followed established brand colors

### Typography
**Font:** Work Sans
- Sans-serif typography (more common in design)
- Extensive family typefaces available
- Professional and modern appearance
- Good for varied content types

### Social Media Concept

**Design Approach:**
- Focus on showcasing interior design work
- Stand-out, impressive visual presentation
- Adherence to brand color palette
- Heavy use of video content

**Content Strategy:**
- Emphasis on visual design quality
- Videos for higher engagement
- Interior design project showcases
- Before/after transformations
- Design process visualization

**Rationale for Video:**
- People get excited watching videos
- Better engagement than static images
- Shows transformation and process
- Demonstrates design expertise
- More memorable content

## Content Categories
[Foto: Interior design project showcase 1]
[Foto: Interior design project showcase 2]
[Foto: Design transformation video thumbnail]
[Foto: Material and color palette display]
[Foto: Space planning and layout]
[Foto: Furniture arrangement and styling]

## Design Outcomes
Social media content successfully showcases Hylo's interior design expertise and attracts target audience through engaging visual presentation and video content.

---

# PROJECT 9: Social Media "LitUP"

**Project Type:** Organizational Social Media Design
**Organization:** LitUP
**Role:** Social Media Content Designer
**Instagram:** https://www.instagram.com/litup.id/

## Organization Overview

### Who is LitUP
LitUP is an educational organization operating in Indonesia with focused mission on student empowerment.

### Vision
To dream of seeing the majority of Indonesian students eagerly embracing school time and learning with enthusiasm throughout the day.

### Mission
To ignite the spirit of learning among the nation's children through relevant education.

## Target Market

### Primary Audience
- **Age:** 17-22 years old (mainly students)
- **Characteristics:** Lack clear future goals
- **Platform Strategy:** Instagram as primary outreach tool
- **Goal:** Reach as many students as possible

## Brand Concept Development

### Logo Design

**Symbolic Elements:**
1. **Fire** - Represents passion and energy for learning
2. **Pen** - Represents storytelling and self-expression

**Brand Message:**
- Passion + pen = students writing their own stories
- Emphasis on enabling students to define their future

### Color Palette

**Primary Colors:**
- **Yellow (#FFC725)**
  - Represents cheerfulness
  - Conveys creativity
  - Symbolizes energy
  - Associated with intelligence (education context)

- **Blue (#062057)**
  - Represents calmness
  - Conveys stability
  - Symbolizes trustworthiness
  - Represents professionalism

**Color Psychology:**
- Yellow: Energy, positivity, inspiration
- Blue: Stability, trust, responsibility
- Combined: Balance between inspiration and reliability

## Social Media Design Strategy

### Design Concept
- Maintain consistent brand identity across posts
- Align with overall brand concept
- Use established color palette consistently
- Apply design principles to all content

### Content Focus
- Educational messages
- Student empowerment
- Learning inspiration
- Future goal setting guidance
- Student success stories

### Visual Design
[Foto: LitUP Instagram post design 1 - Yellow and blue composition]
[Foto: LitUP Instagram post design 2 - Student testimonial]
[Foto: LitUP Instagram post design 3 - Educational content]
[Foto: LitUP Instagram post design 4 - Motivational message]
[Foto: LitUP brand color palette and typography]

## Design Impact
Social media content successfully communicates LitUP's mission of inspiring student learning through visually appealing, on-brand content that resonates with target audience of young students.

---

# PROJECT 10: Social Media "Biotalk"

**Project Type:** Graphic Design Internship Project
**Client:** Biotalk (Local Indonesian Brand)
**Role:** Graphic Design Intern
**Agency:** Local Digital Agency
**Instagram:** https://www.instagram.com/biotalk.id/

## Client Overview

### Who is Biotalk
Biotalk is a local Indonesian brand focused on personal care products (skincare and body care). Since 2015, offers natural-based products for sensitive skin solutions tailored to skin type and needs.

### Market Position
- Natural-based skincare brand
- Focus on sensitive skin care
- Personalized solutions

## Target Market

### Audience Definition
1. **Age:** 17-40 years old
2. **Skin Condition:** Have skin issues
3. **Socioeconomic Status:** C-A (affordable products with powerful impact)
4. **Values:** Love natural products

### Market Positioning
- Affordable yet effective
- Natural ingredients
- Safe for sensitive skin
- No damaging chemicals
- Accessible to broad market

## Brand Design Process

### Color Strategy

**Color Palette:**
- #010101 (Pure black)