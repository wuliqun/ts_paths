function api() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("DEMO22222 result.");
    }, 1000);
  });
}

export { api };
