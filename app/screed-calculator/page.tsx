import type {Metadata} from 'next';import {CalculatorPage} from '@/components/calculators/calculator-page';
export const metadata:Metadata={title:'Screed Calculator UK | Volume, Bags & Cost',description:'Estimate floor screed volume, tonnes, 25kg bags and material costs with adjustable thickness and density.',alternates:{canonical:'/screed-calculator'}};
export default function Page(){return <CalculatorPage kind="screed"/>}
