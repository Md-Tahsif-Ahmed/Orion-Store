 

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//        <h1 className="p-7 bg-primary-950">hello</h1>
//     </div>
//   );
// }


'use client';

// import { ArrowArcLeft, Smiley } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-display1 ">display1</div>
      <div className="text-display2">display2</div>
   

      <br/>
      
      <h1>Heading1</h1>
      <h2>Heading2</h2>
      <h3>Heading3</h3>
      <h4>Heading4</h4>
      <h5>Heading5</h5>
      <h6>Heading6</h6>

      <br />

      <div className="flex-col flex gap-4">
        <span className="text-label1">label1</span>
        <span className="text-label2">label2</span>
       
      </div>
    </div>
  );
}
