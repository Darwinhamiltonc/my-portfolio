import "./Experience.css";
export default function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-list">
        <h3>Frontend Development Practice</h3>
        <ul>
          <li>Built responsive web applications using React.</li>
          <li>Deployed applications using Vercel.</li>
          <li>Integrated APIs and handled dynamic state.</li>
          <li>Focused on clean UI and component-based architecture.</li>
        </ul>
      </div>

      <div className="experience-list">
        <h3>Certifications</h3>
        <ul>
          <li>freeCodeCamp</li>
          <li>Responsive Web Design</li>
          <li>JavaScript Algorithms and Data Structures</li>
        </ul>
      </div>
    </section>
  );
}
