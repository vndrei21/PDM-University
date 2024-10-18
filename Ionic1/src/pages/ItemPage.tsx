import {
    IonContent,
    IonHeader,
    IonInput,
    IonInputPasswordToggle,
    IonItem, IonLabel,
    IonList, IonLoading,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {Item} from "../todo/project";
import React from "react";
import {useLocation} from "react-router";
import {getItem} from "../todo/useItems";
import log from "eslint-plugin-react/lib/util/log";

export const ItemPage: React.FC = () =>{
    console.log("pagina de item");
    const location = useLocation<any>();
    const {details } = location.state || {};
    const {item,fetching,fetchingError} = getItem(details.id);
    console.log(`${item?.id,item?.description,item?.teamNumber,item?.finished}`);
    console.log("aicccaaaiaisad");
    const formattedDeadline = item?.deadline ? new Date(item.deadline).toLocaleDateString() : 'N/A';
    const finishedStatus = item?.finished ? 'Yes' : 'No'; // Convert boolean to readable string

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{item?.description}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLabel>{item?.description} {formattedDeadline} {finishedStatus} {String(item?.teamNumber)}</IonLabel>
            </IonContent>
        </IonPage>
    );
}