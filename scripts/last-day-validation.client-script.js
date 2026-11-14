// Catalog Client Script: Last day cannot have passed
// Catalog item: EHR Access Request | Type: onChange | Variable: last_day | UI Type: All
//
// Clears the last day field and shows an error if someone picks a date
// before today. Today itself is allowed.

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }

    g_form.hideFieldMsg('last_day', true);

    // newValue comes in as yyyy-MM-dd (the instance's default date format)
    var parts = newValue.split('-');
    var picked = new Date(parts[0], parts[1] - 1, parts[2]);

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    if (picked < today) {
        g_form.clearValue('last_day');
        g_form.showFieldMsg('last_day', "Last day can't be in the past.", 'error');
    }
}
