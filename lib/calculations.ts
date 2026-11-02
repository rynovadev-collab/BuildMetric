export type Result = { volume: number; tonnes: number; bags: number; cost: number; area: number };
export function estimateAggregate(length:number,width:number,depthMm:number,density:number,waste:number,bagKg:number,pricePerTonne:number):Result {
 const vals=[length,width,depthMm,density,waste,bagKg,pricePerTonne];
 if(vals.some(v=>!Number.isFinite(v)) || length<=0 || width<=0 || depthMm<=0 || density<=0 || waste<0 || waste>100 || bagKg<=0 || pricePerTonne<0) throw new Error('Please enter valid positive measurements and costs.');
 const area=length*width; const volume=area*depthMm/1000; const tonnes=volume*density*(1+waste/100);
 return {area,volume,tonnes,bags:Math.ceil(tonnes*1000/bagKg),cost:tonnes*pricePerTonne};
}
export function estimateScreed(length:number,width:number,depthMm:number,density:number,waste:number,bagKg:number,pricePerBag:number):Result {
 const r=estimateAggregate(length,width,depthMm,density,waste,bagKg,0);
 return {...r,cost:r.bags*pricePerBag};
}
