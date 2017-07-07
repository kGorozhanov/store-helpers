import { Action } from '@ngrx/store';

export const REDUCER_HELPER = (moduleName: string, initialState: any, reducedItems: object) => {
    let reducer = {};

    Object
        .keys(reducedItems)
        .forEach(key => {
            Object.defineProperty(reducer, `${moduleName}/${key}`, {
                value: reducedItems[key],
                enumerable: true
            });
        });

    return (state: any = initialState, action: Action) => {
        if (reducer.hasOwnProperty(action.type)) {
            return reducer[action.type](state, action);
        }
        return state;
    }
}