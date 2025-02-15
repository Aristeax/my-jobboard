import JobCard from './components/JobCard';
import Navbar from './components/Navbar';

type Job = {
  id: string;
  name: string;
  description: string;
  rate: number;
  createdAt: string;
};

const HomePage = async () => {
  // Fetch jobs from the API. Using 'no-store' to disable caching for this example.
  const res = await fetch('http://localhost:3000/api/job-posts', { cache: 'no-store' });
  const jobs: Job[] = await res.json(); // ✅ Specify Job[] instead of any[]

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
        <div>
          {jobs.map((job: Job) => ( // ✅ Replace `any` with `Job`
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <button
          onClick={() => (window.location.href = '/post-job')}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Post a Job
        </button>
      </div>
    </>
  );
};

export default HomePage;
