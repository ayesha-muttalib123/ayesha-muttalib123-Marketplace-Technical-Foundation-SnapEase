// function confirmSave(context) {
//     try {
//         // Get form context
//         var formContext = context.getFormContext();

//         if (!formContext) {
//             console.error("Form context is undefined.");
//             return; // Exit function if formContext is not available
//         }

//         var isFormComplete = true;

//         // Fields to validate
//         var fieldsToCheck = [
//             "am_candidate",         // Replace with the logical name of the field
//             "am_interviewoutcome",  // Replace with the logical name of the field
//             "am_interviewstarttime",// Replace with the logical name of the field
//             "am_role"               // Replace with the logical name of the field
//         ];

//         // Validate fields
//         fieldsToCheck.forEach(function (field) {
//             var attribute = formContext.getAttribute(field);
//             if (!attribute || !attribute.getValue()) {
//                 isFormComplete = false;
//             }
//         });

//         // If form is complete, show confirmation dialog
//         if (isFormComplete) {
//             var confirmOptions = {
//                 title: "Confirmation",
//                 text: "Are you sure you want to save this record?",
//                 confirmButtonLabel: "Yes",
//                 cancelButtonLabel: "No"
//             };

//             Xrm.Navigation.openConfirmDialog(confirmOptions).then(
//                 function (result) {
//                     if (!result.confirmed) {
//                         // Cancel save
//                         var eventArgs = context.getEventArgs();
//                         if (eventArgs) {
//                             eventArgs.preventDefault();
//                         }
//                     }
//                 },
//                 function (error) {
//                     console.error("Error showing confirmation dialog:", error.message);
//                 }
//             );
//         }
//     } catch (error) {
//         console.error("An error occurred in confirmSave:", error.message);
//     }
// }

function confirmSave(context) {
    try {
        // Get form context
        var formContext = context.getFormContext();

        if (!formContext) {
            console.error("Form context is undefined.");
            alert("An error occurred: Form context is missing.");
            return; // Exit function if formContext is not available
        }

        var isFormComplete = true;

        // Fields to validate
        var fieldsToCheck = [
            "am_candidate",         // Replace with the logical name of the field
            "am_interviewoutcome",  // Replace with the logical name of the field
            "am_interviewstarttime",// Replace with the logical name of the field
            "am_role"               // Replace with the logical name of the field
        ];

        // Validate fields
        fieldsToCheck.forEach(function (field) {
            var attribute = formContext.getAttribute(field);
            if (!attribute || !attribute.getValue()) {
                isFormComplete = false;
            }
        });

        // If form is complete, show confirmation dialog
        if (isFormComplete) {
            var confirmOptions = {
                title: "Confirmation",
                text: "Are you sure you want to save this record?",
                confirmButtonLabel: "Yes",
                cancelButtonLabel: "No"
            };

            Xrm.Navigation.openConfirmDialog(confirmOptions).then(
                function (result) {
                    if (!result.confirmed) {
                        // Cancel save
                        var eventArgs = context.getEventArgs();
                        if (eventArgs) {
                            eventArgs.preventDefault();
                        }
                    }
                },
                function (error) {
                    console.error("Error showing confirmation dialog:", error.message);
                    alert("An error occurred while showing the confirmation dialog. Please try again.");
                }
            );
        } else {
            alert("Please fill in all required fields before saving.");
        }

    } catch (error) {
        console.error("An error occurred:", error); // Logs the full error for debugging
      
        if (error.message.includes("User does not have a Teams license")) {
          alert("You need a Microsoft Teams license to access this feature.");
        } else {
          alert("An unexpected error occurred: " + error.message);
        }
      }
}
