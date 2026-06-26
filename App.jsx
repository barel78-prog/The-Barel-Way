import React, { useState } from 'react';
import { Camera, Droplets, Footprints, Scale, Plus, Calendar, Bell, User } from 'lucide-react';

export default function Dashboard() {
  // מדדי דוגמה מבוססי הדרישות של בראל
  const [calories, setCalories] = useState(1450);
  const targetCalories = 2400;
  const [protein, setProtein] = useState(160);
  const targetProtein = 210;
  
  const [water, setWater] = useState(1.8);
  const targetWater = 3.0;
  
  const [steps, setSteps] = useState(7200);
  const targetSteps = 10000;

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-sans antialiased pb-24 selection:bg-lime-500 selection:text-black">
      
      {/* HEADER */}
      <header className="p-6 flex justify-between items-center max-w-md mx-auto">
        <div className="flex items-center space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">
            👋
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              בוקר טוב, בראל
            </h1>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
              <Calendar className="w-3 h-3" /> 26 ביוני 2026
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <button className="p-2 rounded-xl bg-slate-950/40 border border-slate-800/80 text-gray-400 hover:text-white relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 space-y-4">
        
        {/* MAIN CARD: CALORIES & PROTEIN FOCUS */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-6 shadow-2xl">
          <div className="grid grid-cols-12 gap-4 items-center">
            
            {/* קלוריות - טבעת ויזואלית */}
            <div className="col-span-5 flex flex-col items-center justify-center relative">
              <div className="w-28 h-28 rounded-full border-4 border-slate-800 flex flex-col items-center justify-center relative shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                {/* אפקט זוהר חצי עיגול ירוק */}
                <div className="absolute inset-0 rounded-full border-4 border-t-lime-500 border-r-lime-400 border-b-transparent border-l-transparent drop-shadow-[0_0_8px_rgba(132,204,22,0.6)]"></div>
                <span className="text-xs text-gray-400 font-medium">קלוריות</span>
                <span className="text-2xl font-black text-white tracking-tight mt-0.5">{calories.toLocaleString()}</span>
                <span className="text-[10px] text-gray-500 font-bold mt-0.5">/ {targetCalories}</span>
              </div>
            </div>

            {/* מאקרו נוטריאנטים - דגש מוחלט על חלבון */}
            <div className="col-span-7 space-y-4">
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-bold text-lime-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-lime-400 block drop-shadow-[0_0_4px_#a3e635]"></span>
                    חלבון הדגש
                  </span>
                  <span className="text-xs text-gray-400 font-mono"><strong className="text-white text-sm">{protein}g</strong> / {targetProtein}g</span>
                </div>
                <div className="w-full bg-slate-950/60 h-2.5 rounded-full overflow-hidden border border-slate-800/40">
                  <div className="bg-gradient-to-r from-lime-500 to-lime-400 h-full rounded-full shadow-[0_0_10px_rgba(132,204,22,0.4)]" style={{ width: `${(protein/targetProtein)*100}%` }}></div>
                </div>
              </div>

              {/* פחמימות ושומנים כנתוני משנה קומפקטיים */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-800/40">
                <div>
                  <span className="text-gray-500 block">פחמימות</span>
                  <span className="font-bold text-cyan-400 font-mono">140g</span>
                </div>
                <div>
                  <span className="text-gray-500 block">שומן</span>
                  <span className="font-bold text-orange-400 font-mono">45g</span>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-800/40 text-center text-xs text-gray-400 font-medium">
            נותרו לך עוד <span className="text-lime-400 font-bold">{targetCalories - calories} קק"ל</span> להשגת היעד היומי
          </div>
        </div>

        {/* AI PHOTO SCANNER - פיצ'ר הליבה של בראל */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/40 backdrop-blur-xl border border-lime-500/30 rounded-2xl p-4 shadow-[0_0_25px_rgba(132,204,22,0.05)]">
          <button className="w-full flex items-center justify-between group">
            <div className="flex items-center space-x-3 space-x-reverse text-right">
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(132,204,22,0.1)]">
                <Camera className="w-6 h-6 drop-shadow-[0_0_4px_rgba(132,204,22,0.6)]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">סורק ארוחה בטכנולוגיית AI</h3>
                <p className="text-xs text-gray-400 mt-0.5">צלם את הצלחת לניתוח קלוריות וחלבון מיידי</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 group-hover:text-white">
              <Plus className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* TRIPLE METRICS ROW */}
        <div className="grid grid-cols-3 gap-3">
          
          {/* מים */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-2xl p-3 text-center flex flex-col justify-between h-36">
            <div className="text-cyan-400 flex justify-center"><Droplets className="w-5 h-5 drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]" /></div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">מים</span>
              <span className="text-lg font-black text-white font-mono mt-0.5">{water}</span>
              <span className="text-[10px] text-gray-500 block">/ {targetWater}L</span>
            </div>
            <button onClick={() => setWater(p => Math.min(p + 0.25, targetWater))} className="mt-2 w-full py-1 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/40 rounded-lg text-[10px] font-bold text-cyan-400 transition-colors">
              + 250ml
            </button>
          </div>

          {/* צעדים */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-2xl p-3 text-center flex flex-col justify-between h-36">
            <div className="text-emerald-400 flex justify-center"><Footprints className="w-5 h-5" /></div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">צעדים</span>
              <span className="text-lg font-black text-emerald-400 font-mono mt-0.5">{steps.toLocaleString()}</span>
              <span className="text-[10px] text-gray-500 block">/ 10k</span>
            </div>
            <div className="w-full bg-slate-950/60 h-1 rounded-full overflow-hidden mt-2">
              <div className="bg-emerald-400 h-full" style={{ width: `${(steps/targetSteps)*100}%` }}></div>
            </div>
          </div>

          {/* משקל */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-2xl p-3 text-center flex flex-col justify-between h-36">
            <div className="text-purple-400 flex justify-center"><Scale className="w-5 h-5" /></div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">משקל</span>
              <span className="text-lg font-black text-white font-mono mt-0.5">84.2</span>
              <span className="text-[10px] text-purple-400 font-bold block mt-0.5">ירידה של 0.4kg</span>
            </div>
            <span className="text-[9px] text-gray-500 block">נשקל הבוקר</span>
          </div>

        </div>

      </main>

      {/* BOTTOM NAV BAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-2xl border-t border-slate-900 p-2 flex justify-around items-center z-50 max-w-md mx-auto">
        <button className="flex flex-col items-center p-2 text-lime-400">
          <div className="w-5 h-5 bg-lime-500/10 rounded-lg flex items-center justify-center font-bold text-xs mb-1">D</div>
          <span className="text-[10px] font-bold">דאשבורד</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-500 hover:text-gray-300">
          <Camera className="w-5 h-5 mb-1" />
          <span className="text-[10px]">יומן אוכל</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-500 hover:text-gray-300">
          <User className="w-5 h-5 mb-1" />
          <span className="text-[10px]">הגדרות</span>
        </button>
      </nav>

    </div>
  );
}
