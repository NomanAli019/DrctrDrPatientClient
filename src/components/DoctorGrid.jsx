const doctors = Array(10).fill({
  name: "Dr. Elisa Beth",
  role: "Heart surgeon",
  rating: "5.0",
});

export default function DoctorGrid() {
  return (
    <div className="doctor-grid">
      {doctors.map((d, i) => (
        <div className="doctor-card" key={i}>
          <div className="doctor-img" />
          <h4>{d.name}</h4>
          <p>{d.role}</p>
          <span className="badge">⭐ {d.rating}</span>
        </div>
      ))}
    </div>
  );
}
