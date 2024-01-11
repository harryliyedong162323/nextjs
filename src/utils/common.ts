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

export const getLocalPathName = (url:string):string=>{
    let path:string = '';
    const splitPath = url.split('/');

    if(splitPath.length > 0){
        path = splitPath[1];
    }

    return path;
}



export const getLastPathName = (url:string):string=>{
    let path:string = '';
    const splitPath = url.split('/');

    if(splitPath.length > 0){
        path = splitPath[splitPath.length - 1];
    }

    return path;
}
