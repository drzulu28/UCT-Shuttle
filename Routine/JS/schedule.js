// Define bus schedules for each route with stops
const schedules = {
    "Bremner-Kramer": [
        { stop: "Tugwell", times: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"] },
        { stop: "Bremner", times: ["08:05 AM", "09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM"] },
        { stop: "Kramer", times: ["08:10 AM", "09:10 AM", "10:10 AM", "11:10 AM", "12:10 PM"] },
        { stop: "Edcare", times: ["08:15 AM", "09:15 AM", "10:15 AM", "11:15 AM", "12:15 PM"] },
        { stop: "UC North", times: ["08:15 AM", "09:15 AM", "10:15 AM", "11:15 AM", "12:15 PM"] }

    ],
    "Claremont": [
        { stop: "UC South", times: ["08:15 AM", "09:15 AM", "10:15 AM", "11:15 AM", "12:15 PM"] },
        { stop: "Claremont", times: ["08:20 AM", "09:20 AM", "10:20 AM", "11:20 AM", "12:20 PM"] },
        { stop: "Tugwell", times: ["08:25 AM", "09:25 AM", "10:25 AM", "11:25 AM", "12:25 PM"] },
    ],
    "Clarinus": [
        { stop: "UC North", times: ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"] },
        { stop: "Clarinus", times: ["08:35 AM", "09:35 AM", "10:35 AM", "11:35 AM", "12:35 PM"] },
    ],
    "Forest Hill": [
        { stop: "UC North", times: ["08:45 AM", "09:45 AM", "10:45 AM", "11:45 AM", "12:45 PM"] },
        { stop: "Mowbray", times: ["08:50 AM", "09:50 AM", "10:50 AM", "11:50 AM", "12:50 PM"] },
        { stop: "Forest Hill", times: ["08:55 AM", "09:55 AM", "10:55 AM", "11:55 AM", "12:55 PM"] },
    ],
    "Hiddingh": [
        { stop: "UC North", times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"] },
        { stop: "Tugwell", times: ["09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM", "01:05 PM"] },
        { stop: "Hiddingh", times: ["09:10 AM", "10:10 AM", "11:10 AM", "12:10 PM", "01:10 PM"] },
    ],
    "Liesbeeck": [
        { stop: "UC North", times: ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"] },
        { stop: "Tugwell", times: ["08:35 AM", "09:35 AM", "10:35 AM", "11:35 AM", "12:35 PM"] },
        { stop: "Liesbeeck", times: ["08:40 AM", "09:40 AM", "10:40 AM", "11:40 AM", "12:40 PM"] },
    ],
    "Obz Square": [
        { stop: "UC North", times: ["08:45 AM", "09:45 AM", "10:45 AM", "11:45 AM", "12:45 PM"] },
        { stop: "UC South", times: ["08:50 AM", "09:50 AM", "10:50 AM", "11:50 AM", "12:50 PM"] },
        { stop: "Tugwell", times: ["08:55 AM", "09:55 AM", "10:55 AM", "11:55 AM", "12:55 PM"] },
        { stop: "Obz Square", times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "13:00 PM"] },
        { stop: "FHS", times: ["09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM", "13:05 PM"] },
    ],
    "Rochester": [
        { stop: "UC North", times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"] },
        { stop: "Rochester", times: ["09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM", "01:05 PM"] },
    ],
    "Sandown": [
        { stop: "UC South", times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"] },
        { stop: "Sandown", times: ["09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM", "01:05 PM"] },
        { stop: "Tugwell", times: ["09:10 AM", "10:10 AM", "11:10 AM", "12:10 PM", "01:10 PM"] },
    ],
    "Tugwell": [
        { stop: "Tugwell", times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"] },
        { stop: "UC North", times: ["09:05 AM", "10:05 AM", "11:05 AM", "12:05 PM", "01:05 PM"] },
    ],
    "Res Loop(Anti-Clockwise)": [
        { stop: "UC North", times: ["09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM"] },
        { stop: "UC South", times: ["09:05 PM", "10:05 PM", "11:05 PM", "12:05 AM", "01:05 AM"] },
        { stop: "Kramer", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Tugwell", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Groote Schuur Res", times: ["09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM"] },
        { stop: "Forest Hill", times: ["09:05 PM", "10:05 PM", "11:05 PM", "12:05 AM", "01:05 AM"] },
        { stop: "Liesbeck", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Harold Cressy", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Obz Square", times: ["09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM"] },
        { stop: "Rochester", times: ["09:05 PM", "10:05 PM", "11:05 PM", "12:05 AM", "01:05 AM"] },
        { stop: "FHS", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Clarinus", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },

    ],
    "Res Loop(Clockwise)": [
        { stop: "UC North", times: ["09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM"] },
        { stop: "UC South", times: ["09:05 PM", "10:05 PM", "11:05 PM", "12:05 AM", "01:05 AM"] },
        { stop: "Kramer", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Clarinus", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "FHS", times: ["09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM"] },
        { stop: "Obz Square", times: ["09:05 PM", "10:05 PM", "11:05 PM", "12:05 AM", "01:05 AM"] },
        { stop: "Rochester", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Harold Cressy", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Liesbeeck", times: ["09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM"] },
        { stop: "Forest Hill", times: ["09:05 PM", "10:05 PM", "11:05 PM", "12:05 AM", "01:05 AM"] },
        { stop: "Groote Schuur Res", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
        { stop: "Tugwell", times: ["09:10 PM", "10:10 PM", "11:10 PM", "12:10 AM", "01:10 AM"] },
    ],
};

function updateSchedule() {
    const routeSelect = document.getElementById("route");
    const scheduleTable = document.getElementById("scheduleTable");

    // Clear previous schedule
    scheduleTable.innerHTML = "";

    // Get selected route
    const selectedRoute = routeSelect.value;

    if (selectedRoute) {
        const selectedSchedule = schedules[selectedRoute];

        // Create table header for stops
        const headerRow = document.createElement("tr");

        // Add stops to header row (no empty first cell anymore)
        selectedSchedule.forEach(stop => {
            const stopCell = document.createElement("th");
            stopCell.textContent = stop.stop;
            headerRow.appendChild(stopCell);
        });

        scheduleTable.appendChild(headerRow);

        // Determine the number of times 
        const numTimes = selectedSchedule[0].times.length;

        // Create rows for times (without Time Slot labels)
        for (let i = 0; i < numTimes; i++) {
            const timeRow = document.createElement("tr");

            // Add corresponding time for each stop
            selectedSchedule.forEach(stop => {
                const timeCell = document.createElement("td");
                timeCell.textContent = stop.times[i]; // Get time for this stop
                timeRow.appendChild(timeCell);
            });

            scheduleTable.appendChild(timeRow);
        }
    }
}
