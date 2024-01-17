import about from "../Data/About";
import contact_links from "../Data/Contact";
import resume from "../Data/Resume";

const Resume = () => {
  const { experience } = resume;

  return (
    <section id="resume" className="resume" style={{ overflowX: "auto" }}>
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Check My Resume{" "}
            <a
              href="https://docs.google.com/document/d/1LesrDpfW8vCbihlFS--up1BLF3t9lbS5jWAt3JiYO6c/edit"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#18d26e" }}
              aria-label="resume"
            >
              <i className="bi bi-file-earmark-arrow-down"></i>
            </a>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{about.name}</h4>
              <p>
                <em>{about.longBio}</em>
              </p>
              <p></p>
              <ul>
                <li>{about.city}</li>
                <li>{contact_links.phone}</li>
                <li>{contact_links.email}</li>
              </ul>
              <p />
            </div>
            <h3 className="resume-title">Projects</h3>
            {Array.from(experience).map((ex, i) => (
              <div className="resume-item" key={i}>
                <h4>{ex.company}</h4>
                <h5>{ex.title}</h5>
                <p>
                  <em>
                    <i className="bx bx-time" style={{ color: "#18d26e" }} color="#18d26e" />
                    {" "}{ex.time}
                    <br />
                    <i className="bx bx-map" style={{ color: "#18d26e" }} color="#18d26e" />
                    {" "}{ex.location}
                  </em>
                </p>
                <ul>
                  {ex.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                  {ex.links.map((pt, j) => (
                    <li key={j}>
                      <a href={pt} target="_blank" rel="noreferrer" className="resumeLinks">
                        {pt}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
