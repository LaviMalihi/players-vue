import firebaseInstance from '../'

// import database from 'firebase/database'
import firebaseFiles from '../files/index'

function read(option) {
    return firebaseInstance.firebase.database()
        .ref(`${option.entity}`).once('value')
        .then(res => {
            const arr = []
            const map = res.val()
            for (const key in map) {
                const player = map[key]
                player.id = key
                arr.push(map[key])
            }

            return arr
            debugger

        })
}

function getById(options) {
    return firebaseInstance.firebase.database()
        .ref(`teams/${options.entity}/`).once('value')
        .then(res => {
            return res.val()
        })
}

function getRef(option){
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${option.entity}`)
}

function readObj(option) {
    debugger
    return firebaseInstance.firebase.database()
        .ref(`${option.entity}`).once('value')
        .then(res => {
            // console.log(res.val())
            const obj = res.val();
            // console.log(option.entity)
            // console.log(res.key)
            obj.id = res.key
            debugger
            return obj
            debugger
        })
}

function remove(option) {
    console.log(option)
    debugger
    return firebaseInstance.firebase.database().ref(option.entity).remove()
}

function update(option) {
    debugger
    return firebaseInstance.firebase.database().ref(option.entity).update(option.player)
    // return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${option.entity}/${option.playerId}`).update(option.player)
    debugger

}

function create(option) {
    debugger
    return firebaseInstance.firebase.database().ref(`${option.entity}`).push(option.ent)

}

export default {
    read,
    create,
    remove,
    update,
    readObj,
    getRef,
    getById
}