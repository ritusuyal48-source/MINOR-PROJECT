/*=========================================================
    GreyAtom Logistics Dashboard
    script.js - Part 3A
==========================================================*/

//=========================
// Current Date
//=========================

const currentDate = document.querySelector("#currentDate");

const today = new Date();

currentDate.textContent = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

//=========================
// DOM Elements
//=========================

const form = document.querySelector("#exceptionForm");

const tableBody = document.querySelector("#tableBody");

const emptyRow = document.querySelector("#emptyRow");

const totalCount = document.querySelector("#totalCount");

const openCount = document.querySelector("#openCount");

const resolvedCount = document.querySelector("#resolvedCount");

const highCount = document.querySelector("#highCount");

//=========================
// Statistics
//=========================

let total = 0;

let open = 0;

let resolved = 0;

let high = 0;

//=========================
// Update Cards
//=========================

function updateCards() {

    totalCount.textContent = total;

    openCount.textContent = open;

    resolvedCount.textContent = resolved;

    highCount.textContent = high;

}

//=========================
// Form Submit
//=========================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Inputs

    const deliveryId = document
        .querySelector("#deliveryId")
        .value
        .trim();

    const customerName = document
        .querySelector("#customerName")
        .value
        .trim();

    const issueType = document
        .querySelector("#issueType")
        .value;

    const notes = document
        .querySelector("#notes")
        .value
        .trim();

    const priority = document.querySelector(
        'input[name="priority"]:checked'
    );

    // Validation

    if (
        deliveryId === "" ||
        customerName === "" ||
        issueType === "" ||
        !priority
    ) {

        alert("Please fill all required fields.");

        return;

    }

    // Hide Empty Row

    emptyRow.style.display = "none";

    // Date

    const reportTime = new Date().toLocaleString();

    // Create Row

    const row = document.createElement("tr");

    // High Priority

    if (priority.value === "High") {

        row.classList.add("high-row");

        high++;

    }

    row.innerHTML = `

        <td>${deliveryId}</td>

        <td>${customerName}</td>

        <td>${issueType}</td>

        <td>

            <span class="priority-badge ${priority.value.toLowerCase() === "high"
            ? "high-priority"
            : priority.value.toLowerCase()}">

                ${priority.value}

            </span>

        </td>

        <td>

            <span class="status-badge open-status">

                Open

            </span>

        </td>

        <td>${reportTime}</td>

        <td>${notes || "-"}</td>

        <td class="actions">

            <button class="resolve-btn">

                Resolve

            </button>

            <button class="delete-btn">

                Delete

            </button>

        </td>

    `;

    tableBody.appendChild(row);

    // Update Counts

    total++;

    open++;

    updateCards();

    // Reset Form

    form.reset();

});

/*=========================================================
    GreyAtom Logistics Dashboard
    script.js - Part 3B
==========================================================*/

//=========================
// Filters & Search
//=========================

const searchInput = document.querySelector("#searchInput");
const filterIssue = document.querySelector("#filterIssue");
const filterStatus = document.querySelector("#filterStatus");

//=========================
// Empty State
//=========================

function checkEmptyTable() {

    const rows = tableBody.querySelectorAll("tr:not(#emptyRow)");

    if (rows.length === 0) {

        emptyRow.style.display = "table-row";

    } else {

        emptyRow.style.display = "none";

    }

}

//=========================
// Resolve & Delete
//=========================

tableBody.addEventListener("click", function (e) {

    const row = e.target.closest("tr");

    if (!row || row.id === "emptyRow") return;

    // =====================
    // Resolve
    // =====================

    if (e.target.classList.contains("resolve-btn")) {

        const statusBadge = row.querySelector(".status-badge");
        const resolveBtn = row.querySelector(".resolve-btn");

        if (statusBadge.textContent.trim() === "Resolved") return;

        statusBadge.textContent = "Resolved";

        statusBadge.classList.remove("open-status");
        statusBadge.classList.add("resolved-status");

        row.classList.add("resolved-row");

        resolveBtn.disabled = true;
        resolveBtn.textContent = "Resolved";

        open--;
        resolved++;

        updateCards();

    }

    // =====================
    // Delete
    // =====================

    if (e.target.classList.contains("delete-btn")) {

        const confirmDelete = confirm(
            "Are you sure you want to delete this delivery exception?"
        );

        if (!confirmDelete) return;

        // Update counters before removing

        const priorityBadge = row.querySelector(".priority-badge");
        const statusBadge = row.querySelector(".status-badge");

        total--;

        if (priorityBadge.textContent.trim() === "High") {

            high--;

        }

        if (statusBadge.textContent.trim() === "Open") {

            open--;

        } else {

            resolved--;

        }

        row.remove();

        updateCards();

        checkEmptyTable();

    }

});

//=========================
// Search & Filters
//=========================

function applyFilters() {

    const keyword = searchInput.value.toLowerCase().trim();

    const issueValue = filterIssue.value;

    const statusValue = filterStatus.value;

    const rows = tableBody.querySelectorAll("tr:not(#emptyRow)");

    rows.forEach(function (row) {

        const deliveryId =
            row.cells[0].textContent.toLowerCase();

        const customer =
            row.cells[1].textContent.toLowerCase();

        const issue =
            row.cells[2].textContent;

        const status =
            row.querySelector(".status-badge")
                .textContent
                .trim();

        // Search

        const searchMatch =
            deliveryId.includes(keyword) ||
            customer.includes(keyword);

        // Issue Filter

        const issueMatch =
            issueValue === "All" ||
            issue === issueValue;

        // Status Filter

        const statusMatch =
            statusValue === "All" ||
            status === statusValue;

        if (
            searchMatch &&
            issueMatch &&
            statusMatch
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}

//=========================
// Filter Events
//=========================

searchInput.addEventListener("keyup", applyFilters);

filterIssue.addEventListener("change", applyFilters);

filterStatus.addEventListener("change", applyFilters);

//=========================
// Initial Dashboard
//=========================

updateCards();

checkEmptyTable();