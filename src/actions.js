/**
 * Created by lucas on 29/08/2016.
 */
// succinct hack for generating passable unique ids
const uid = () =>  Math.random().toString(34).slice(2);

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uid(),
            isDone: false,
            text: text
        }
    }
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}