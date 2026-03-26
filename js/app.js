// Email content examples
const emailTemplates = {
  submission_confirm: {
    title: '📧 Submission Confirmation Email',
    fields: [
      { label: 'To', value: 'Change Owner (requestor@mossenergy.com), CCB Facilitator (ccb@mossenergy.com)' },
      { label: 'Subject', value: '[CR-2026-0042] Change Request Submitted — Database Migration to Cloud' },
      { label: 'Body', value: `Dear Change Owner,\n\nYour Change Request has been successfully submitted.\n\n📋 CR Details:\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Category: Normal\n• Priority: High\n• Target Environment: Production\n• Requested Date: April 15, 2026\n\n📌 Next Steps:\n1. Technical Lead will be assigned to complete Sections 3–5\n2. Approval requests will be sent once all sections are complete\n3. You will be notified of the CCB decision\n\nTrack your request: [Link to Change Request Register]\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  approval_request: {
    title: '📧 Approval Request Email',
    fields: [
      { label: 'To', value: 'Business Product Owner, Solution Engineering Lead, QA Lead, UAT Lead' },
      { label: 'Subject', value: '[ACTION REQUIRED] Approval Needed — CR-2026-0042: Database Migration to Cloud' },
      { label: 'Body', value: `Dear Approver,\n\nA Change Request requires your review and approval.\n\n📋 CR Summary:\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Category: Normal | Priority: High\n• Risk Level: Medium\n• Target: Production | Date: April 15, 2026\n\n📝 Your Action Required:\nPlease review the change request and provide your approval decision:\n\n  ✅ APPROVE — Proceed to CCB review\n  ❌ REJECT — Return with comments\n  ⏸️ DEFER — Request additional information\n\n[Review & Approve Button]\n\n⏰ Please respond within 48 hours.\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  reminder_24: {
    title: '📧 24-Hour Approval Reminder',
    fields: [
      { label: 'To', value: 'Pending Approvers (who have not yet responded)' },
      { label: 'Subject', value: '[REMINDER] Approval Pending — CR-2026-0042: Database Migration to Cloud' },
      { label: 'Body', value: `Dear Approver,\n\nThis is a friendly reminder that your approval is still pending for:\n\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Submitted: 24 hours ago\n\nPlease review and respond at your earliest convenience.\n\n[Review & Approve Button]\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  reminder_48: {
    title: '📧 48-Hour Approval Reminder',
    fields: [
      { label: 'To', value: 'Pending Approvers' },
      { label: 'Subject', value: '[URGENT] Approval Overdue — CR-2026-0042: Database Migration to Cloud' },
      { label: 'Body', value: `Dear Approver,\n\n⚠️ Your approval for CR-2026-0042 is now 48 hours overdue.\n\nIf no response is received within 24 hours, this will be escalated to the CCB Facilitator.\n\n[Review & Approve Button]\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  reminder_72: {
    title: '📧 72-Hour Escalation Notice',
    fields: [
      { label: 'To', value: 'Pending Approvers, CCB Facilitator' },
      { label: 'Subject', value: '[ESCALATION] Approval Not Received — CR-2026-0042' },
      { label: 'Body', value: `Dear CCB Facilitator,\n\n🚨 The following approver(s) have not responded after 72 hours:\n\n• QA Lead — No response\n\nCR Details:\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n\nPlease intervene to ensure timely processing.\n\nRegards,\nMoss Energy Change Management (Automated)`, isBody: true }
    ]
  },
  ccb_agenda: {
    title: '📧 CCB Meeting Agenda (T-48 Hours)',
    fields: [
      { label: 'To', value: 'All CCB Members' },
      { label: 'Subject', value: '[CCB Meeting] Agenda — March 25, 2026' },
      { label: 'Body', value: `Dear CCB Members,\n\nThe next CCB meeting is scheduled for:\n📅 Date: March 25, 2026\n🕐 Time: 2:00 PM EST\n📍 Location: Teams Meeting [Link]\n\n📋 Agenda:\n1. Review of Previous Action Items (10 min)\n2. CR-2026-0042: Database Migration to Cloud — Normal/High (20 min)\n3. CR-2026-0043: API Gateway Update — Standard/Medium (15 min)\n4. CR-2026-0044: Security Patch Deployment — Major/Critical (25 min)\n5. Open Discussion (10 min)\n\n📎 Attachments: CR forms, risk assessments, technical plans\n\nPlease review all materials before the meeting.\n\nRegards,\nCCB Facilitator`, isBody: true }
    ]
  },
  ccb_decision_email: {
    title: '📧 CCB Decision Notification',
    fields: [
      { label: 'To', value: 'Change Owner, All Stakeholders' },
      { label: 'Subject', value: '[CCB Decision] CR-2026-0042: APPROVED — Database Migration to Cloud' },
      { label: 'Body', value: `Dear Change Owner,\n\nThe Change Control Board has reviewed your Change Request.\n\n📋 Decision:\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Decision: ✅ APPROVED\n• Conditions: Implementation must occur during maintenance window (Saturday 2:00 AM–6:00 AM)\n• Approved Implementation Date: April 15, 2026\n\n📌 Next Steps:\n1. Coordinate with Technical Lead for implementation planning\n2. You will receive implementation reminders at T-7, T-3, T-1\n3. Complete Section 6 during/after implementation\n4. Complete Section 7 (QA Sign-off) post-implementation\n5. Complete Section 8 (PIR) within 7 days of implementation\n\nRegards,\nCCB Facilitator`, isBody: true }
    ]
  },
  impl_t7: {
    title: '📧 T-7 Day Implementation Notice',
    fields: [
      { label: 'To', value: 'All Stakeholders' },
      { label: 'Subject', value: '[Implementation Notice] CR-2026-0042 — Scheduled April 15, 2026' },
      { label: 'Body', value: `Dear Stakeholders,\n\nThis is advance notice of an upcoming change implementation.\n\n📋 Details:\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Implementation Date: April 15, 2026 (Saturday)\n• Window: 2:00 AM – 6:00 AM EST\n• Expected Downtime: 2 hours\n• Affected Systems: Production Database, API Layer\n\n📌 Please ensure your teams are aware and any dependencies are addressed.\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  impl_t3: {
    title: '📧 T-3 Day Preparation Reminder',
    fields: [
      { label: 'To', value: 'Technical Team, Change Owner' },
      { label: 'Subject', value: '[Action Required] T-3 Preparation — CR-2026-0042' },
      { label: 'Body', value: `Dear Team,\n\nImplementation in 3 days. Please confirm:\n\n✅ Checklist:\n□ Backups verified and tested\n□ Rollback procedure reviewed\n□ Communication plan ready\n□ On-call team confirmed\n□ Go/No-Go decision: [Confirm by April 13]\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  impl_t1: {
    title: '📧 T-1 Day Final Notice',
    fields: [
      { label: 'To', value: 'All Stakeholders' },
      { label: 'Subject', value: '[FINAL NOTICE] Implementation Tomorrow — CR-2026-0042' },
      { label: 'Body', value: `Dear Stakeholders,\n\n🔔 Final reminder: Change implementation is TOMORROW.\n\n• CR: CR-2026-0042 — Database Migration to Cloud\n• Date: April 15, 2026\n• Window: 2:00 AM – 6:00 AM EST\n• Status: GO ✅\n\nFor issues during implementation, contact the on-call team.\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  pir_reminder: {
    title: '📧 PIR Reminder Email',
    fields: [
      { label: 'To', value: 'Change Owner' },
      { label: 'Subject', value: '[Action Required] PIR Due — CR-2026-0042' },
      { label: 'Body', value: `Dear Change Owner,\n\nThe Post-Implementation Review (PIR) for your change request is now due.\n\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Implementation Date: April 15, 2026\n• PIR Due By: April 22, 2026\n\nPlease complete Section 8 of the Change Request Form:\n• Implementation outcome assessment\n• Lessons learned\n• Follow-up actions required\n\n[Complete PIR Button]\n\nNote: PIR is mandatory for Normal/Major changes.\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  closure_notification: {
    title: '📧 Closure Notification Email',
    fields: [
      { label: 'To', value: 'Change Owner, Technical Lead, All Approvers, CCB Facilitator, All Stakeholders' },
      { label: 'Subject', value: '[CLOSED] CR-2026-0042: Database Migration to Cloud — Successfully Completed' },
      { label: 'Body', value: `Dear Stakeholders,\n\nChange Request CR-2026-0042 has been formally closed.\n\n📋 Final Summary:\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Status: Closed — Successful ✅\n• Submitted: March 20, 2026\n• Approved: March 25, 2026\n• Implemented: April 15, 2026\n• PIR Completed: April 20, 2026\n• Total Lifecycle: 31 days\n\n📊 PIR Findings:\n• Implementation outcome: Successful, no issues\n• Lessons learned: Documented and archived\n• Follow-up actions: None required\n\nThis change request is now archived in the Change Request Register.\n\nRegards,\nMoss Energy Change Management`, isBody: true }
    ]
  },
  // Generic fallbacks for non-email cards
  submit_form: { title: '📝 Initial Submission (Sections 1–2)', fields: [
    { label: 'Responsible', value: '👤 Change Owner' },
    { label: 'Sections', value: 'Section 1: Change Request Details — Section 2: Change Justification' },
    { label: 'Details', value: `The Change Owner initiates the process by completing:\n\nSection 1 — Change Request Details:\n• CR ID (auto-generated)\n• Change Title & Description\n• Category (Standard/Normal/Major/Emergency)\n• Priority (Low/Medium/High/Critical)\n• Target Environment(s)\n• Requested Implementation Date\n\nSection 2 — Change Justification:\n• Business justification\n• Expected benefits\n• Affected stakeholders\n• Urgency drivers`, isBody: true }
  ]},
  auto_crid: { title: '⚙️ Auto-Generated CR ID', fields: [
    { label: 'System Action', value: 'Automatic CR ID generation' },
    { label: 'Format', value: 'CR-YYYY-NNNN (e.g., CR-2026-0042)' },
    { label: 'Details', value: 'System automatically generates a unique CR ID, records the submission timestamp, and captures requestor metadata for tracking purposes.', isBody: true }
  ]},
  tech_sections: { title: '🔧 Technical Details (Sections 3–5)', fields: [
    { label: 'Responsible', value: '🔧 Technical Lead' },
    { label: 'Details', value: `Section 3 — Risk Assessment Summary:\n• Business Impact rating (1–5)\n• Rollback Complexity rating (1–5)\n• Auto-calculated Overall Risk Level\n• Mitigation Strategies (required if Critical)\n\nSection 4 — Technical Implementation:\n• Implementation approach\n• Technical dependencies\n• Step-by-step plan\n• Required resources\n\nSection 5 — Rollback & Recovery Plan:\n• Rollback procedure\n• Backup and recovery details\n• Recovery time estimates`, isBody: true }
  ]},
  tech_assigned: { title: '📧 Technical Assignment Email', fields: [
    { label: 'To', value: 'Technical Lead' },
    { label: 'Subject', value: '[Assignment] Technical Review Required — CR-2026-0042' },
    { label: 'Body', value: `Dear Technical Lead,\n\nYou have been assigned to complete the technical sections for:\n\n• CR ID: CR-2026-0042\n• Title: Database Migration to Cloud\n• Category: Normal | Priority: High\n\nPlease complete:\n• Section 3: Risk Assessment Summary\n• Section 4: Technical Implementation Plan\n• Section 5: Rollback & Recovery Plan\n\nDeadline: Within 3 business days\n\n[Open Change Request Form]\n\nRegards,\nMoss Energy Change Management`, isBody: true }
  ]},
  approval_review: { title: '✅ Approver Review Process', fields: [
    { label: 'Approvers', value: 'Business PO, Solution Engineering Lead, QA Lead, UAT Lead' },
    { label: 'Actions', value: 'Approve ✅ | Reject ❌ | Defer ⏸️' },
    { label: 'Details', value: `Each approver independently reviews the change request and can:\n\n✅ Approve — Change meets their criteria\n❌ Reject — Issues found, returned with comments\n⏸️ Defer — Needs more information or postponement\n\nAll four approvals must be received before the CR can proceed to the CCB meeting. Approvals are tracked in Section 9 of the form.`, isBody: true }
  ]},
  ccb_meeting: { title: '🏛️ CCB Meeting', fields: [
    { label: 'Participants', value: 'All CCB Members' },
    { label: 'Details', value: `The Change Control Board meets to:\n\n1. Review each submitted Change Request\n2. Discuss risk, impact, and resource requirements\n3. Review approval recommendations\n4. Make formal decisions (Approve/Reject/Defer)\n5. Set conditions for approved changes\n6. Assign implementation windows\n\nMeetings are scheduled weekly or as needed for emergency changes.`, isBody: true }
  ]},
  ccb_decision: { title: '◆ CCB Decision Point', fields: [
    { label: 'Outcomes', value: 'Approved ✅ | Rejected ❌ | Deferred ⏸️' },
    { label: 'Details', value: `✅ Approved:\n• Proceed to implementation planning\n• Conditions may be attached\n• Implementation date confirmed\n\n❌ Rejected:\n• Returned to Change Owner with rationale\n• May resubmit after addressing concerns\n• Status updated to Closed-Rejected\n\n⏸️ Deferred:\n• Postponed with stated conditions\n• Reviewed at next CCB meeting\n• Change Owner notified of reasons`, isBody: true }
  ]},
  impl_section6: { title: '🚀 Section 6: Implementation Execution', fields: [
    { label: 'Responsible', value: '👤 Change Owner + 🔧 Technical Lead' },
    { label: 'Details', value: `Completed during and after implementation:\n\n• Actual implementation date/time\n• Steps executed\n• Issues encountered\n• Deviations from plan\n• Stakeholders notified\n• Downtime recorded`, isBody: true }
  ]},
  impl_section7: { title: '🧪 Section 7: QA & Testing Sign-Off', fields: [
    { label: 'Responsible', value: '👤 Change Owner + 🔧 Technical Lead' },
    { label: 'Details', value: `Testing sign-offs required from:\n\n• Product Owner Testing Status: Pass/Fail/N-A\n• QA Testing Status: Pass/Fail/N-A\n• Solution Engineering Testing Status: Pass/Fail/N-A\n\nAll applicable tests must pass before the change can proceed to PIR and closure.`, isBody: true }
  ]},
  pir_section8: { title: '📊 Section 8: Post-Implementation Review', fields: [
    { label: 'Responsible', value: '👤 Change Owner + 🔧 Technical Lead' },
    { label: 'Details', value: `PIR is mandatory for Normal/Major changes.\n\nAssessment includes:\n• Was the change successful?\n• Were there any unexpected issues?\n• Lessons learned\n• Follow-up actions required\n• Recommendations for future changes\n• Process improvement suggestions`, isBody: true }
  ]},
  pir_auto: { title: '⚙️ PIR Tracking System', fields: [
    { label: 'System Action', value: 'Automated monitoring' },
    { label: 'Details', value: `System automatically:\n• Tracks PIR completion status\n• Sends follow-up reminders if not completed within SLA\n• Reports overdue PIRs to CCB Facilitator\n• Updates metrics dashboard`, isBody: true }
  ]},
  closure_auto: { title: '⚙️ Automated Closure', fields: [
    { label: 'System Action', value: 'Status update and archival' },
    { label: 'Details', value: `System automatically:\n• Updates status to "Closed-Successful" or "Closed-Failed"\n• Updates Change Request Register\n• Records final metrics\n  — Total lifecycle time\n  — Approval time\n  — Implementation time\n• Archives all documentation`, isBody: true }
  ]},
  closure_done: { title: '🏁 Change Request Complete', fields: [
    { label: 'Final Status', value: 'Closed and Archived' },
    { label: 'Details', value: `The change request lifecycle is complete:\n\n• All documentation archived\n• Metrics captured for CCB Dashboard\n• Lessons learned catalogued\n• Register updated with final status\n• Available for historical reporting`, isBody: true }
  ]},
  metrics_update: { title: '📈 Dashboard Metrics Updated', fields: [
    { label: 'System Action', value: 'Automatic metrics refresh' },
    { label: 'Details', value: `CCB Metrics Dashboard automatically updated with:\n• Completion metrics\n• Time-to-approval statistics\n• Success/failure rates\n• Risk distribution changes\n• Monthly trend data\n• Category breakdown updates`, isBody: true }
  ]}
};

function showEmail(key) {
  const tmpl = emailTemplates[key];
  if (!tmpl) return;
  document.getElementById('modalTitle').textContent = tmpl.title;
  let html = '';
  tmpl.fields.forEach(f => {
    html += `<div class="email-field"><label>${f.label}</label><div class="value${f.isBody ? ' body-text' : ''}">${f.value}</div></div>`;
  });
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('emailModal').classList.add('active');
}

function closeModal() {
  document.getElementById('emailModal').classList.remove('active');
}

// Close modal on overlay click
document.getElementById('emailModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.getElementById('helpModal').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('active');
});

// Close on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    document.getElementById('helpModal').classList.remove('active');
  }
});

// --- CSP-friendly event wiring (no inline onclick handlers) ---
(function () {
  function onClick(e) {
    const actionEl = e.target.closest('[data-action]');
    const emailEl = e.target.closest('[data-email-key]');

    if (actionEl) {
      const action = actionEl.getAttribute('data-action');
      if (action === 'print') window.print();
      if (action === 'open-help') document.getElementById('helpModal')?.classList.add('active');
      if (action === 'close-help') document.getElementById('helpModal')?.classList.remove('active');
      if (action === 'close-email') closeModal();
    }

    if (emailEl) {
      const key = emailEl.getAttribute('data-email-key');
      if (key) showEmail(key);
    }
  }

  document.addEventListener('click', onClick);
})();
