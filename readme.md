# The Wild Oasis

A full stack web interface and API:

- Internal hotel/cabin rental portal to manage dashboard, users, cabins, bookings & settings
- Supabase for data storage, utilizing data models that include: SQL, JWT/key auth, utilizing modern Row-Level-Security (RLS).
- React SPA build on the foundation of Vite with StyledComponents, utilizing ReactQuery for global state management and caching. Employs advanced react patterns including Render Props Pattern for instructional rendering, and Compound Components for breakdown of React components.
- Complete filtering, sorting, caching, pre-fetching and pagination of all users and cabins. API calls only return required data; sorting, filtering etc. all done on the server side to minimize and provide only what is needed.
- Dark mode, dashboard showing trends, plots, data from the users and cabin bookings
- Error handling of all asynchronous operations; React-Error-Boundary
- Secure log-in functionality utilizing salted password SHA256 hashing
- RBAC to allow different roles different levels of access to the API
- Profile image uploading
- ES Linting for programmatic and stylistic errors

TODO:

- Need to refresh user data for additional users in the future
- Add a feature to "Add Bookings" on the bookings page; similar to that of "Add Cabin" modal on cabins page
- Row/Row2 in Bookings/Cabins FilterTableOperations styling
