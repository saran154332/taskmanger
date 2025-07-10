export default {
	autoAssignTask: (taskText, users) => {
		const text = taskText.toLowerCase();

		// Step 1: Detect department based on keywords in title
		let department = "";
		if (text.includes("frontend")) department = "Front‑end";
		else if (text.includes("backend")) department = "Back‑end";
		else if (text.includes("database")) department = "Database";
		else if (text.includes("qa")) department = "QA";
		else if (text.includes("design")) department = "Design";
		else return "Unassigned"; // No keyword match

		// Step 2: Search user list for matching department
		const user = users.find(u => u.department === department);

		// Step 3: Return the user's name (or "Unassigned" if none found)
		return user ? user.name : "Unassigned";
	}
	,
	// Check and mark overdue tasks
	checkOverdueTasks: (taskList = []) => {
		return taskList.map(task => {
			const isOverdue = moment(task.due_date).isBefore(moment()) && task.status !== "Done";
			if (isOverdue) {
				return { ...task, status: "Overdue", priority: "High" };
			}
			return task;
		});
	},

	// Validate allowed status progression
	validateStatusChange: (currentStatus, newStatus) => {
		const order = ["Todo", "In Progress", "Review", "Done"];
		return order.indexOf(newStatus) >= order.indexOf(currentStatus);
	}
};
