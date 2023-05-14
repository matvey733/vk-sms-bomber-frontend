const btn = document.querySelector(".bomb-btn");
const resultDiv = document.querySelector(".result");
const progressDiv = document.querySelector(".progress");

btn.addEventListener("click", async () => {
  progressDiv.textContent = "Bombing...";

  try {
    const result = await fetch("https://vk-sms-bomber-triggerer-server.onrender.com", {
    });
    console.log(result);
    resultDiv.textContent = result.status;
    progressDiv.textContent = "Done!";
  } catch (err) {
    console.error(err);
  }
})
