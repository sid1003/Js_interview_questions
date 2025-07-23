// PROMISES Interview Questions

// 1️⃣ Synchronous vs Asynchronous Code

console.log("start");
console.log("Subscribe to Roadside Coder");
console.log("stop");

console.log("start");
setTimeout(() => {
  console.log("Subscribe to Roadside Coder");
}, 2000);
console.log("stop");

// 2️⃣ Asynchronous Example (fixed)

console.log("start");
function importantAction(username) {
  setTimeout(() => {
    console.log(`Subscribe to ${username}`);
  }, 1000);
}
importantAction("Roadside Coder");
console.log("stop");

// 3️⃣ Callback Style

console.log("start");
function importantActionCb(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}
importantActionCb("Roadside Coder", console.log);
console.log("stop");

// 4️⃣ Callback Hell

console.log("start");
function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}
function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} video`);
  }, 1000);
}

importantActionCb("Roadside Coder", (msg) => {
  console.log(msg);
  likeTheVideo("JS Interview", (likeMsg) => {
    console.log(likeMsg);
    shareTheVideo("JS Interview", console.log);
  });
});
console.log("stop");

// 5️⃣ Promises Example

console.log("start");

function makePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = true;
      if (result) resolve("Subscribed to Roadside Coder");
      else reject(new Error("Not subscribed"));
    }, 2000);
  });
}

const sub = makePromise();
sub.then(console.log).catch(console.error);
console.log("stop");

// 6️⃣ Promisified Callbacks & Promise Chaining

console.log("start");

function importantActionP(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeVideoP(video) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}
function shareVideoP(video) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

importantActionP("Roadside Coder")
  .then(console.log)
  .then(() => likeVideoP("JS Interview").then(console.log))
  .then(() => shareVideoP("JS Interview").then(console.log))
  .catch(console.error);

console.log("stop");

// 7️⃣ Proper Promise Chaining

importantActionP("Roadside Coder")
  .then((msg) => {
    console.log(msg);
    return likeVideoP("JS Interview");
  })
  .then((msg) => {
    console.log(msg);
    return shareVideoP("JS Interview");
  })
  .then(console.log)
  .catch(console.error);

// 8️⃣ Promise Combinators

console.log("start");
Promise.all([importantActionP("RC"), likeVideoP("JS"), shareVideoP("JS")])
  .then(console.log)
  .catch(console.error);
console.log("stop");

console.log("start");
Promise.race([importantActionP("RC"), likeVideoP("JS"), shareVideoP("JS")])
  .then(console.log)
  .catch(console.error);
console.log("stop");

console.log("start");
Promise.allSettled([importantActionP("RC"), likeVideoP("JS"), shareVideoP("JS")])
  .then(console.log);
console.log("stop");

console.log("start");
Promise.any([importantActionP("RC"), likeVideoP("JS"), shareVideoP("JS")])
  .then(console.log)
  .catch(console.error);
console.log("stop");

// 9️⃣ async/await Style

async function runAsync() {
  try {
    const m1 = await importantActionP("RC");
    const m2 = await likeVideoP("JS");
    const m3 = await shareVideoP("JS");
    console.log({ m1, m2, m3 });
  } catch (e) {
    console.error(e);
  }
}
runAsync();

// 🔟 Interview Questions

// Q1
console.log("start");
const p1 = new Promise((res) => {
  console.log(1);
  res(2);
});
p1.then(console.log);
console.log("end"); // prints: start, 1, end, 2

// Q2
console.log("start");
const p2 = new Promise((res) => {
  console.log(1);
  res(2);
  console.log(3);
});
p2.then(console.log);
console.log("end"); // start,1,3,end,2

// Q3
console.log("start");
console.log("middle");
const p3 = new Promise((res) => {
  console.log(1);
  res("success");
});
p3.then(console.log);
console.log("end"); // start,middle,1,end,success

// Q4
function job1() {
  return Promise.reject();
}
job1()
  .then(() => console.log("Success 1"))
  .then(() => console.log("Success 2"))
  .then(() => console.log("Success 3"))
  .catch(() => console.log("Error 1"))
  .then(() => console.log("Success 4")); // Error 1 then Success 4

// Q5
function job2(state) {
  return state ? Promise.resolve("success") : Promise.reject("error");
}
job2(true)
  .then((d) => {
    console.log(d);
    return job2(false);
  })
  .catch((err) => {
    console.log(err);
    return "Error caught";
  })
  .then(console.log)
  .then(() => job2(true))
  .then(console.log)
  .catch(console.log); // success, error, Error caught, success

// Q6
function job3(state) {
  return state ? Promise.resolve("success") : Promise.reject("error");
}
job3(true)
  .then((d) => {
    console.log(d);
    return job3(true);
  })
  .then((d) => {
    if (d !== "victory") throw "Defeat";
    return job3(true);
  })
  .then(console.log)
  .catch((err) => {
    console.log(err);
    return job3(false);
  })
  .then(console.log)
  .then(() => job3(true))
  .then(console.log)
  .then((v) => v instanceof Error ? console.error(v.message) : console.log("Success:", v))
  .catch((e) => console.log("Error:", e.message));

// Q7
const first = Promise.resolve("First!");
const second = Promise.resolve(first);
second.then((r) => console.log(r)); // logs "First!"

// Q8 async/await fetch

async function loadJson(url) {
  let resp = await fetch(url);
  if (resp.status == 200) return await resp.json();
  throw new Error(resp.status);
}
loadJson("https://javascript.info/no-such-user.json").catch(alert);

// Q9 Recursive Promises

function promRecurse(arr) {
  if (arr.length === 0) return;
  arr
    .shift()
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => promRecurse(arr));
}
promRecurse([
  importantActionP("RC"),
  likeVideoP("JS"),
  shareVideoP("JS")
]);

// Q🔟 PromisePolyFill

function PromisePolyFill(executor) {
  let onResolve = null,
    onReject = null,
    isResolved = false,
    isRejected = false,
    fulfilledValue,
    rejectedValue;

  function resolve(val) {
    isResolved = true;
    fulfilledValue = val;
    if (onResolve) onResolve(val);
  }

  function reject(err) {
    isRejected = true;
    rejectedValue = err;
    if (onReject) onReject(err);
  }

  this.then = (cb) => {
    onResolve = cb;
    if (isResolved) onResolve(fulfilledValue);
    return this;
  };
  this.catch = (cb) => {
    onReject = cb;
    if (isRejected) onReject(rejectedValue);
    return this;
  };
  executor(resolve, reject);
}

// Basic usage
const poly = new PromisePolyFill((res) => {
  setTimeout(() => res("done"), 100);
});
poly.then(console.log);
