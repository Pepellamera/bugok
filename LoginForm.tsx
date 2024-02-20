
import {
  IonList,
  IonItem,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";

const LoginForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");

  const history = useHistory();

  function loginUser() {
    const data = { name, address, gender, occupation };
    history.push(`view/${data.name}/${data.address}/${data.gender}/${data.occupation}`);

  }

  return (
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
                placeholder="Name"
                onIonChange={(e: any) => setName(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="text"
                label="Address"
                labelPlacement="floating"
                placeholder="Enter Address"
                onIonChange={(e: any) => setAddress(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="text"
                label="Gender"
                labelPlacement="floating"
                placeholder="Enter Gender"
                onIonChange={(e: any) => setGender(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="text"
                label="Occupation"
                labelPlacement="floating"
                placeholder="Enter Occupation"
                onIonChange={(e: any) => setOccupation(e.target.value)}
              ></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={loginUser} expand="full">
            Log In
          </IonButton>
          <IonButton fill="clear" expand="full">
            Register
          </IonButton>
        </IonContent>
      </IonPage>
    </div>
  );
};
export default LoginForm;
