import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [])

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>
        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sunt placeat sed, nulla corrupti sint unde fuga earum error eius cumque, officiis, impedit dolor accusantium alias. Possimus earum mollitia obcaecati?

        </p>

      </div>
      <div>
        {
          jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;