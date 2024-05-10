const businessHours = [
    { day: "Monday", hours: "9am - 5pm" },
    { day: "Tuesday", hours: "9am - 5pm" },
    { day: "Wednesday", hours: "9am - 5pm" },
    { day: "Thursday", hours: "9am - 5pm" },
    { day: "Friday", hours: "9am - 5pm" },
    { day: "Saturday", hours: "10am - 2pm" },
    { day: "Sunday", hours: "Closed" },
  ];
  
  const BusinessHours = () => {
    const today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Business Hours</h1>
        <ul>
          {businessHours.map((item) => (
            <li key={item.day} className={`p-2 ${item.day === today ? 'bg-blue-100' : ''}`}>
              <span className="font-medium">{item.day}:</span> {item.hours}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BusinessHours;