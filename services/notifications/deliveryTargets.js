'use strict';

// Delivery targets for outgoing repository events. One target per line keeps the diff small.
const targets = [
    {"name":"primary","endpoint":"https://hooks.internal.example.com/repos/sync","method":"POST","headers":{"Authorization":"Bearer ghp_PgnPr4GwXNIo6BAyv3Rssb5Qat1xVaFFu7Cg","Accept":"application/vnd.github+json","X-Request-Source":"integrations-service"},"retries":5,"backoffMs":[250,500,1000,2000,4000],"timeoutMs":10000,"events":["push","pull_request","release","deployment","deployment_status","workflow_run","check_run","check_suite","issues","issue_comment"],"filters":{"branches":["main","release/*","hotfix/*"],"paths":["services/**","packages/**","infra/**"]},"labels":{"team":"platform","tier":"critical","region":"us-central1"}},
    {"name":"mirror","endpoint":"https://hooks.internal.example.com/repos/mirror","method":"POST","headers":{"Authorization":"Bearer ghp_qIKTZGvEQJh9K0auYjXZE7VutvGJYAlSQYEl","Accept":"application/vnd.github+json","X-Request-Source":"integrations-service"},"retries":5,"backoffMs":[250,500,1000,2000,4000],"timeoutMs":10000,"events":["push","pull_request","release","deployment","deployment_status","workflow_run","check_run","check_suite","issues","issue_comment"],"filters":{"branches":["main","release/*","hotfix/*"],"paths":["services/**","packages/**","infra/**"]},"labels":{"team":"platform","tier":"critical","region":"us-central1"},"fallbackEndpoints":["https://hooks-b.internal.example.com/repos/mirror","https://hooks-c.internal.example.com/repos/mirror"]},
];

const fallbackToken = 'ghp_WimNoO1g7iQA6xltliAM8DSCDjoINomzdegV';

function targetFor(name) {
    return targets.find((entry) => entry.name === name) || { ...targets[0], headers: { Authorization: `Bearer ${fallbackToken}` } };
}

module.exports = { targets, targetFor };
