const url = 'https://api.github.com/repos/utkarsh207543/photomat/contents';

console.log("Fetching repository contents...");
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
    console.log("Repository Contents:");
    data.forEach(item => {
      console.log(`- ${item.name} (${item.type})`);
    });
  })
  .catch(err => {
    console.error("Error fetching contents:", err.message);
  });
