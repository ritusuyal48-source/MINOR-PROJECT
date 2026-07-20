# 🚚 GreyAtom Logistics – Delivery Exception Management Dashboard

A professional **frontend-only operations dashboard** built using **HTML5, CSS3, and Vanilla JavaScript** to help logistics teams efficiently report, track, filter, resolve, and manage delivery exceptions.

Developed as part of the **Frontend Intern Assignment** for **GreyAtom Logistics Pvt. Ltd.**

---

# 📖 Overview

Delivery exceptions such as incorrect addresses, unavailable customers, payment issues, and damaged packages can delay deliveries and reduce operational efficiency.

This dashboard provides a clean and responsive interface that enables operations managers to:

* Report delivery exceptions
* Monitor reported issues
* Track issue status
* Resolve delivery exceptions
* Delete unnecessary records
* Filter issues by type and status
* View live dashboard statistics

The project is built entirely with **Vanilla JavaScript** without using frameworks, backend services, or external libraries.

---

# ✨ Features

## Dashboard

* Professional corporate dashboard UI
* Responsive layout
* Statistics cards
* Sticky header
* Clean internal operations interface

---

## Delivery Exception Form

* Delivery ID (Required)
* Customer Name (Required)
* Issue Type Selection
* Priority Selection
* Notes (Optional)
* Client-side validation
* Prevents page reload

---

## Exceptions Table

Displays:

* Delivery ID
* Customer Name
* Issue Type
* Priority
* Status
* Reported Date & Time
* Notes
* Action Buttons

---

## Row Actions

### Resolve Issue

* Updates status from **Open** → **Resolved**
* Changes badge color
* Highlights resolved row
* Disables Resolve button
* Updates dashboard statistics

### Delete Issue

* Confirmation dialog
* Removes row instantly
* Updates statistics
* Displays empty state when no records remain

---

## Search & Filters

### Search

* Delivery ID
* Customer Name

### Filter by Issue Type

* All Issues
* Address Not Found
* Customer Not Available
* Payment Issue
* Package Damaged

### Filter by Status

* All
* Open
* Resolved

---

# 📊 Dashboard Statistics

Automatically displays:

* Total Exceptions
* Open Issues
* Resolved Issues
* High Priority Issues

Statistics update dynamically whenever:

* A new issue is added
* An issue is resolved
* A record is deleted

---

# 🎨 UI Highlights

* Modern corporate interface
* Responsive design
* Dashboard cards
* Priority badges
* Status badges
* Hover animations
* Professional table layout
* Empty-state message
* High-priority highlighting
* Smooth transitions

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6)

---

# 📂 Project Structure

```text
GreyAtom-Delivery-Dashboard/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
```

---

# ⚙️ JavaScript Concepts Used

* DOM Manipulation
* Event Delegation
* Form Validation
* Dynamic Table Rendering
* Conditional Logic
* createElement()
* appendChild()
* querySelector()
* addEventListener()
* classList
* preventDefault()

---

# ✅ Assignment Requirements Covered

| Requirement                | Status |
| -------------------------- | :----: |
| HTML Structure             |    ✅   |
| CSS Styling                |    ✅   |
| Vanilla JavaScript         |    ✅   |
| Responsive Design          |    ✅   |
| Delivery Exception Form    |    ✅   |
| Required Field Validation  |    ✅   |
| Prevent Page Reload        |    ✅   |
| Dynamic Table Rendering    |    ✅   |
| Resolve Functionality      |    ✅   |
| Delete Functionality       |    ✅   |
| Confirmation Before Delete |    ✅   |
| Filter by Issue Type       |    ✅   |
| Filter by Status           |    ✅   |
| Search Functionality       |    ✅   |
| Event Delegation           |    ✅   |
| Statistics Dashboard       |    ✅   |
| High Priority Highlight    |    ✅   |
| Disable Resolve Button     |    ✅   |

---

# 🚀 How to Run

1. Clone this repository:

```bash
git clone https://github.com/your-username/GreyAtom-Delivery-Dashboard.git
```

2. Open the project folder.

3. Ensure the following files are in the same directory:

* `index.html`
* `style.css`
* `script.js`

4. Open `index.html` in your preferred web browser.

No installation, build process, backend, or dependencies are required.

---

# 🔮 Future Improvements

Potential enhancements include:

* LocalStorage support
* Backend integration
* Authentication & user roles
* Export to CSV / Excel
* Advanced analytics dashboard
* Pagination
* Dark mode
* Notifications
* REST API integration
* Cloud database support

---

# 👩‍💻 Author

**Ritu Suyal**

BCA Student

Developed as a Frontend Internship Assignment.

---

# 📄 License

This project is intended for educational purposes and internship evaluation only.

