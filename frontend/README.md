TODO

1. (CURRENT) Add logic to toggle isTrusted in the following scenarios: 1) if a habit is added or updated, change the isTrusted to false 2) when checking for logged-in user and it's sunday, if the user has 100% adherence then change the isTrusted to true
1. (POSSIBLE CASE) If the user does not add anything new during the isTrusted is true phase, then what should the logic be in the backend for the weekly computation? But if the user decides to add new things in the middle of the week, the weekly computation will not be 100% since no data for any days within a routine will be considered false (this might be good since I'm only allowing progress if the user has 7 days streak for all habits and if he misses the window then that will not be possible. He will do the same routine next)
1. (DONE) Add conditional to render CreateRoutine component
1. Refactor: Make string passed to gql LOGGEDINUSER as a variable
