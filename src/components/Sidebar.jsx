import Image from "next/image";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">Dctr Dr</div>

      <div className="sidebar-icons">
        <div className="icon active">
          <Image
            src="/Patientclientimg/home-01.png"
            alt="Home"
            width={24}
            height={24}
          />
        </div>

        <div className="icon">
          <Image
            src="/Patientclientimg/bubble-chat-spark.png"
            alt="Home"
            width={24}
            height={24}
          />
        </div>
        <div className="icon">
          <Image
            src="/Patientclientimg/doctor-01.png"
            alt="Home"
            width={24}
            height={24}
          />
        </div>
        <div className="icon">
          <Image
            src="/Patientclientimg/calendar-03.png"
            alt="Home"
            width={24}
            height={24}
          />
        </div>
      </div>
    </aside>
  );
}
