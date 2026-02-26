export interface Project {
    id: number;
    title: string;
    problem: string;
    techStack: string[];
    liveDemo: string;
    github: string;
    image: string;
    details: {
        problem: string;
        approach: string;
        architecture: string;
        challenges: string;
        results: string;
    };
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Lost artifact auction system',
        problem: 'The project is an auction platform for lost artifacts, where users can bid on items.',
        techStack: ['Java'],
        liveDemo: 'https://drive.google.com/drive/folders/1bJBFk2HIy5IwwgRxNnuoV0MnDW6ieqUX?usp=drive_link',
        github: 'https://github.com/GVR2007/Lost_Sea_Artifact_Auction--3-/tree/main',
        image: '/projects/auction.png',
        details: {
            problem: 'The project is an auction platform for lost artifacts, where users can bid on items.',
            approach: 'A structured OOP-based application approach.',
            architecture: 'Layered Architecture (3-Tier Style) | Presentation Layer | Business Logic Layer: Auction rules, Bid validation, Role validation, Winner selection logic | Data Layer: Artifact storage, User data, Bid records',
            challenges: 'Auction systems fail if: Lower bid overrides higher bid | State Management (Auction states): Not started, Active, Ended, Sold | Data Integrity (Problems like): Bidding after auction end, Same user bidding multiple times improperly, Invalid artifact IDs',
            results: 'Functional Result: A structured digital auction platform, Artifact listing system, Controlled bidding system, Role-based interaction | Technical Result: OOP system modeling, Layered architecture, Validation logic.'
        }
    },
    {
        id: 2,
        title: 'Genomic Data Pattern Search Platform',
        problem: 'Searching for specific patterns (motifs, subsequences, similarities) in extremely large DNA/RNA datasets efficiently.',
        techStack: ['Java'], // adjust if Python/Node/etc.
        liveDemo: 'https://github.com/GVR2007/Genomic-Data-Pattern-Search-Platform',
        github: 'https://github.com/GVR2007/Genomic-Data-Pattern-Search-Platform',
        image: '/projects/genomic.png',
        details: {
            problem: 'Genomic datasets contain millions to billions of nucleotide bases. Traditional brute-force search methods are computationally expensive and inefficient for whole-genome scanning. Researchers need fast and accurate pattern search mechanisms to detect motifs, genetic markers, repeats, and disease-associated sequences.',

            approach: 'Implemented optimized pattern-searching techniques using structured algorithm design. The system avoids naive substring scanning by leveraging indexing strategies such as k-mer segmentation, hash-based lookup, or efficient string-matching algorithms to improve search speed and scalability.',

            architecture: 'Layered Architecture (3-Tier Style) | Presentation Layer: User input for sequence patterns and result visualization | Business Logic Layer: Pattern matching algorithms, validation, indexing logic, performance optimization | Data Layer: Genomic sequence storage (FASTA-like data), indexed structures for fast retrieval',

            challenges: 'Handling extremely large genomic sequences without performance degradation | Designing efficient search algorithms beyond brute-force matching | Managing memory consumption while storing indexes | Ensuring scalability for larger genome datasets | Balancing accuracy and performance for pattern matching',

            results: 'Functional Result: Efficient genomic pattern search system capable of detecting motifs and subsequences in large DNA datasets | Technical Result: Optimized algorithm implementation, structured OOP modeling, improved time complexity over naive search, scalable architecture for bioinformatics applications.'
        }
    },
    {
        id: 3,
        title: 'CARD STRIKE – Interactive Strategy Card Game',
        problem: 'Traditional card games lack structured digital implementation with scalable architecture, rule validation, and smooth interaction. Most beginner-level game projects ignore clean OOP structure and performance optimization.',

        techStack: ['Python'],

        liveDemo: 'https://github.com/GVR2007/CARD-STRIKE',

        github: 'https://github.com/GVR2007/CARD-STRIKE',

        image: '/projects/card_strike.png', // Game/Strategy placeholder

        details: {
            problem: 'Card-based strategy games require proper rule enforcement, player turn handling, score tracking, and game-state management. Without structured object-oriented modeling, the system becomes messy, hard to scale, and difficult to debug. The challenge is building a clean, maintainable, and logically structured card engine.',

            approach: 'Implemented the game using strong OOP principles such as encapsulation, abstraction, and modular class design. The system models core entities like cards, players, game engine, and rule manager separately. Game flow is controlled through structured logic rather than hardcoded procedural handling. Validation mechanisms ensure correct move execution and state transitions.',

            architecture: 'Layered Modular Architecture | Presentation Layer: User interaction via console or UI | Game Logic Layer: Card handling, turn management, rule validation, scoring logic | Data Layer: Card deck structure, player data storage, game state tracking',

            challenges: 'Designing a scalable card engine instead of a single-use game script | Maintaining clean separation between game logic and input/output | Handling turn-based synchronization correctly | Preventing invalid moves and maintaining rule integrity | Structuring the project fully around OOP concepts',

            results: 'Functional Result: Fully working interactive strategy card game with proper rule execution and player interaction | Technical Result: Clean OOP-based architecture, modular class structure, maintainable and extensible game logic suitable for future upgrades (GUI, multiplayer, AI opponent).'
        }
    },
    {
        id: 4,
        title: 'Relational Database Management System Project',
        problem: 'Managing structured data efficiently while ensuring consistency, normalization, and optimized query performance in a multi-entity system.',

        techStack: ['MySQL', 'SQL', 'Java'],

        liveDemo: 'https://github.com/GVR2007/dbms_proj',

        github: 'https://github.com/GVR2007/dbms_proj',

        image: '/projects/rdbms.png', // Database placeholder

        details: {
            problem: 'Traditional file-based data storage leads to redundancy, inconsistency, and poor scalability. Complex systems such as student management, inventory, or transaction systems require structured relational modeling with proper constraints, relationships, and query optimization.',

            approach: 'Designed a normalized relational schema using ER modeling principles. Implemented primary keys, foreign keys, and constraints to maintain data integrity. Used structured SQL queries including joins, aggregation, indexing, and transaction control to ensure efficient data retrieval and consistency.',

            architecture: '3-Tier Database Architecture | Presentation Layer: User interaction (CLI / Application Interface) | Application Layer: Query processing, validation, business logic | Data Layer: Relational database tables with constraints, indexing, and transaction management',

            challenges: 'Designing normalized schema to avoid redundancy (1NF, 2NF, 3NF) | Maintaining referential integrity across multiple tables | Optimizing complex JOIN queries | Handling concurrent transactions | Preventing anomalies (insertion, deletion, update anomalies)',

            results: 'Functional Result: Fully operational relational database system capable of handling structured data with consistency and integrity | Technical Result: Properly normalized schema, optimized SQL queries, enforced constraints, and scalable database design suitable for real-world applications.'
        },

    },
    {
        id: 5,
        title: 'Agro-Assist – Smart Farming Support Platform',
        problem: 'Farmers often lack access to real-time crop recommendations, weather insights, pest information, and actionable agricultural guidance in a unified digital system.',

        techStack: ['Node.js', 'Express.js', 'MongoDB', 'React'],

        liveDemo: 'https://github.com/rishitkumar8/Agro-Assist',

        github: 'https://github.com/rishitkumar8/Agro-Assist',

        image: '/projects/agro.png', // Agriculture placeholder

        details: {
            problem: 'Traditional farming advisory relies on scattered resources, human experts, and manual interpretation of weather and soil data. There’s a need for a centralized digital platform that provides tailored recommendations for crop planning, pest control, and weather-adaptive farming decisions.',

            approach: 'Built a full-stack web application with dynamic frontend dashboards and backend APIs. Integrated weather data, crop suggestions, and pest advisories. Structured RESTful endpoints facilitate efficient data flow between UI and database. Focus was on farmer usability, real-time response, and modular code separation.',

            architecture: 'Modern MERN Architecture | Presentation Layer: React UI for dashboards, user forms, and visualizations | Backend Layer: Express.js APIs for data retrieval and logic | Database Layer: MongoDB collections for user profiles, crop info, weather history, and advisories',

            challenges: 'Integrating heterogeneous agricultural data sources | Ensuring responsive UI for varying device sizes | Designing intuitive dashboards for non-technical farmers | Managing CRUD operations efficiently in MongoDB | Handling asynchronous API responses and error states',

            results: 'Functional Result: Interactive farming support platform with recommendations and advisories | Technical Result: Fully implemented REST API backend, dynamic React frontend, scalable database design, and real-time capability for agricultural data insights.'
        }
    },



];
