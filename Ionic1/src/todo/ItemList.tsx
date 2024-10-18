import React from 'react';
import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonList, IonLoading,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { add } from 'ionicons/icons';
import {Item} from './project';
import { getLogger } from '../core';
import { useItems } from './useItems';


const log = getLogger('ItemList');

// @ts-ignore
export const ItemList: React.FC= () =>{
    const {items,fetching,fetchingError} = useItems();
    log("render");
    // @ts-ignore
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLoading isOpen={fetching} message="Fetching items"/>
                {items && (
                    <IonList>
                        {items.map(({ id, description,deadline,finished,teamNumber }) => <Item key={id} id={id} description={description} deadline={deadline} finished={finished} teamNumber={teamNumber}/>)}
                    </IonList>
                )}
                {fetchingError && (
                    <div>{fetchingError.message || 'Failed to fetch items'}</div>
                )}
            </IonContent>
        </IonPage>
    );
};