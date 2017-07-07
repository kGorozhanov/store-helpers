export const CONSTANTS_HELPER = <T>(moduleName: string, reducedItems: object): T => {
    let constants: any = {};
    Object
        .keys(reducedItems)
        .forEach(key => Object.defineProperty(constants, key, { value: `${moduleName}/${key}`, enumerable: true }));
    return constants;
}