const url = 'https://api.github.com/repos/utkarsh207543/photomat/actions/runs';

console.log("Fetching workflow runs...");
fetch(url, {
  headers: {
    'User-Agent': 'Node-Fetch'
  }
})
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    if (!data.workflow_runs || data.workflow_runs.length === 0) {
      console.log("No workflow runs found.");
      return;
    }
    
    const runs = data.workflow_runs.map(run => ({
      name: run.name,
      status: run.status,
      conclusion: run.conclusion,
      created_at: run.created_at,
      html_url: run.html_url
    }));
    
    console.log("Workflow Runs:");
    console.log(JSON.stringify(runs, null, 2));
  })
  .catch(err => {
    console.error("Error fetching runs:", err.message);
  });
