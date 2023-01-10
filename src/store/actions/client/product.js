import {db} from "../../../config/firebase";
import { collection, addDoc, getDocs, setDoc, deleteDoc, doc, query, where } from "firebase/firestore";


export const createNewProduct = async (data) => {
    try {
        await addDoc(collection(db, "Products"), data);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

export const getProducts = async () => {
    let array = []
    await getDocs(collection(db, "Products")).then(res => {
        res.forEach((doc) => {
            array.push({data: doc.data(), id: doc.id})
        });
    });
    return array;
}

export const updateProduct = async (data, id) => {
    await setDoc(doc(db, "Products", id), data);
}

export const removeProduct = async (id) => {
    await deleteDoc(doc(db, "Products", id));

}

export const filterProducts = async (queryText) => {
    const productsRef = collection(db, "Products");
    let array = []
    const q = await query(productsRef, where("productName", "==", queryText));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        array.push({data: doc.data(), id: doc.id})
    });
    return array;
}

