import { IonBackButton, IonButtons, IonContent, IonHeader,IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";

const View: React.FC = ()=>{
   const {name,address,gender,occupation} = useParams<{
    name: string,
    address: string,
    gender: string,
    occupation:string
   }>();

  return(   
    <div>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Ionic Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonInput
              type="text"
              label="Name"
              labelPlacement="floating"
              value={name}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              label="Address"
              labelPlacement="floating"
              value={address}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              label="Gender"
              labelPlacement="floating"
              value={gender}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              label="Occupation"
              labelPlacement="floating"
              value={occupation}
            ></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  </div>
  );
}

export default View
