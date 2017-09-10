import { RouterModule, Routes} from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameGeneralComponent } from './game/game-general.component';
import { GameFoodComponent } from './game/game-food.component';
import { GameSportsComponent } from './game/game-sports.component';
import { PageNotFoundComponent } from './game/pageNotFound.component';

const appRoutes: Routes=[
	{path: 'home', component: GameComponent},
	{path: 'general', component: GameGeneralComponent},
	{path: 'food', component: GameFoodComponent},
	{path: 'sports', component: GameSportsComponent},
	{path: '', redirectTo: '/home', pathMatch:'full'},
	{path: '**', component: PageNotFoundComponent}

];

export const routing = RouterModule.forRoot(appRoutes);