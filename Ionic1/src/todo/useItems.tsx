import { useCallback, useEffect, useState } from 'react';
import { getLogger } from '../core';
import { ItemProps } from './ItemProps';
import {getItemById, getItems} from './ItemAPI';

const log = getLogger('useItems');

export interface ItemState{
    items?: ItemProps[],
    fetching: boolean,
    fetchingError?: Error,
}

export interface Item{
    item? :ItemProps,
    fetching: boolean,
    fetchingError?:Error
}

// export const getItem: (id:String) => Item  = (id) =>{
//     const [fetching,setFetching] = useState(false);
//     const [item,setItem] = useState<ItemProps>();
//     const [fetchingError,setFetchingError] = useState<Error>();
//     console.log("get Item first log");
//     useEffect(() => {
//         getItemEffect()
//     }, []);
//     console.log("get Item second log log");
//     console.log(`returns - fetching = ${fetching}, items = ${JSON.stringify(item)}`);
//     return{
//         item,
//         fetching,
//         fetchingError
//     }
//     function getItemEffect(){
//         let canceled = false;
//         fetchitem();
//         if(!canceled)
//         {
//             return () =>{
//                 canceled = true;
//             }
//         }
//         async function fetchitem(){
//             try{
//                 log(`fetch item ${id}`);
//                 setFetching(true);
//                 const item = await getItemById(id);
//                 log("fetch item succed");
//                 if(!canceled)
//                 {
//                     setFetching(false);
//                     setItem(item);
//                 }
//             }catch (error)
//             {
//                 log("fetching failed");
//                 if(!canceled)
//                 {
//                     setFetching(false);
//                     setFetchingError(error as Error);
//                 }
//             }
//         }
//     }
//
// }
export const getItem = (id: string) => {
    const [fetching, setFetching] = useState(false);
    const [item, setItem] = useState<ItemProps>();
    const [fetchingError, setFetchingError] = useState<Error>();

    console.log("incepem getItem cu id" + id);
    useEffect(() => {
        // Avoid fetching again if the item is already set
        if (!item) {
            getItemEffect();
        }
    }, [item]); // Only runs if the item is undefined

    async function getItemEffect() {
        let canceled = false;

        try {
            console.log(`Fetching item with id ${id}`);
            setFetching(true);
            const fetchedItem = await getItemById(id);
            if (!canceled) {
                setItem(fetchedItem);
                setFetching(false);
                console.log("Item fetched successfully", fetchedItem);
            }
        } catch (error) {
            if (!canceled) {
                setFetchingError(error as Error);
                setFetching(false);
                console.error("Error fetching item", error);
            }
        }

        return () => {
            canceled = true;
        };
    }

    console.log(`Fetching = ${fetching}, Item = ${JSON.stringify(item)}`);

    return {
        item,
        fetching,
        fetchingError
    };
};

// @ts-ignore
export const useItems: () => ItemState = () => {
    const [fetching,setFetching] = useState(false);
    const [items,setItems] = useState<ItemProps[]>();
    const [fetchingError,setFetchingError] = useState<Error>();

// useEffect(getItemsEffect,[]);
    useEffect(() => {
        const intervalId = setInterval(()=>{
             getItemsEffect();
        },5000);
        return () => clearInterval(intervalId);
    }, []);
    log(`returns - fetching = ${fetching}, items = ${JSON.stringify(items)}`);
    return {
        items,
        fetching,
        fetchingError,
    };
    function getItemsEffect() {
        let canceled = false;
        fetchItems();
        return () => {
            canceled = true;
        }

        async function fetchItems() {
            try {
                log('fetch Items-started');
                setFetching(true);
                const items = await getItems();
                log("fetch Items succed");
                if (!canceled)
                {
                    setFetching(false);
                    setItems(items);
                }
            }catch (error)
            {
                log('fatching field');
                if(!canceled)
                {
                    setFetching(false);
                    setFetchingError(error as Error);
                }
            }

        }
    }
}
