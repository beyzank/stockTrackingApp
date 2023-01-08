import {child, get, ref, set, update, remove} from "firebase/database";
import {db, dbRef} from "../../config/firebase";


export const createNewProduct = (data) => {
    return set(ref(db, 'products/' + data.serialNo), data);
}

export const getProducts = () => {
    get(child(dbRef, `products/`)).then((snapshot) => {
        if (snapshot.exists()) {
            const array = [];
            const data = snapshot.val()
            Object.keys(data).map(item => {
                array.push(data[item]);
            });
            return array;
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

export const updateProduct = (data) => {
    const updates = {};
    updates['/products/' + data.serialNo] = data;
    return update(dbRef, updates);
}

export const removeProduct = (id) => {
    const tasksRef = ref(db, 'products/' + id);
    remove(tasksRef).then(() => {
        console.log("location removed");
    });
}

