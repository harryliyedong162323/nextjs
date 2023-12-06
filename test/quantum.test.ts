import {generatePreset} from '@/utils/quantum';



test('测试quantum',()=>{
    expect(generatePreset(1,1,'px')).toStrictEqual({"1px": "1px"});
});
