import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Octokit } from "octokit";

function App() {
  const [issues, setIssues] = useState([]);
  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  useEffect(() => {
    const fetchIssues = async (): Promise<any> => {
      try {
        const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
          owner: "facebook",
          repo: "react",
          state: "open",
          sort: "comments",
          direction: "desc",
        });

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <>
      <div>
        {issues.map((issue: any, index) => (
          <div key={index}>
            <h3>{issue.title}</h3>
            <p>{issue.body}</p>
            <p>Comments: {issue.comments}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
