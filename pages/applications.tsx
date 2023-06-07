import { useState } from "react";
import BackHomeLink from "../components/BackHomeLink";
import applications from "../data/applications";
import AddApplications from "./addApplications";

const Applications = () => {
  const headerView = ["Name", "Duration", "Price"].map((entry) => (
    <th>{entry}</th>
  ));

  const [applicationsData, setApplicationsData] = useState(applications);
  const applicationsView = applicationsData.map((application) => (
    <tr key={application.id}>
      <td>{application.name}</td>
      <td>{application.duration}</td>
      <td>{application.price}</td>
    </tr>
  ));

  const addApplication = ({ name, duration, price }) => {
    setApplicationsData([
      ...applicationsData,
      {
        id: Math.random(),
        name,
        duration,
        price,
      },
    ]);
  };

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <table>
        <tbody>
          <tr>{headerView}</tr>
          {applicationsView}
          <AddApplications addApplication={addApplication}></AddApplications>
        </tbody>
      </table>
    </>
  );
};

export default Applications;
