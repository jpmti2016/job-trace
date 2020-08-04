import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Auth } from "@aws-amplify/auth";

import { withAuthenticator } from "@aws-amplify/ui-react";

import { Job } from "./models";

import Jobs from "./components/Jobs/Jobs";
import Header from "./Header";
import Footer from "./Footer";
import JobDetail from "./components/Jobs/JobDetail";

const getUser = async () => {
  return await Auth.currentAuthenticatedUser();
};

const initialState = { color: "#000000", title: "" };

const onCreate = () => {
  DataStore.save(
    new Job({
      title: `New ${Date.now()}`,
      salary: 85000 * Math.random(),
      perks: [`p${Math.random()}`, `p${Math.random()}`],
    })
  );
};

function App() {
  const [user, setUser] = useState({});
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({});
  // const { path } = useRouteMatch();

  const fetchJobs = async () => {
    const fjobs = await DataStore.query(Job);

    console.log("fetched jobs", fjobs);

    setJobs(fjobs);
  };

  const onDeleteAll = () => {
    console.log("jobs on delete all", jobs);
    DataStore.delete(Job, Predicates.ALL);
    setJobs([]);
    setJob({});
  };

  useEffect(() => {
    const subscription = DataStore.observe(Job).subscribe(({ element }) => {
      console.log("j", { ...element });
      setJob({ ...element });
      console.log("jobs", jobs);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [job]);

  return (
    <div className="App bg-gray-100">
      <Header />
      {/* <form action="">
        <div>
          <input type="button" value="NEW" onClick={onCreate} />
          <input type="button" value="DELETE ALL" onClick={onDeleteAll} />
          
          <input type="button" value="QUERY rating > 4" onClick={onQuery} /> 
        </div>
      </form> */}
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Jobs {...props} jobs={jobs} />}
          />
          <Route
            path={`/job/:jobId`}
            render={(props) => <JobDetail {...props} />}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
