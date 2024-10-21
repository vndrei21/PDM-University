import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { ItemProps } from './ItemProps';
import '../pages/Home.css';
import  '../pages/ItemPage'
import {ItemPage} from "../pages/ItemPage";
import {useHistory} from "react-router";


export const Item: React.FC<ItemProps> = ({id, description, deadline, finished, teamNumber}) =>{

    const history = useHistory();
    const handleNavigation=() =>{
        history.push(`item/${id}`);
    }
    return(
        <IonItem className="project" onClick={handleNavigation} >
            <IonLabel > description:{description} </IonLabel>
        </IonItem>
    );
}