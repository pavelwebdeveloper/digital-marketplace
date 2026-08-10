                    ┌──────────────────┐
                    │     Browser      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ React + Vite     │
                    │    client/       │
                    └────────┬─────────┘
                             │
                         HTTP / REST
                             │
                             ▼
                    ┌──────────────────┐
                    │ Express + Node   │
                    │    server/       │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Repository Layer │
                    └────────┬─────────┘
                             │
                   ┌─────────┴─────────┐
                   ▼                   ▼
             JSON Repository     PostgreSQL
               (initially)         (later)