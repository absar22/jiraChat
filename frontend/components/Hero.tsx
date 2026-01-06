// import React from 'react';
// import { ArrowRight, Kanban } from 'lucide-react';
// import Button from './Button';

// export default function Hero() {
//   return (
//     <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
//           Where Teams
//           <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Plan & Chat
//           </span>
//         </h1>
//         <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
//           The only platform that combines powerful project management with seamless team communication.
//           Stop switching between apps and get work done faster.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button icon={ArrowRight} iconPosition="right">
//             Start Free Trial
//           </Button>
//           <Button variant="outline">
//             Watch Demo
//           </Button>
//         </div>

//         {/* Hero Image Placeholder */}
//         <div className="mt-16 relative">
//           <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-slate-200 dark:border-white/10">
//             <div className="bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl h-96 flex items-center justify-center">
//               <div className="text-center">
//                 <Kanban className="w-24 h-24 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
//                 <p className="text-slate-600 dark:text-slate-300 text-lg">  App Screenshot / Demo Here</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowRight } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="py-24 px-6 bg-[#f7f3f1]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl font-bold mb-6">
            Work together.<br />Stay aligned.
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            JiraChat brings tasks and conversations together so teams never lose context.
          </p>

          <div className="flex gap-4">
            <Button icon={ArrowRight}>Get Started</Button>
            <Button variant="secondary">See Demo</Button>
          </div>
        </div>

        <div className="border-2 border-black rounded-2xl bg-[#e8f0f2] h-80 flex items-center justify-center">
          <p className="font-medium">App Preview</p>
        </div>

      </div>
    </section>
  )
}
