import React from 'react';
import '../App.css';
import Caye from '../img/caye-pc.png'

const GithubRepos = (repos) => {
  if(repos !== undefined){
    repos = repos['repos'];
    return(
      <table className='GithubTable'>
      <caption className='GithubCaption'>My Github Repos</caption>
      <thead></thead>
      <tbody>
          <tr className='GitHead'>
            <th>
              <p>Name</p>
            </th>
            <th>
              <p>Description</p>
            </th>
            <th>
              <p>Language</p>
            </th>
          </tr>
        {repos.map((repo) =>
          <tr key={repo.id} className='GithubTableRow'>
            <th>
              <a href={repo['html_url']} target='noopener'>{repo['name']}</a>
            </th>
            <th>
              <p className='GitDesc'>{(repo['description'] == null ? "-- No description --" : repo['description'])}</p>
            </th>
            <th>
              <p>{repo['language']}</p>
            </th>
          </tr>
        )}
      </tbody>
      <tfoot></tfoot>
      </table>
    );
  }
}

const GithubReposLite = (repos) => {
  if(repos !== undefined){
    repos = repos['repos'];
    return(
      <div className='gitLiteMain'>
        <h2 className='GithubCaption'>My Github Repos</h2>
        {repos.map((repo) =>
          <div key={repo.id} className='gitContainer'>
            <a href={repo.html_url} target='noopener'>{repo.name}</a>
            <p>{(repo['description'] == null ? "-- No description --" : repo['description'])}</p>
            <p><b>Language:</b> {repo.language}</p>
          </div>
        )}
      </div>
    );
  }
}

export const About = () => {
  const [repos, setRepos] = React.useState([]);
  
  const getRepos = (signal) => {
    let url = 'https://api.github.com/users/iamcaye/repos';
    fetch(url, {signal : signal})
      .then(response => response.json())
      .then(response =>{
        console.log(response);
        setRepos(response);
      })
      .catch(err => console.error(err));
  }

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getRepos(signal);
    return function cleanup(){
      abortController.abort();
    }
  
  }, []);

  return (
    <>
    <div className='container'>
      <img src={Caye} alt='caye' className='caye'/>
      <span>
        <h1>About me</h1>
        <p className='quote'>
          Currently studying Electronic Engineering (3rd year)<br></br> and self-taught software developer.
        </p>
      </span>
    </div>
    <div className='container'>
      <span>
        <h2>Electronics</h2>
        <ul>
          <li>
            <p>Advanced level on circuit analysis</p>
          </li>
          <li>
            <p>Circuit design using protoboard, resistors, O.A, diodes... and working with Deeds, PSPICE, ModelSim, ISE Xilinx</p>
          </li>
          <li>
            <p>Advanced knowledge on the MSP430G2ET microcontroller and its library</p>
          </li>
        </ul>
      </span>
      <span>
        <h2>Coding</h2>
        <ul>
          <li>
            <p>Advanced level C programming, used for communication between processes and multi-processing</p>
          </li>
          <li>
            <p>C++11 programming (OOP)</p>
          </li>
          <li>
            <p>Self-taught Python programming</p>
          </li>
          <li>
            <p>Self-taught Javascript porgramming, currently learning ReactJS for Web Development</p>
          </li>
        </ul>
      </span>
    </div>
    <div className='container'>
    <GithubRepos repos={repos}/>
    <GithubReposLite repos={repos}/>
    </div>
    </>
  );
}
