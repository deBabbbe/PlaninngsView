import Link from "next/link";
import BackHomeLink from "../components/BackHomeLink";
import applications from "../data/applications";

const Applications = () => {
  const applicationsView = applications.map((application) => (
    <div key={application.id}>
      {application.name} - {application.duration} - {application.price} €
    </div>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <div>{applicationsView}</div>
    </>
  );
};

export default Applications;
