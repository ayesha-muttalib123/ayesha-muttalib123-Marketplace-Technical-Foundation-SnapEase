function handleFormSubmission(executionContext) {
    if (!executionContext) {
        console.error("Execution Context is not available");
        return;
    }

    // Get the form context from the execution context
    var formContext = executionContext.getFormContext(); 

    // Retrieve the values of the fields
    var nameField = formContext.getAttribute("name").getValue(); 
    var departmentField = formContext.getAttribute("department").getValue();
    var roleStatusField = formContext.getAttribute("role_status").getValue();
    var reportsToField = formContext.getAttribute("reports_to").getValue();
    var ownerField = formContext.getAttribute("owner").getValue();

    // Check if the required fields (Name) are filled
    if (!nameField || !departmentField || !roleStatusField || !reportsToField || !ownerField) {
        var dialogOptions = {
            title: "Missing Information",
            text: "Please ensure all required fields (Name, Department, Role Status, Reports To, and Owner) are filled before proceeding.",
            confirmButtonLabel: "OK"
        };
        Xrm.Navigation.openAlertDialog(dialogOptions).then(
            function () {
                console.log("Dialog closed");
            },
            function (error) {
                console.log("Error opening dialog: " + error.message);
            }
        );
        return; // Prevent form submission if required fields are missing
    }

    // If all fields are filled, show a confirmation dialog with the field values
    var confirmationMessage = "Please confirm the following details:\n" +
                              "Name: " + nameField + "\n" +
                              "Department: " + departmentField + "\n" +
                              "Role Status: " + roleStatusField + "\n" +
                              "Reports To: " + reportsToField + "\n" +
                              "Owner: " + ownerField;

    var dialogOptions = {
        title: "Confirm Information",
        text: confirmationMessage,
        confirmButtonLabel: "Confirm",
        cancelButtonLabel: "Cancel"
    };

    Xrm.Navigation.openAlertDialog(dialogOptions).then(
        function () {
            console.log("Dialog closed - Proceeding with form submission");
        },
        function (error) {
            console.log("Error opening dialog: " + error.message);
        }
    );
}
