document.getElementById("voteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;

    // IMPORTANT: no dot at the end
    if (!age || !name) {
      alert("Please enter valid details");
      return;
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Number(age) > 18) {
          resolve();
        } else {
          reject();
        }
      }, 4000);
    });

    promise
      .then(() => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch(() => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
  });