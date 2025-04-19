const timerId = setTimeout(() => console.log("Hello"), 1000);

const intervalId = setInterval(() => console.log("Hello"), 2000);

clearTimeout(timerId);

setTimeout(() => clearInterval(intervalId), 5000);

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const debouncedFunction = debounce(() => console.log("Debounced!"), 1000);
window.addEventListener("resize", debouncedFunction);

const throttledFunction = throttle(() => console.log("Throttled!"), 1000);
window.addEventListener("resize", throttledFunction);
