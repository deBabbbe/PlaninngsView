import BackHomeLink from "../components/BackHomeLink";
import applications from "../data/applications";

const Applications = () => {
  const headerView = ["Name", "Duration", "Price"].map((entry) => (
    // eslint-disable-next-line react/jsx-key
    <th>{entry}</th>
  ));

  const applicationsView = applications.map((application) => (
    <tr key={application.id}>
      <td>{application.name}</td>
      <td>{application.duration}</td>
      <td>{application.price}</td>
    </tr>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <table>
        <tr>{headerView}</tr>
        {applicationsView}
      </table>
    </>
  );
};

export default Applications;
