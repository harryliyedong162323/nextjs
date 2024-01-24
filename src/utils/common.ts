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



export const formatDateTime = (date: Date): string=> {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}