import {getLogger} from "../core";
import {ItemProps} from "./ItemProps";
import axios from 'axios';
import {reader, returnDownBackOutline} from "ionicons/icons";

const log = getLogger('itemApi');

const baseUrl = 'http://localhost:3000';


export const getItems: () => Promise< ItemProps[] > =() =>{

    console.log("get Items -started");
    return axios
        .get(`${baseUrl}/projects`)
        .then(res =>{
            console.log("get items -succed");
            return Promise.resolve(res.data);
        }).catch(err =>{
            log("get items-failed");
            return Promise.reject(err);
        });
}

export const getItemById: (id:String) => Promise<ItemProps> = (id) =>
{
    console.log("get Item -started id: " + id);
    return axios
        .get(`${baseUrl}/projects/${id}`)
        .then(res =>{
            console.log("get item -succed");
            return Promise.resolve(res.data);
        }).catch(err =>{
            log('get item - failed');
            return Promise.reject(err);
        });
}
