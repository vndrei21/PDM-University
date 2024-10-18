import {
    IonContent,
    IonHeader,
    IonInput,
    IonInputPasswordToggle,
    IonItem,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

function Login()
{
    return (<IonList>
        <IonItem>
            <IonInput clearInput={true} label="Text input" placeholder="Username"></IonInput>
        </IonItem>
        <IonItem>
            <IonInput clearInput={true} label="password input" type="password" placeholder="enter password">
                <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
        </IonItem>
    </IonList>)
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MyApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My App</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<ExploreContainer />*/}
          <Login/>

      </IonContent>
    </IonPage>
  );
};

export default Home;
