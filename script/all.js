const interviewButtons = document.getElementsByClassName("btn-success");
const rejectedButtons = document.getElementsByClassName("btn-error");

const interviewContainer = document.getElementById("interview-jobs");
const rejectedContainer = document.getElementById("rejected-jobs");

for (let i = 0; i < interviewButtons.length; i++) {
  interviewButtons[i].addEventListener("click", function () {
    const jobCard = this.parentElement.parentElement;
    interviewContainer.appendChild(jobCard);
    const statusButton = jobCard.getElementsByClassName("btn-soft")[0];
    statusButton.innerText = "Interview";
    statusButton.classList.add("btn-success");
});
}

for (let i = 0; i < rejectedButtons.length; i++) {
  rejectedButtons[i].addEventListener("click", function () {
    const jobCard = this.parentElement.parentElement;
    rejectedContainer.appendChild(jobCard);
    const statusButton = jobCard.getElementsByClassName("btn-soft")[0];
    statusButton.innerText = "Rejected";
    statusButton.classList.add("btn-error");
  });
}

const allJobs = document.getElementById("all-jobs");
const interviewJobs = document.getElementById("interview-jobs");
const rejectedJobs = document.getElementById("rejected-jobs");

document.getElementById("show-all").addEventListener("click", function() {
allJobs.classList.remove("hidden");
interviewJobs.classList.add("hidden");
  rejectedJobs.classList.add("hidden");
});

document.getElementById("show-interview").addEventListener("click", function() {
  allJobs.classList.add("hidden");
  interviewJobs.classList.remove("hidden");
  rejectedJobs.classList.add("hidden");
});

document.getElementById("show-rejected").addEventListener("click", function() {
  allJobs.classList.add("hidden");
  interviewJobs.classList.add("hidden");
  rejectedJobs.classList.remove("hidden");
});



