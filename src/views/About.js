import React from "react";
import "../App.css";
import Caye from "../img/caye-pc.png";

const GithubReposLite = (repos) => {
  if (repos !== undefined) {
    repos = repos["repos"];
    return (
      <div className="gitLiteMain">
        <h2 className="GithubCaption">My Github Repos</h2>
        {repos.map((repo) => (
          <div key={repo.id} className="gitContainer">
            <a href={repo.html_url} target="noopener">
              {repo["name"]}
            </a>
            <p>
              {repo["description"] == null
                ? "-- No description --"
                : repo["description"]}
            </p>
            <p>
              <b>Language:</b> {repo.language}
            </p>
          </div>
        ))}
      </div>
    );
  }
};

const getTableInfo = (res) => {
  const repos = [];
  for (const repo of res) {
    let data = {
      id: repo["id"],
      name: repo["name"].toUpperCase(),
      description:
        repo["description"] == null
          ? "-- No description --"
          : repo["description"],
      language: repo["language"],
      html_url: repo["html_url"],
    };
    repos.push(data);
  }
  return repos;
};

export const About = () => {
  const [repos, setRepos] = React.useState([]);

  const getRepos = (signal) => {
    const url = "https://api.github.com/users/iamcaye/repos";
    fetch(url, { signal: signal })
      .then((response) => response.json())
      .then((response) => {
        setRepos(getTableInfo(response));
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getRepos(signal);
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const GithubRepos = (repos) => {
    const sortTable = (field) => {
      if (repos !== undefined) {
        repos.sort((a, b) => {
          const vA = a[field];
          const vB = b[field];

          if (vA < vB) return -1;
          if (vA > vB) return 1;
          return 0;
        });
				let result = [...repos];
				console.log(result);
				setRepos(result);
      }
    };

    if (repos !== undefined) {
      repos = repos["repos"];
      return (
        <table className="GithubTable">
          <caption className="GithubCaption">My Github Repos</caption>
          <thead></thead>
          <tbody>
            <tr className="GitHead">
              <th onClick={() => sortTable("name")}>
                <p>Name</p>
              </th>
              <th onClick={() => sortTable("description")}>
                <p>Description</p>
              </th>
              <th onClick={() => sortTable("language")}>
                <p>Language</p>
              </th>
            </tr>
            {repos.map((repo) => (
              <tr key={repo.id} className="GithubTableRow">
                <th>
                  <a href={repo["html_url"]} target="noopener">
                    {repo.name.toUpperCase()}
                  </a>
                </th>
                <th>
                  <p className="GitDesc">{repo["description"]}</p>
                </th>
                <th>
                  <p>{repo["language"]}</p>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      );
    }
  };

  return (
    <>
      <div className="container">
        <img src={Caye} alt="caye" className="caye" />
        <span>
          <h1>About me</h1>
          <p className="quote">
            Currently studying Electronic Engineering (4rd year) in Málaga
            <br></br> and self-taught software developer.
          </p>
          <p className="quote">
						Also working at <a href='https://grupotopdigital.es/' className='top-link' target='_blank' rel='noopener noreferrer'>TopDigital</a>
          </p>
        </span>
      </div>
      <div className="container">
        <span>
          <h2>Electronics</h2>
          <ul>
            <li>
              <p>Advanced level on circuit analysis & design</p>
            </li>
            <li>
              <p>
                Advanced knowledge on the TIVA MSP430G2ET microcontroller and
                its library
              </p>
            </li>
            <li>
              <p>
                Advanced knowledge on the TIVA TM4C123G microcontroller and its
                library
              </p>
            </li>
            <li>
              <p>Medium level VHDL programming</p>
            </li>
            <li>
              <p>Basic level on Raspberry Pi 4</p>
            </li>
            <li>
              <p>Medium level on sensors characterization and integration with microcontroller-based systems</p>
            </li>
          </ul>
        </span>
        <span>
          <h2>Coding</h2>
          <ul>
            <li>
              <p>
                Advanced level C programming, used for communication between
                processes and multi-processing
              </p>
            </li>
            <li>
              <p>C++11 programming (OOP)</p>
            </li>
            <li>
              <p>
                Self-taught Python programming (OOP, Django and a little bit of
                deep learning...)
              </p>
            </li>
            <li>
              <p>
                Self-taught Javascript porgramming (ReactJS, Angular 13 + PrimeNG Components)
              </p>
            </li>
            <li>
              <p>
								Medium level on MySQL databases
              </p>
            </li>
            <li>
              <p>
								Backend with .NET Core 6 & NET Framework
              </p>
            </li>
            <li>
              <p>
								JWT Authentication and Role-Based Authorization
              </p>
            </li>
            <li>
              <p>
								Redsys TPV Payment Gateway
              </p>
            </li>
            <li>
              <p>
								Web Scraping with HTML Agility Pack & Selenium (also for process automation)
              </p>
            </li>
          </ul>
        </span>
      </div>
      <div className="container">
        <GithubRepos repos={repos} />
        <GithubReposLite repos={repos} />
      </div>
    </>
  );
};
