/* Memory-based tournament service.

All data is stored locally. All generated state will be removed after reloading the app.
*/

import { TournamentServiceInterface } from './tournament_service_interface';

class MemoryBasedTournamentService extends TournamentServiceInterface {}
