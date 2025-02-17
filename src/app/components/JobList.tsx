import React from "react";
import { AllJobProps } from "../../../types/types";
import Image from "next/image";
interface JobListComponentProps {
  jobs: AllJobProps[];
  loading: boolean;
  onJobClick: (job: AllJobProps) => void;
}

const JobList: React.FC<JobListComponentProps> = ({
  jobs,
  loading,
  onJobClick,
}) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className="job-list-container">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="job-list-item"
            onClick={() => onJobClick(job)}
          >
            <article>
              <figure className="company-logo">
                <Image
                  src={job.logo}
                  width={50}
                  height={50}
                  alt={`${job.company} logo`}
                />
                <figcaption>
                  <strong>Company: </strong>
                  {job.company}
                </figcaption>
              </figure>

              <div className="position-location">
                <p>
                  <strong>Position: </strong>
                  {job.position}
                </p>
                <p>
                  <strong>Location: </strong>
                  {job.location}
                </p>
              </div>

              <button
                className="view-job-btn"
                onClick={() => onJobClick(job)}
                aria-label={`View job details for ${job.position} at ${job.company}`}
              >
                View Job
              </button>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobList;
