// index.js

// Task 01: Iterating with Async/Await
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await delay(1000); // Wait for 1 second
  }
}

// Task 02: Awaiting a Call
async function awaitCall() {
  const fetchData = () =>
    new Promise((resolve) => setTimeout(() => resolve("Data from API"), 2000));

  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Task 04: Awaiting Concurrent Requests
async function concurrentRequests() {
  const fetchData1 = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Data from API 1"), 2000)
    );
  const fetchData2 = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Data from API 2"), 2000)
    );

  try {
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log("Combined results:", data1, data2);
  } catch (error) {
    console.error("Error with concurrent requests:", error);
  }
}

// Example usage:
(async () => {
  console.log("Starting Task 01: Iterating with Async/Await");
  await iterateWithAsyncAwait(["Apple", "Banana", "Cherry"]);

  console.log("Starting Task 02: Awaiting a Call");
  await awaitCall();

  console.log("Starting Task 04: Awaiting Concurrent Requests");
  await concurrentRequests();
})();
