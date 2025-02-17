"use client";
import { useState, useEffect } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import { AllJobProps } from "../../types/types";
import "./page.css";
import JobDetails from "./components/JobDetails";
function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [jobs, setJobs] = useState<AllJobProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<AllJobProps | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/jobs.json");
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data: AllJobProps[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return Object.values(job).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleJobClick = (job: AllJobProps) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {selectedJob ? (
        <JobDetails job={selectedJob} onClose={handleCloseDetails} />
      ) : loading ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : filteredJobs.length === 0 ? (
        <p className="text-center text-red-500 font-semibold mt-4">
          No jobs found. Try a different search term.
        </p>
      ) : (
        <JobList
          jobs={filteredJobs}
          loading={loading}
          onJobClick={handleJobClick}
        />
      )}
    </div>
  );
}

export default Home;
