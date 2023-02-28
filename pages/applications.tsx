import BackHomeLink from "../components/BackHomeLink";
import applications from "../data/applications";

const Applications = () => {
  const applicationsView = applications.map((application) => (
    <ul key={application.id}>
      <li>
        {application.name} - {application.duration} - {application.price} €
      </li>
    </ul>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <div>Applications</div>
      <div>{applicationsView}</div>
    </>
  );
};

export default Applications;
