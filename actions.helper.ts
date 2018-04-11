import { Action } from '@ngrx/store';

export const ACTIONS_HELPER = <T>(constants: object):T => {
    let actions: any = {};
    Object
        .keys(constants)
        .forEach(key => {
            Object.defineProperty(actions, key, {
                value: (payload?: any): Action => {
                    return {
                        type: constants[key],
                        payload
                    }
                },
                enumerable: true
            });
        });
    return actions;
}
console.log('help me')