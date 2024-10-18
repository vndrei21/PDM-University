import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonInput, IonItem, IonList, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import {ItemList} from "./todo/ItemList";
import {ItemPage} from "./pages/ItemPage";

setupIonicReact();

// function Login()
// {
//   return (<IonList>
//
//     <IonItem>
//     <IonInput label="Text input" placeholder="Username"></IonInput>
//     </IonItem>
//     <IonItem>
//       <IonInput label="password input" placeholder="enter password"></IonInput>
//     </IonItem>
//     </IonList>)
// }

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/*<Route exact path="/home">*/}
        {/*  /!*<Home />*!/*/}
        {/*</Route>*/}
        <Route  path="/items" component={ItemList} exact={true}>
        </Route>
          <Route exact path="/" render={() => <Redirect to="/items"/>}/>
          <Route path="/item/:id" component={ItemPage} exact={true}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
