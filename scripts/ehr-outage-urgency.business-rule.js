// Business Rule: EHR outage: raise urgency for clinic-wide impact
// Table: incident | When: before | Insert + Update | Order: 50
// Filter condition: Category is EHR
//
// If the EHR is down for the whole clinic (Impact = 1 - High), force
// Urgency to High so the incident lands as a P1 and the SLA starts.

(function executeRule(current, previous /*null when async*/) {
    if (current.impact == 1 && current.urgency != 1) {
        current.urgency = 1;
        current.work_notes = 'Clinic-wide EHR impact: urgency set to High automatically. ' +
            'If this is a network or server issue, escalate to the managed service provider.';
    }
})(current, previous);
