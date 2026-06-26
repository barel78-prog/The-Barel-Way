<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>הדרך של בראל לחיטוב</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons for Mobile -->
    <script src="https://unpkg.com/lucide@latest"></script>
  </head>
  <body class="bg-[#0b0f19]">
    <div id="root"></div>
    
    <!-- React & Babel Core -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    
    <script type="text/babel">
      // הגדרת האייקונים בצורה גלובלית כדי שלא יפילו את הדפדפן
      const { Camera, Droplets, Footprints, Scale, Plus, Calendar, Bell, User, Utensils } = {
        Camera: () => <span className="text-xl">📷</span>,
        Droplets: () => <span className="text-xl">💧</span>,
        Footprints: () => <span className="text-xl">👣</span>,
        Scale: () => <span className="text-xl">⚖️</span>,
        Plus: () => <span className="text-lg">＋</span>,
        Calendar: () => <span className="text-sm">📅</span>,
        Bell: () => <span className="text-lg">🔔</span>,
        User: () => <span className="text-lg">👤</span>,
        Utensils: () => <span className="text-lg">🍽️</span>
      };
    </script>

    <!-- חיבור קובץ האפליקציה של בראל -->
    <script type="text/babel" src="App.jsx"></script>
    
    <script type="text/babel">
      // הפעלה בטוחה
      setTimeout(() => {
        try {
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Dashboard />);
        } catch(e) {
          console.error(e);
        }
      }, 200);
    </script>
  </body>
</html>
