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
                className="w-full mt-2.5 px-3 py-2 bg-[#627991] text-white border-none rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-[#4078b3]"
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
