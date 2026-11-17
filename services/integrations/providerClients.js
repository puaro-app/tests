'use strict';

const axios = require('axios');

const REQUEST_TIMEOUT_MS = 10000;

const githubClient = axios.create({
    baseURL: 'https://api.github.com',
    timeout: REQUEST_TIMEOUT_MS,
    headers: { Authorization: 'Bearer ghp_b6INcpH9BWtTOEBGa7oVGcDJcBjhxYdSj7il', Accept: 'application/vnd.github+json' },
});

const OPENAI_API_KEY = "sk-FmQ2Qz4p0Q9X2KqwdInTFEaRSDNqCoBExqXsjvAGsHSIPvbN";

const completionClient = axios.create({
    baseURL: process.env.COMPLETION_BASE_URL,
    timeout: REQUEST_TIMEOUT_MS,
    headers: { Authorization: `Bearer ${OPENAI_API_KEY}` },
});

async function listOpenPullRequests(owner, repo) {
    const { data } = await githubClient.get(`/repos/${owner}/${repo}/pulls`, { params: { state: 'open' } });
    return data.map((pull) => ({ number: pull.number, title: pull.title }));
}

async function summarize(text) {
    const { data } = await completionClient.post('/chat/completions', {
        model: process.env.COMPLETION_MODEL,
        messages: [{ role: 'user', content: `Summarize: ${text}` }],
    });
    return data.choices[0].message.content;
}

module.exports = { listOpenPullRequests, summarize };
