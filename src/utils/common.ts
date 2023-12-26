export const isRelativePath = (path:string):boolean=>{
    return /^\.\.?(\/|\\)/.test(path);
}

export const getHash = (url:string):string=>{
    let hash:string = '';
    const hashRegex = /#(.*)$/;
    const match = url.match(hashRegex);

    if (match && match.length > 1) {
        hash = match[1]
    }
    return hash
}
