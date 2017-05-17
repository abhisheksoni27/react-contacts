let index = 0;

export default function addContacts(detailsObject){
    let data = {
        type: 'ADD_TO_CONTACTS',
        payload: index++,
        detailsObject: detailsObject
    };
    return data;
}
