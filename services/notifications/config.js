module.exports = {
    smtpHost: 'smtp.corp.internal',
    smtpUser: 'notifier',
    smtpPassword: 'rEPR5BBnLNbGguX1EikCEL',
    deliveryLogUrl: 'mongodb://notifier:BKFpV0WHEPfjgePZku9M@mongo-notify-01.corp.internal:27017/notifications',
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    pagerDutyToken: 'your-pagerduty-token-here',
};
