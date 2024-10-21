import {
    IonBackButton, IonButtons,
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
import {useHistory, useParams} from "react-router";

import {useLocation} from "react-router";
import {getItem} from "../todo/useItems";
import log from "eslint-plugin-react/lib/util/log";

export const ItemPage: React.FC = () =>{
    console.log("pagina de item");
    const location = useLocation<any>();
    const {details } = location.state || {};
    const { id } = useParams<{ id: string }>();
    const {item,fetching,fetchingError} = getItem(id);
    console.log(`${item?.id,item?.description,item?.teamNumber,item?.finished}`);
    console.log("aicccaaaiaisad");
    const formattedDeadline = item?.deadline ? new Date(item.deadline).toLocaleDateString() : 'N/A';
    const finishedStatus = item?.finished ? 'Yes' : 'No'; // Convert boolean to readable string
    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons onClick={() => {history.push("/")}}>
                        <IonBackButton ></IonBackButton>
                    </IonButtons>
                    <IonTitle>{item?.description}</IonTitle>

                </IonToolbar>

            </IonHeader>
            <IonContent>
                <IonLabel>{item?.description}<br/> {formattedDeadline} <br/> {finishedStatus}</IonLabel>
            </IonContent>
        </IonPage>
    );
}