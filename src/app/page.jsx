"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SpecialityRow from "@/components/SpecialityRow";
import DoctorGrid from "@/components/DoctorGrid";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} />

      <div className="content">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}


        <section className="section">
          <SpecialityRow />
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Top Doctors</h2>
            <span>See All</span>
          </div>

          <DoctorGrid />
        </section>
      </div>
    </div>
  );
}
