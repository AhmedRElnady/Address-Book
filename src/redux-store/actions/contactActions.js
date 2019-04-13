/*
    Note: acts like services in angular that request back-end APIs
*/


import { GET_CONTACTS } from "./actionTypes";
import { database, storage } from "../../config/fbConfig";

export function getContacts() {
    return dispatch => {
        // or simply you can use axios -for example- to access your Back-end APIs
        // acts like injected http service in angular. 
        database.on('value', (snapshot) => {
            dispatch({
                type: GET_CONTACTS,
                payload: snapshot.val()
            })
        })
    }
}

export function createContact(contact) {
    const { uid, name, address, picture } = contact;

    // https://firebase.google.com/docs/storage/web/upload-files
    function _uploadPic() {
        return new Promise((resolve, reject) => {
            const uploadTask = storage
                .child(`contactPics/${picture.name}${new Date().getTime()}`)
                .put(picture);

            uploadTask.on('state_changed', (snapshot) => { }, err => {
                reject(err);
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(downloadURL => {
                        resolve(downloadURL);
                    })
            })
        })
    }


    function _saveContact(uid, name, address, picture) {
        return new Promise((resolve, reject) => {
            database.push({
                uid,
                name,
                address,
                picture: picture

            })
                .then(resolve)
        })
    }

    return async (dispatch) => {
        if (uid && name && address) {
            if (!picture) return _saveContact(uid, name, address, picture);

            // const downloadURL = await _uploadPic();
            // _saveContact(name, address, downloadURL);

            return _uploadPic()
                .then(downloadURL => {
                    _saveContact(uid, name, address, downloadURL)
                })
        }

    }
}


export function editContact(id, contact) {
    return dispatch => database.child(id).update(contact);
}

export function deleteContact(id) {
    return dispatch => database.child(id).remove();
}
