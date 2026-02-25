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
    const noJobs = document.getElementById("no-jobs-interview");
    if (interviewContainer.getElementsByClassName("job").length === 0) {
      noJobs.classList.remove("hidden"); 
    } else {
      noJobs.classList.add("hidden"); 
    }
  });
}

for (let i = 0; i < rejectedButtons.length; i++) {
  rejectedButtons[i].addEventListener("click", function () {
    const jobCard = this.parentElement.parentElement;
    rejectedContainer.appendChild(jobCard);
    const statusButton = jobCard.getElementsByClassName("btn-soft")[0];
    statusButton.innerText = "Rejected";
    statusButton.classList.add("btn-error");
    const noJobs = document.getElementById("no-jobs-rejected");
    if (rejectedContainer.getElementsByClassName("job").length === 0) {
      noJobs.classList.remove("hidden"); 
    } else {
      noJobs.classList.add("hidden"); 
    }
  });
}

const allJobs = document.getElementById("all-jobs");
const interviewJobs = document.getElementById("interview-jobs");
const rejectedJobs = document.getElementById("rejected-jobs");
const jobCount = document.getElementById("job-count");
const totalJobCount = document.getElementById("total-jobcount");
const interviewJobCount = document.getElementById("interview-jobcount");
const rejectedJobCount = document.getElementById("rejected-jobcount");

document.getElementById("show-all").addEventListener("click", function() {
    allJobs.classList.remove("hidden");
    interviewJobs.classList.add("hidden");
    rejectedJobs.classList.add("hidden");
    jobCount.innerText = document.getElementById("all-jobs").getElementsByClassName("job").length;
    totalJobCount.innerText = document.getElementById("all-jobs").getElementsByClassName("job").length;
    interviewJobCount.innerText = document.getElementById("interview-jobs").getElementsByClassName("job").length;
    rejectedJobCount.innerText = document.getElementById("rejected-jobs").getElementsByClassName("job").length;
});

document.getElementById("show-interview").addEventListener("click", function() {
    allJobs.classList.add("hidden");
    interviewJobs.classList.remove("hidden");
    rejectedJobs.classList.add("hidden");
    jobCount.innerText = interviewContainer.getElementsByClassName("job").length;
    totalJobCount.innerText = document.getElementById("all-jobs").getElementsByClassName("job").length;
    interviewJobCount.innerText = document.getElementById("interview-jobs").getElementsByClassName("job").length;
    rejectedJobCount.innerText = document.getElementById("rejected-jobs").getElementsByClassName("job").length;
});

document.getElementById("show-rejected").addEventListener("click", function() {
    allJobs.classList.add("hidden");
    interviewJobs.classList.add("hidden");
    rejectedJobs.classList.remove("hidden");
    jobCount.innerText = rejectedContainer.getElementsByClassName("job").length;
    totalJobCount.innerText = document.getElementById("all-jobs").getElementsByClassName("job").length;
    interviewJobCount.innerText = document.getElementById("interview-jobs").getElementsByClassName("job").length;
    rejectedJobCount.innerText = document.getElementById("rejected-jobs").getElementsByClassName("job").length;
});

function handleDelete(e) {
    if (e.target.classList.contains("fa-trash")) {
        const jobCard = e.target.closest(".job");
        jobCard.remove();
    }
}

document.getElementById("all-jobs").addEventListener("click", handleDelete);
document.getElementById("interview-jobs").addEventListener("click", handleDelete);
document.getElementById("rejected-jobs").addEventListener("click", handleDelete);

