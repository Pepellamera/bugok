import {
    IonBadge,
    IonCheckbox,
    IonContent,
    IonFab,
    IonButton,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { add } from "ionicons/icons";
  import React from "react";
  import { useHistory } from "react-router";
  
  const Home: React.FC = (RouteComponentProps) => {
    const history = useHistory();
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonCheckbox labelPlacement="end" justify="start">
                <h1>Create Idea</h1>
                <IonNote>Run Idea by Brandy</IonNote>
              </IonCheckbox>
              <IonBadge color="success" slot="end">
                5 Days
              </IonBadge>
            </IonItem>
          </IonList>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonButton onClick={() => history.push('/login')}>
              <IonIcon icon={add} />
            </IonButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  export default Home;
  
