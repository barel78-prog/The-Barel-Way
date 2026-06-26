export default function MacroPanel({ calories, targetCalories, protein, targetProtein, carbs, targetCarbs, fat, targetFat, onTestClick }) {
    const calorieRemaining = targetCalories - calories;
    const caloriePercentage = Math.min((calories / targetCalories) * 100, 100);

    return (
        <div className="relative overflow-hidden rounded-2xl border border-[#162235] bg-gradient-to-b from-[#0b121f] to-[#070b14] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {/* אפקט זוהר אחורי עדין */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-12 gap-4 items-center relative z-10">
                {/* טבעת קלוריות גדולה */}
                <div className="col-span-6 flex flex-col items-center justify-center">
                    <div 
                        onTouchStart={onTestClick}
                        onClick={onTestClick}
                        className="w-32 h-32 rounded-full border-[5px] border-[#0e1624] flex flex-col items-center justify-center relative cursor-pointer active:scale-95 transition-transform shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] z-50"
                    >
                        <div className="absolute inset-0 rounded-full border-[5px] border-t-lime-500 border-r-lime-400 border-b-transparent border-l-transparent drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]" style={{ transform: 'rotate(35deg)' }}></div>
                        <span className="text-[10px] tracking-wider text-gray-400 font-medium uppercase">קלוריות</span>
                        <span className="text-2xl font-black font-mono text-white mt-0.5 tracking-tight">{calories.toLocaleString()}</span>
                        <div className="text-[10px] text-gray-500 font-bold mt-0.5">/ {targetCalories.toLocaleString()}</div>
                        <span className="text-[9px] font-bold text-gray-400 mt-0.5 bg-slate-950/60 px-1.5 py-0.5 rounded-full border border-slate-900">קק"ל</span>
                    </div>
                    <p className="text-[9px] text-gray-500 mt-2 text-center font-medium">טאפ על העיגול: בדיקת מגע (+100)</p>
                </div>

                {/* מדדי המאקרו */}
                <div className="col-span-6 space-y-3.5 pr-1">
                    <div className="text-[11px] font-bold text-gray-400 border-b border-slate-900 pb-1">מאקרו-נוטריאנטים</div>
                    
                    {/* חלבון */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold text-gray-200">🧪 חלבון</span>
                            <span className="font-mono text-gray-300">{protein}/{targetProtein}g</span>
                        </div>
                        <div className="w-full bg-[#040712] h-2 rounded-full p-0.5 border border-slate-900 shadow-inner">
                            <div className="bg-gradient-to-r from-lime-500 to-lime-400 h-full rounded-full" style={{ width: `${(protein/targetProtein)*100}%` }}></div>
                        </div>
                    </div>

                    {/* פחמימות */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold text-gray-200">🌾 פחמימות</span>
                            <span className="font-mono text-gray-300">{carbs}/{targetCarbs}g</span>
                        </div>
                        <div className="w-full bg-[#040712] h-2 rounded-full p-0.5 border border-slate-900 shadow-inner">
                            <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-full rounded-full" style={{ width: `${(carbs/targetCarbs)*100}%` }}></div>
                        </div>
                    </div>

                    {/* שומן */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold text-gray-200">🔥 שומן</span>
                            <span className="font-mono text-gray-300">{fat}/{targetFat}g</span>
                        </div>
                        <div className="w-full bg-[#040712] h-2 rounded-full p-0.5 border border-slate-900 shadow-inner">
                            <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full" style={{ width: `${(fat/targetFat)*100}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-[#121c2c] flex justify-between items-center text-[11px]">
                <span className="text-gray-400 font-medium">נותרו עוד <strong className="text-lime-400">{calorieRemaining} קק"ל</strong> ליעד</span>
                <span className="text-emerald-400 font-mono text-[10px] font-bold">↗ 120- קל' מאתמול</span>
            </div>
        </div>
    );
}
