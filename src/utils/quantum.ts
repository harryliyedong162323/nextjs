export const generatePreset = (start:number,end:number,unit:string)=>{
    const template:any = {};
    for (let i = start; i <= end; i++) {
        template[`${i}${unit}`] = `${i}${unit}`;
    }
    return template;
}
