const runsUrl = 'https://api.github.com/repos/utkarsh207543/photomat/actions/runs';
const headers = { 'User-Agent': 'Node-Fetch' };

console.log("Checking workflow runs...");
fetch(runsUrl, { headers })
  .then(res => res.json())
  .then(data => {
    if (!data.workflow_runs || data.workflow_runs.length === 0) {
      console.log("No workflow runs found.");
      return;
    }
    
    // Find the latest "Deploy Next.js site to Pages" run
    const customRun = data.workflow_runs.find(run => run.name === "Deploy Next.js site to Pages");
    if (!customRun) {
      console.log("No 'Deploy Next.js site to Pages' run found.");
      return;
    }
    
    console.log(`Latest Custom Run: ID ${customRun.id}, Status: ${customRun.status}, Conclusion: ${customRun.conclusion}`);
    console.log(`URL: ${customRun.html_url}`);
    
    const jobsUrl = `https://api.github.com/repos/utkarsh207543/photomat/actions/runs/${customRun.id}/jobs`;
    console.log(`\nFetching jobs from: ${jobsUrl}`);
    
    return fetch(jobsUrl, { headers });
  })
  .then(res => {
    if (!res) return;
    return res.json();
  })
  .then(data => {
    if (!data || !data.jobs) return;
    console.log("\nJobs and Steps Status:");
    data.jobs.forEach(job => {
      console.log(`- Job: ${job.name} (Status: ${job.status}, Conclusion: ${job.conclusion})`);
      if (job.steps) {
        job.steps.forEach(step => {
          console.log(`  * Step: ${step.name} (Status: ${step.status}, Conclusion: ${step.conclusion})`);
        });
      }
    });
  })
  .catch(err => {
    console.error("Error:", err.message);
  });
