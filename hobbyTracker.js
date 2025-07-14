// This array holds a log of hobby activities, with each object representing one session.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

/**
 * Calculates the total time spent on all hobbies.
 * @param {Array<Object>} log - The array of hobby session objects.
 * @returns {number} The total sum of minutes from all sessions.
 */
function totalTime(log) {
  // The reduce method iterates over the array to accumulate a single value.
  // It starts with an initial value of 0 (the second argument).
  return log.reduce((sum, session) => sum + session.minutes, 0); // For each session, its 'minutes' are added to the running total 'sum'.
}

/**
 * Extracts a list of unique hobby names from the log.
 * @param {Array<Object>} log - The array of hobby session objects.
 * @returns {Array<string>} An array containing each unique hobby name once.
 */
function uniqueHobbies(log) {
  // The map method creates a new array containing only the 'hobby' string from each object.
  const names = log.map(entry => entry.hobby);
  // A new Set is created from the 'names' array, which automatically removes duplicate values.
  // The spread syntax (...) converts the Set back into an array.
  return [...new Set(names)];
}

/**
 * Filters the log to find sessions longer than a specified duration.
 * @param {Array<Object>} log - The array of hobby session objects.
 * @param {number} minMinutes - The minimum number of minutes for a session to be included.
 * @returns {Array<Object>} An array of session objects that are longer than minMinutes.
 */
function longSessions(log, minMinutes) {
  // The filter method creates a new array with all elements that pass the test implemented by the provided function.
  // It returns entries where the 'minutes' property is greater than the 'minMinutes' argument.
  return log.filter(entry => entry.minutes > minMinutes);
}

/**
 * Counts how many sessions match a specific mood.
 * @param {Array<Object>} log - The array of hobby session objects.
 * @param {string} moodType - The mood to count (e.g., "relaxed", "focused").
 * @returns {number} The number of sessions that have the specified mood.
 */
function countMood(log, moodType) {
  // First, we filter the log to get an array of sessions matching the moodType.
  const moodSessions = log.filter(entry => entry.mood === moodType);
  // Then, we return the length of that filtered array, which gives us the count.
  return moodSessions.length;
}

// --- SUGGESTION FOR IMPROVEMENT ---
// The code is well-structured, but we could add a new, reusable function
// to calculate statistics for a specific hobby. For example, a function that
// returns the total time and average session length for a given hobby.
/*
function getHobbyStats(log, hobbyName) {
  const hobbySessions = log.filter(entry => entry.hobby === hobbyName);
  const totalMinutes = hobbySessions.reduce((sum, session) => sum + session.minutes, 0);
  const averageMinutes = totalMinutes / hobbySessions.length || 0;
  return {
    hobby: hobbyName,
    totalMinutes: totalMinutes,
    averageMinutes: Math.round(averageMinutes)
  };
}
console.log("Stats for drawing:", getHobbyStats(hobbyLog, "drawing"));
*/

// --- CONSOLE LOGS & TESTS ---

// Original tests
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// New test added for the assignment
console.log("Number of focused sessions:", countMood(hobbyLog, "focused"));
