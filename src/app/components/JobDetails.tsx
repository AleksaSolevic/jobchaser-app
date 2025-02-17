import React from "react";
import { AllJobProps } from "../../../types/types";
import Image from "next/image";
interface JobDetailsProps {
  job: AllJobProps;
  onClose: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="job-details" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <Image src={job.logo} width={75} height={75} alt={job.company} />
        <h2 className="mb-7">{job.position}</h2>
        <p>
          <strong>Company:</strong> {job.company}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Contract:</strong> {job.contract}
        </p>
        <p>
          <strong>Level:</strong> {job.level}
        </p>
        <p>
          <strong>Posted at:</strong> {job.postedAt}
        </p>
        <p>
          <strong>Languages:</strong> {job.languages.join(", ")}
        </p>
        <p>
          <strong>Tools:</strong> {job.tools.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
