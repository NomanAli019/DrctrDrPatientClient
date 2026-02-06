const specialities = [
  "Dentist",
  "Cardiology",
  "Neurology",
  "Kidney",
  "Child",
  "Dentist",
];

export default function SpecialityRow() {
  return (
    <>
      <div className="section-header">
        <h2>Speciality</h2>
        <span>See All</span>
      </div>

      <div className="speciality-scroll">
        {specialities.map((s, i) => (
          <div className="speciality-pill" key={i}>
            <div className="pill-icon" />
            <span>{s}</span>
          </div>
        ))}
      </div>
    </>
  );
}
