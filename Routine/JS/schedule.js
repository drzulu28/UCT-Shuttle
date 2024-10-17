// Define bus schedules for each route with stops
const schedules = {
    "Bremner-Kramer": [
        { stop: "Tugwell", times: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "17:40"] },
        { stop: "Bremner", times: ["08:05", "09:05", "10:05", "11:05", "12:05", "13:05", "14:05", "15:05", "16:05", "17:05", "17:45"] },
        { stop: "Kramer", times: ["08:10", "09:10", "10:10", "11:10", "12:10", "13:10", "14:10", "15:10", "16:10", "17:10", "17:50"] },
        { stop: "Edcare", times: ["08:15", "09:15", "10:15", "11:15", "12:15", "13:15", "14:15", "15:15", "16:15", "17:15", "17:55"] },
        { stop: "UC North", times: ["08:20", "09:20", "10:20", "11:20", "12:20", "13:20", "14:20", "15:20", "16:20", "17:20", "18:00"] }
    ],
    "Claremont": [
        { stop: "UC South", times: ["08:15", "08:45", "09:15", "09:45", "10:15", "10:45", "11:15", "11:45", "12:15", "12:45", "13:15", "13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:05"] },
        { stop: "Claremont", times: ["08:20", "08:50", "09:20", "09:50", "10:20", "10:50", "11:20", "11:50", "12:20", "12:50", "13:20", "13:50", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:15"] },
        { stop: "Tugwell", times: ["08:25", "08:55", "09:25", "09:55", "10:25", "10:55", "11:25", "11:55", "12:25", "12:55", "13:25", "13:55", "14:25", "14:55", "15:25", "15:55", "16:25", "16:55", "17:25"] },
    ],
    "Forest Hill": [
        { stop: "UC North", times: ["08:45", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:00", "17:15", "17:40", "18:10", "18:35"] },
        { stop: "Tugwell", times: ["08:50", "09:20", "09:50", "10:20", "10:50", "11:20", "11:50", "12:20", "12:50", "13:20", "13:50", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:05", "17:35", "18:05", "18:40"] },
        { stop: "Mowbray", times: ["08:55", "09:25", "09:55", "10:25", "10:55", "11:25", "11:55", "12:25", "12:55", "13:25", "13:55", "14:25", "14:55", "15:25", "15:55", "16:25", "16:55", "17:10", "17:40", "18:10", "18:45"] },
        { stop: "Forest Hill", times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "18:55"] },
    ],

    "Clarinus": [
        { stop: "UC North", times: ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "Clarinus", times: ["08:35", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
    ],
    "Forest Hill": [
        { stop: "Tugwell", times: ["08:45", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:00", "17:15", "17:40", "18:10", "18:35"] },
        { stop: "Mowbray", times: ["08:50", "09:20", "09:50", "10:20", "10:50", "11:20", "11:50", "12:20", "12:50", "13:20", "13:50", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:05", "17:35", "18:05", "18:40"] },
        { stop: "Forest Hill", times: ["08:55", "09:25", "09:55", "10:25", "10:55", "11:25", "11:55", "12:25", "12:55", "13:25", "13:55", "14:25", "14:55", "15:25", "15:55", "16:25", "16:55", "17:10", "17:40", "18:10", "18:45"] },
        { stop: "UC North", times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "18:55"] },
    ],


    "Hiddingh": [
        { stop: "UC North", times: ["08:45", "09:45", "10:45", "11:45", "12:45", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"] },
        { stop: "Tugwell", times: ["08:50", "09:50", "10:50", "11:50", "12:50", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05"] },
        { stop: "Hiddingh", times: ["08:55", "09:55", "10:55", "11:55", "12:55", "13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10"] },
    ],
    "Liesbeeck": [
        { stop: "UC North", times: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"] },
        { stop: "Tugwell", times: ["08:35", "09:35", "10:35", "11:35", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05"] },
        { stop: "Liesbeeck", times: ["08:40", "09:40", "10:40", "11:40", "12:40", "13:10", "13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10"] },
    ],


    "Obz Square": [
        { stop: "UC North", times: ["08:45", "09:45", "10:45", "11:45", "12:45","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "UC South", times: ["08:50", "09:50", "10:50", "11:50", "12:50","13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
        { stop: "Tugwell", times: ["08:55", "09:55", "10:55", "11:55", "12:55","13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10", "17:40"] },
        { stop: "Obz Square", times: ["09:00", "10:00", "11:00", "12:00", "13:00","13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:15", "17:45"] },
        { stop: "FHS", times: ["09:05", "10:05", "11:05", "12:05", "13:05","13:30", "14:55", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:50"] },
    ],
    "Rochester": [
        { stop: "UC North", times: ["09:00", "10:00", "11:00", "12:00", "13:00","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "Rochester", times: ["09:05", "10:05", "11:05", "12:05", "13:05","13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
    ],
    "Sandown": [
        { stop: "UC South", times: ["09:00", "10:00", "11:00", "12:00", "13:00","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "Sandown", times: ["09:05", "10:05", "11:05", "12:05", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
        { stop: "Tugwell", times: ["09:10", "10:10", "11:10", "12:10", "13:10","13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10", "17:40"] },
    ],
    "Tugwell": [
        { stop: "Tugwell", times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"] },
        { stop: "UC North", times: ["09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "04:35", "17:05", "17:35", "18:05"] },
    ],

    "Res Loop(Anti-Clockwise)": [
        { stop: "UC North", times: ["20:15" ,"21:00", "22:00", "23:00", "00:00", "01:00"] },
        { stop: "UC South", times: ["20:20" ,"21:05", "22:05", "23:05", "00:05", "01:05"] },
        { stop: "Kramer", times: ["20:25" ,"21:10", "22:10", "23:10", "00:10", "01:10"] },
        { stop: "Tugwell", times: ["20:30" ,"21:15", "22:10", "23:15", "00:15", "01:15"] },
        { stop: "Groote Schuur Res", times: ["21:20" ,"21:50", "23:20", "00:20", "01:20"] },
        { stop: "Forest Hill", times: ["20:40" ,"21:25", "22:20", "23:25", "00:25", "01:25"] },
        { stop: "Liesbeeck", times: ["20:45" ,"22:30", "22:25", "23:30", "00:30", "01:30"] },
        { stop: "Harold Cressy", times: ["20:50" ,"22:35", "22:30", "23:35", "00:35", "01:35"] },
        { stop: "Obz Square", times: ["20:55" ,"22:40", "22:35", "23:40", "00:40", "01:40"] },
        { stop: "Rochester", times: ["21:00" ,"22:45", "22:40", "23:45", "00:45", "01:45"] },
        { stop: "FHS", times: ["21:05" ,"22:50", "22:45", "23:50", "00:50", "01:50"] },
        { stop: "Clarinus", times: ["21:15", ,"22:55", "22:50", "23:55", "00:55", "01:55"] },

    ],
    "Res Loop(Clockwise)": [
        { stop: "UC North", times: ["21:00", "22:00", "23:00", "00:00", "01:00"] },
        { stop: "UC South", times: ["21:05", "22:05", "23:05", "00:05", "01:05"] },
        { stop: "Kramer", times: ["21:10", "22:10", "23:10", "00:10", "01:10"] },
        { stop: "Clarinus", times: ["21:15", "22:15", "23:15", "00:10", "01:15"] },
        { stop: "FHS", times: ["21:20", "22:20", "23:20", "00:00", "01:20"] },
        { stop: "Obz Square", times: ["21:25", "22:25", "23:25", "00:05", "01:25"] },
        { stop: "Rochester", times: ["21:30", "22:30", "23:30", "00:10", "01:30"] },
        { stop: "Harold Cressy", times: ["21:35", "22:35", "23:35", "00:15", "01:35"] },
        { stop: "Liesbeeck", times: ["21:40", "22:40", "23:40", "00:20", "01:40"] },
        { stop: "Forest Hill", times: ["21:45", "22:45", "23:45", "00:25", "01:45"] },
        { stop: "Groote Schuur Res", times: ["21:50", "22:50", "23:50", "00:30", "01:50"] },
        { stop: "Tugwell", times: ["21:55", "22:55", "23:55", "00:35", "01:55"] },
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

        // Add stops to header row 
        selectedSchedule.forEach(stop => {
            const stopCell = document.createElement("th");
            stopCell.textContent = stop.stop;
            headerRow.appendChild(stopCell);
        });

        scheduleTable.appendChild(headerRow);

        // Determine the number of times (assuming all stops have the same number of times)
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
// Function to find and display buses that depart from the current location and arrive at the destination within the next 30 minutes
function findBuses() {
    const currentLocation = document.getElementById("currentLocation").value;
    const destination = document.getElementById("destination").value;
    const busResults = document.getElementById("busResults");
    busResults.innerHTML = ""; // Clear previous results

    if (currentLocation && destination) {
        const now = new Date(); // Get current time
        const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes(); // Current time in minutes

        // Find buses for the selected route
        const resultBuses = [];

        for (const route in schedules) {
            const stops = schedules[route];

            // Find the stop for the current location and the destination
            const currentStop = stops.find(stop => stop.stop === currentLocation);
            const destinationStop = stops.find(stop => stop.stop === destination);

            if (currentStop && destinationStop) {
                // Both current location and destination are on this route
                for (let i = 0; i < currentStop.times.length; i++) {
                    const departureTimeAtCurrentLocation = currentStop.times[i]; // Departure from current location
                    const arrivalTimeAtDestination = destinationStop.times[i]; // Arrival at destination

                    const departureTimeInMinutes = convertTimeToMinutes(departureTimeAtCurrentLocation);
                    const arrivalTimeInMinutes = convertTimeToMinutes(arrivalTimeAtDestination);

                    // Check if this bus departs within the next 30 minutes from the current location
                    if (departureTimeInMinutes > currentTimeInMinutes && departureTimeInMinutes <= currentTimeInMinutes + 30) {
                        resultBuses.push({
                            route: route,
                            departureTime: departureTimeAtCurrentLocation,
                            arrivalTime: arrivalTimeAtDestination,
                            destination: destination
                        });
                    }
                }
            }
        }

        // Display buses departing from the current location within the next 30 minutes and their arrival time at the destination
        if (resultBuses.length > 0) {
            const resultsList = document.createElement("ul");
            resultBuses.forEach(bus => {
                const listItem = document.createElement("li");
                listItem.textContent = `Route: ${bus.route}, Departure Time from ${currentLocation}: ${bus.departureTime}, Arrival Time at ${bus.destination}: ${bus.arrivalTime}`;
                resultsList.appendChild(listItem);
            });
            busResults.appendChild(resultsList);
        } else {
            busResults.textContent = "No buses found departing from your current location within the next 30 minutes.";
        }
    } else {
        busResults.textContent = "Please select both a current location and a destination.";
    }
}

// Helper function to convert time (HH:MM) to minutes since midnight
function convertTimeToMinutes(time) {
    const [hour, minute] = time.split(':').map(Number); // Split time into hours and minutes
    return hour * 60 + minute; // Convert time to minutes
}

function showBuses(){
    window.location.href = "schedule.html";
}// Define bus schedules for each route with stops
const schedules = {
    "Bremner-Kramer": [
        { stop: "Tugwell", times: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "17:40"] },
        { stop: "Bremner", times: ["08:05", "09:05", "10:05", "11:05", "12:05", "13:05", "14:05", "15:05", "16:05", "17:05", "17:45"] },
        { stop: "Kramer", times: ["08:10", "09:10", "10:10", "11:10", "12:10", "13:10", "14:10", "15:10", "16:10", "17:10", "17:50"] },
        { stop: "Edcare", times: ["08:15", "09:15", "10:15", "11:15", "12:15", "13:15", "14:15", "15:15", "16:15", "17:15", "17:55"] },
        { stop: "UC North", times: ["08:20", "09:20", "10:20", "11:20", "12:20", "13:20", "14:20", "15:20", "16:20", "17:20", "18:00"] }
    ],
    "Claremont": [
        { stop: "UC South", times: ["08:15", "08:45", "09:15", "09:45", "10:15", "10:45", "11:15", "11:45", "12:15", "12:45", "13:15", "13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:05"] },
        { stop: "Claremont", times: ["08:20", "08:50", "09:20", "09:50", "10:20", "10:50", "11:20", "11:50", "12:20", "12:50", "13:20", "13:50", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:15"] },
        { stop: "Tugwell", times: ["08:25", "08:55", "09:25", "09:55", "10:25", "10:55", "11:25", "11:55", "12:25", "12:55", "13:25", "13:55", "14:25", "14:55", "15:25", "15:55", "16:25", "16:55", "17:25"] },
    ],
    "Forest Hill": [
        { stop: "UC North", times: ["08:45", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:00", "17:15", "17:40", "18:10", "18:35"] },
        { stop: "Tugwell", times: ["08:50", "09:20", "09:50", "10:20", "10:50", "11:20", "11:50", "12:20", "12:50", "13:20", "13:50", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:05", "17:35", "18:05", "18:40"] },
        { stop: "Mowbray", times: ["08:55", "09:25", "09:55", "10:25", "10:55", "11:25", "11:55", "12:25", "12:55", "13:25", "13:55", "14:25", "14:55", "15:25", "15:55", "16:25", "16:55", "17:10", "17:40", "18:10", "18:45"] },
        { stop: "Forest Hill", times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "18:55"] },
    ],

    "Clarinus": [
        { stop: "UC North", times: ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "Clarinus", times: ["08:35", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
    ],
    "Forest Hill": [
        { stop: "Tugwell", times: ["08:45", "09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:00", "17:15", "17:40", "18:10", "18:35"] },
        { stop: "Mowbray", times: ["08:50", "09:20", "09:50", "10:20", "10:50", "11:20", "11:50", "12:20", "12:50", "13:20", "13:50", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:05", "17:35", "18:05", "18:40"] },
        { stop: "Forest Hill", times: ["08:55", "09:25", "09:55", "10:25", "10:55", "11:25", "11:55", "12:25", "12:55", "13:25", "13:55", "14:25", "14:55", "15:25", "15:55", "16:25", "16:55", "17:10", "17:40", "18:10", "18:45"] },
        { stop: "UC North", times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "18:55"] },
    ],


    "Hiddingh": [
        { stop: "UC North", times: ["08:45", "09:45", "10:45", "11:45", "12:45", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"] },
        { stop: "Tugwell", times: ["08:50", "09:50", "10:50", "11:50", "12:50", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05"] },
        { stop: "Hiddingh", times: ["08:55", "09:55", "10:55", "11:55", "12:55", "13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10"] },
    ],
    "Liesbeeck": [
        { stop: "UC North", times: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"] },
        { stop: "Tugwell", times: ["08:35", "09:35", "10:35", "11:35", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05"] },
        { stop: "Liesbeeck", times: ["08:40", "09:40", "10:40", "11:40", "12:40", "13:10", "13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10"] },
    ],


    "Obz Square": [
        { stop: "UC North", times: ["08:45", "09:45", "10:45", "11:45", "12:45","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "UC South", times: ["08:50", "09:50", "10:50", "11:50", "12:50","13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
        { stop: "Tugwell", times: ["08:55", "09:55", "10:55", "11:55", "12:55","13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10", "17:40"] },
        { stop: "Obz Square", times: ["09:00", "10:00", "11:00", "12:00", "13:00","13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:15", "17:45"] },
        { stop: "FHS", times: ["09:05", "10:05", "11:05", "12:05", "13:05","13:30", "14:55", "14:20", "14:50", "15:20", "15:50", "16:20", "16:50", "17:50"] },
    ],
    "Rochester": [
        { stop: "UC North", times: ["09:00", "10:00", "11:00", "12:00", "13:00","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "Rochester", times: ["09:05", "10:05", "11:05", "12:05", "13:05","13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
    ],
    "Sandown": [
        { stop: "UC South", times: ["09:00", "10:00", "11:00", "12:00", "13:00","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
        { stop: "Sandown", times: ["09:05", "10:05", "11:05", "12:05", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "16:35", "17:05", "17:35"] },
        { stop: "Tugwell", times: ["09:10", "10:10", "11:10", "12:10", "13:10","13:40", "14:10", "14:40", "15:10", "15:40", "16:10", "16:40", "17:10", "17:40"] },
    ],
    "Tugwell": [
        { stop: "Tugwell", times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"] },
        { stop: "UC North", times: ["09:05", "09:35", "10:05", "10:35", "11:05", "11:35", "12:05", "12:35", "13:05", "13:35", "14:05", "14:35", "15:05", "15:35", "16:05", "04:35", "17:05", "17:35", "18:05"] },
    ],

    "Res Loop(Anti-Clockwise)": [
        { stop: "UC North", times: ["20:15" ,"21:00", "22:00", "23:00", "00:00", "01:00"] },
        { stop: "UC South", times: ["20:20" ,"21:05", "22:05", "23:05", "00:05", "01:05"] },
        { stop: "Kramer", times: ["20:25" ,"21:10", "22:10", "23:10", "00:10", "01:10"] },
        { stop: "Tugwell", times: ["20:30" ,"21:15", "22:10", "23:15", "00:15", "01:15"] },
        { stop: "Groote Schuur Res", times: ["21:20" ,"21:50", "23:20", "00:20", "01:20"] },
        { stop: "Forest Hill", times: ["20:40" ,"21:25", "22:20", "23:25", "00:25", "01:25"] },
        { stop: "Liesbeeck", times: ["20:45" ,"22:30", "22:25", "23:30", "00:30", "01:30"] },
        { stop: "Harold Cressy", times: ["20:50" ,"22:35", "22:30", "23:35", "00:35", "01:35"] },
        { stop: "Obz Square", times: ["20:55" ,"22:40", "22:35", "23:40", "00:40", "01:40"] },
        { stop: "Rochester", times: ["21:00" ,"22:45", "22:40", "23:45", "00:45", "01:45"] },
        { stop: "FHS", times: ["21:05" ,"22:50", "22:45", "23:50", "00:50", "01:50"] },
        { stop: "Clarinus", times: ["21:15", ,"22:55", "22:50", "23:55", "00:55", "01:55"] },

    ],
    "Res Loop(Clockwise)": [
        { stop: "UC North", times: ["21:00", "22:00", "23:00", "00:00", "01:00"] },
        { stop: "UC South", times: ["21:05", "22:05", "23:05", "00:05", "01:05"] },
        { stop: "Kramer", times: ["21:10", "22:10", "23:10", "00:10", "01:10"] },
        { stop: "Clarinus", times: ["21:15", "22:15", "23:15", "00:10", "01:15"] },
        { stop: "FHS", times: ["21:20", "22:20", "23:20", "00:00", "01:20"] },
        { stop: "Obz Square", times: ["21:25", "22:25", "23:25", "00:05", "01:25"] },
        { stop: "Rochester", times: ["21:30", "22:30", "23:30", "00:10", "01:30"] },
        { stop: "Harold Cressy", times: ["21:35", "22:35", "23:35", "00:15", "01:35"] },
        { stop: "Liesbeeck", times: ["21:40", "22:40", "23:40", "00:20", "01:40"] },
        { stop: "Forest Hill", times: ["21:45", "22:45", "23:45", "00:25", "01:45"] },
        { stop: "Groote Schuur Res", times: ["21:50", "22:50", "23:50", "00:30", "01:50"] },
        { stop: "Tugwell", times: ["21:55", "22:55", "23:55", "00:35", "01:55"] },
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

        // Add stops to header row 
        selectedSchedule.forEach(stop => {
            const stopCell = document.createElement("th");
            stopCell.textContent = stop.stop;
            headerRow.appendChild(stopCell);
        });

        scheduleTable.appendChild(headerRow);

        // Determine the number of times (assuming all stops have the same number of times)
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
// Function to find and display buses that depart from the current location and arrive at the destination within the next 30 minutes
function findBuses() {
    const currentLocation = document.getElementById("currentLocation").value;
    const destination = document.getElementById("destination").value;
    const busResults = document.getElementById("busResults");
    busResults.innerHTML = ""; // Clear previous results

    if (currentLocation && destination) {
        const now = new Date(); // Get current time
        const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes(); // Current time in minutes

        // Find buses for the selected route
        const resultBuses = [];

        for (const route in schedules) {
            const stops = schedules[route];

            // Find the stop for the current location and the destination
            const currentStop = stops.find(stop => stop.stop === currentLocation);
            const destinationStop = stops.find(stop => stop.stop === destination);

            if (currentStop && destinationStop) {
                // Both current location and destination are on this route
                for (let i = 0; i < currentStop.times.length; i++) {
                    const departureTimeAtCurrentLocation = currentStop.times[i]; // Departure from current location
                    const arrivalTimeAtDestination = destinationStop.times[i]; // Arrival at destination

                    const departureTimeInMinutes = convertTimeToMinutes(departureTimeAtCurrentLocation);
                    const arrivalTimeInMinutes = convertTimeToMinutes(arrivalTimeAtDestination);

                    // Check if this bus departs within the next 30 minutes from the current location
                    if (departureTimeInMinutes > currentTimeInMinutes && departureTimeInMinutes <= currentTimeInMinutes + 30) {
                        resultBuses.push({
                            route: route,
                            departureTime: departureTimeAtCurrentLocation,
                            arrivalTime: arrivalTimeAtDestination,
                            destination: destination
                        });
                    }
                }
            }
        }

        // Display buses departing from the current location within the next 30 minutes and their arrival time at the destination
        if (resultBuses.length > 0) {
            const resultsList = document.createElement("ul");
            resultBuses.forEach(bus => {
                const listItem = document.createElement("li");
                listItem.textContent = `Route: ${bus.route}, Departure Time from ${currentLocation}: ${bus.departureTime}, Arrival Time at ${bus.destination}: ${bus.arrivalTime}`;
                resultsList.appendChild(listItem);
            });
            busResults.appendChild(resultsList);
        } else {
            busResults.textContent = "No buses found departing from your current location within the next 30 minutes.";
        }
    } else {
        busResults.textContent = "Please select both a current location and a destination.";
    }
}

// Helper function to convert time (HH:MM) to minutes since midnight
function convertTimeToMinutes(time) {
    const [hour, minute] = time.split(':').map(Number); // Split time into hours and minutes
    return hour * 60 + minute; // Convert time to minutes
}

function showBuses(){
    window.location.href = "schedule.html";
}
