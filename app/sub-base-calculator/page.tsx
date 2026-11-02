import type {Metadata} from 'next';import {CalculatorPage} from '@/components/calculators/calculator-page';
export const metadata:Metadata={title:'Sub-base Calculator UK | Aggregate Tonnes & Bags',description:'Free sub-base calculator for UK paving, patios and paths. Estimate aggregate volume, tonnes, bulk bags and cost.',alternates:{canonical:'/sub-base-calculator'}};
export default function Page(){return <CalculatorPage kind="subbase"/>}
