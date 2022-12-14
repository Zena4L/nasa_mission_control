const API_URL = "http://localhost:8000";
// Load planets and return as JSON.
async function httpGetPlanets() {
  const res = await fetch(`${API_URL}/planets`);
  return await res.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const res = await fetch(`${API_URL}/launch`);
  const fetchLaunches = await res.json();
  return fetchLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}
// Submit given launch data to launch system.

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launch`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
