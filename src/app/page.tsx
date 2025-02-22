"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import JobDetails from "./components/JobDetails";
import { AllJobProps } from "../../types/types";
import "./page.css";
import { useTheme } from "./components/ThemeContext";
import Image from "next/image";
import FilterJobs from "./components/FilterJobs";

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [jobs, setJobs] = useState<AllJobProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<AllJobProps | null>(null);
  const { theme } = useTheme();
  const filters = useSelector((state: RootState) => state.jobFilter.value);

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

  const searchedJobs = jobs.filter((job) => {
    return Object.values(job).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredJobs = searchedJobs.filter((job) => {
    return filters.length === 0
      ? true
      : filters.every(
          (filter) => job.role.toLowerCase() === filter.toLowerCase()
        );
  });

  const handleJobClick = (job: AllJobProps) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  return (
    <div className={theme}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterJobs />

      {selectedJob ? (
        <JobDetails job={selectedJob} onClose={handleCloseDetails} />
      ) : loading ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : searchedJobs.length === 0 ? (
        <div className="flex flex-col items-center mt-6">
          <Image
            src="/react.svg"
            width={200}
            height={200}
            alt="No jobs found"
          />
          <p className="text-center text-gray-600 font-semibold mt-4">
            No jobs available. Build a React app first, then come back!
          </p>
        </div>
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
