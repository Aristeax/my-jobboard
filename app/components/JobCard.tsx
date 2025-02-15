// app/components/JobCard.tsx
type Job = {
    id: string;
    name: string;
    description: string;
    rate: number;
    createdAt: string;
  };
  
  const JobCard = ({ job }: { job: Job }) => {
    return (
      <div className="border p-4 rounded shadow mb-4">
        <h2 className="text-lg font-bold">{job.name}</h2>
        <p>{job.description}</p>
        <p className="text-sm text-gray-500">Rate: €{job.rate}</p>
        <p className="text-xs text-gray-400">
          Posted on: {new Date(job.createdAt).toLocaleDateString()}
        </p>
      </div>
    );
  };
  
  export default JobCard;
  