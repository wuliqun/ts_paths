function api() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("DEMO111111111 result.");
    }, 1000);
  });
}

export { api };
