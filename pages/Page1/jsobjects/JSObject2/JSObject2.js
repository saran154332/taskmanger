export default {
	Save_ButtononClick () {
		const isValid = Automation.validateStatusChange(
			Table2.selectedRow.status,
			Edit_StatusDropdown.selectedOptionValue
		);

		if (isValid) {
			updateTask.run();  // your existing query
		} else {
			showAlert("Invalid status change! Follow: Todo → In Progress → Review → Done", "error");
		}

	}
}