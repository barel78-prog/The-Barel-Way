import MacroPanel from './MacroPanel.js';

export default function App() {
    const [calories, setCalories] = React.useState(1450);
    const targetCalories = 2400;
    
    const [protein] = React.useState(160);
    const targetProtein = 210;
    
    const [carbs] = React.useState(270);
    const targetCarbs = 300;
    
    const [fat] = React.useState(70);
    const targetFat = 85;

    const handleTouchCheck = (e) => {
        e.preventDefault();
        setCalories(prev => prev + 100);
    };

    return (
        <div className="max-w-md mx-auto px-4 pt-4">
            
            {/* שורת כותרת עליונה */}
            <div className="flex justify-between items-center px-1 mb-5">
                <button className="text-gray-400 text-2xl p-1">☰</button>
                <div className="text-center">
                    <h1 className="text-base font-bold text-gray-100">בוקר טוב, בראל 👋</h1>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5">26 ביוני 2026</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm">👤</div>
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

// חיבור סופי למסך
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
