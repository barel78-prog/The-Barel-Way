import MacroPanel from './MacroPanel.js';

export default function App() {
    // נתונים ראשוניים לבדיקה
    const [calories, setCalories] = React.useState(1450);
    const targetCalories = 2400;
    
    const [protein] = React.useState(160);
    const targetProtein = 210;
    
    const [carbs] = React.useState(270);
    const targetCarbs = 300;
    
    const [fat] = React.useState(70);
    const targetFat = 85;

    // בדיקת הלחיצה המהירה באייפון
    const handleTouchCheck = (e) => {
        e.preventDefault();
        setCalories(prev => prev + 100);
    };

    return (
        <div className="max-w-md mx-auto px-4 pt-6">
            
            {/* שורת כותרת עליונה */}
            <div className="flex justify-between items-center px-1 mb-6">
                <button className="text-gray-400 text-2xl p-1 active:scale-90 transition-transform">☰</button>
                <div className="text-center">
                    <h1 className="text-base font-bold text-gray-100 tracking-wide flex items-center justify-center gap-1">
                        בוקר טוב, בראל 👋
                    </h1>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5">26 ביוני 2026</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center text-sm shadow-inner">👤</div>
            </div>

            {/* הזרקת רכיב המאקרו שייבאנו מלמעלה */}
            <MacroPanel 
                calories={calories}
                targetCalories={targetCalories}
                protein={protein}
                targetProtein={targetProtein}
                carbs={carbs}
                targetCarbs={targetCarbs}
                fat={fat}
                targetFat={targetFat}
                onTestClick={handleTouchCheck}
            />

        </div>
    );
}

// חיבור סופי למסך - קוד רינדור חסין תקלות
const root = LazyReactDOMRender();
function LazyReactDOMRender() {
    return ReactDOM.createRoot(document.getElementById('root'));
}
root.render(<App />);
