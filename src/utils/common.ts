export const isRelativePath = (path:string):boolean=>{
    return /^\.\.?(\/|\\)/.test(path);
}

