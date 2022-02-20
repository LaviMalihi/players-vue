import firebaseFiles from '../'
// import firebase from "firebase/compat";
import table from '../../../components/TableViewer'

function uploadFile(image,path) {
    debugger
    console.log(image.name)
        if (image.name == undefined) {
            alert("no data accepted חלאס")
            return
        }
    debugger
    const ref = firebaseFiles.firebase.storage().ref(path);
    const name = (new Date()) + '-' + image.name;
    const metadata = {
        contentType: image.type
    };
    debugger
     return ref.child(name).put(image, metadata)
        .then(snapshot => {
            return snapshot.ref.getDownloadURL()
                .then((url) => {
                    debugger
                    return url;
                })
        })
        .catch(console.error);
    debugger
}

export default {
    uploadFile
}

