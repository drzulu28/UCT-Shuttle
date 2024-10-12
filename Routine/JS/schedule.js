// Define bus schedules for each route with stops
const schedules = {
    "Route A": [
        { stop: "Stop 1", times: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"] },
        { stop: "Stop 2", times: ["08:05 AM", "09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM"] },
        { stop: "Stop 3", times: ["08:10 AM", "09:10 AM", "10:10 AM", "11:10 AM", "12:10 PM"] },
        { stop: "Stop 4", times: ["08:15 AM", "09:15 AM", "10:15 AM", "11:15 AM", "12:15 PM"] }
    ],
    "Route B": [
        { stop: "Stop 1", times: ["08:15 AM", "09:15 AM", "10:15 AM", "11:15 AM", "12:15 PM"] },
        { stop: "Stop 2", times: ["08:20 AM", "09:20 AM", "10:20 AM", "11:20 AM", "12:20 PM"] },
        { stop: "Stop 3", times: ["08:25 AM", "09:25 AM", "10:25 AM", "11:25 AM", "12:25 PM"] },
        { stop: "Stop 4", times: ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"] }
    ],
    "Route C": [
        { stop: "Stop 1", times: ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"] },
        { stop: "Stop 2", times: ["08:35 AM", "09:35 AM", "10:35 AM", "11:35 AM", "12:35 PM"] },
        { stop: "Stop 3", times: ["08:40 AM", "09:40 AM", "10:40 AM", "11:40 AM", "12:40 PM"] },
        { stop: "Stop 4", times: ["08:45 AM", "09:45 AM", "10:45 AM", "11:45 AM", "12:45 PM"] }
    ],
    "Route D": [
        { stop: "Stop 1", times: ["08:45 AM", "09:45 AM", "10:45 AM", "11:45 AM", "12:45 PM"] },
        { stop: "Stop 2", times: ["08:50 AM", "09:50 AM", "10:50 AM", "11:50 AM", "12:50 PM"] },
        { stop: "Stop 3", times: ["08:55 AM", "09:55 AM", "10:55 AM", "11:55 AM", "12:55 PM"] },
        { stop: "Stop 4", times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"] }
    ],
    "Route E": [
        { stop: "Stop 1", times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"] },
        { stop: "Stop 2", times: ["09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM", "01:05 PM"] },
        { stop: "Stop 3", times: ["09:10 AM", "10:10 AM", "11:10 AM", "12:10 PM", "01:10 PM"] },
        { stop: "Stop 4", times: ["09:15 AM", "10:15 AM", "11:15 AM", "12:15 PM", "01:15 PM"] }
    ]
};

function updateSchedule() {
    const routeSelect = document.getElementById("route");
    const scheduleTable = document.getElementById("scheduleTable");

    // Clear previous schedule
    scheduleTable.innerHTML = "";

    // Get selected route
    const selectedRoute = routeSelect.value;

    if (selectedRoute) {
        // Create table header
        const headerRow = document.createElement("tr");
        const headerCell1 = document.createElement("th");
        const headerCell2 = document.createElement("th");
        headerCell1.textContent = "Stop";
        headerCell2.textContent = "Departure Time";
        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        scheduleTable.appendChild(headerRow);

        // Populate the schedule table
        schedules[selectedRoute].forEach(stop => {
            stop.times.forEach((time, index) => {
                const row = document.createElement("tr");
                const cellStop = document.createElement("td");
                const cellTime = document.createElement("td");

                cellStop.textContent = stop.stop;
                cellTime.textContent = time; // Display each time in its own row

                // If it's the first time for the stop, display it
                if (index === 0) {
                    row.appendChild(cellStop);
                    row.appendChild(cellTime);
                    scheduleTable.appendChild(row);
                } else {
                    // For subsequent times, just display the time with the same stop
                    const previousRow = scheduleTable.lastElementChild; // Get the last row
                    const cellTimePrevious = document.createElement("td");
                    cellTimePrevious.textContent = time; // New time for the same stop
                    previousRow.appendChild(cellTimePrevious);
                }
            });
        });
    }
}