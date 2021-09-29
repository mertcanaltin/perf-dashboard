import {getAnalytics} from "./api";
test('Time Picker test', ()=>{
    const startTime = 1632908082287;
    const endTime =1632909882288;

    expect(getAnalytics(startTime,endTime)).not.toBe(null);
});
