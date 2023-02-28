import Link from "next/link";
import applications from "../data/applications";

const Applications = () => {
  const applicationsView = applications.map((application) => (
    <div key={application.id}>
      {application.name} - {application.duration} - {application.price} €
    </div>
  ));

  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>{applicationsView}</div>
    </>
  );
};

export default Applications;
