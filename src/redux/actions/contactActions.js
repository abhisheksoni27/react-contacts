export function addContacts(index, detailsObject){
    let data = {
        type: 'ADD_TO_CONTACTS',
        payload: index,
        detailsObject: detailsObject
    };
    return data;
}
