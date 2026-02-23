const BASE_URL = import.meta.env.VITE_API_URL || 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net';

async function handleResponse(response) {
    const text = await response.text();
    let data;

    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        data = {};
    }

    if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud');
    }

    return data;
}

async function request(url, options = {}) {
    const response = await fetch(url, options);
    return handleResponse(response);
}

export const api = {
    getCandidateByEmail(email) {
        return request(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`);
    },

    getJobs() {
        return request(`${BASE_URL}/api/jobs/get-list`);
    },

    applyToJob(data) {
        return request(`${BASE_URL}/api/candidate/apply-to-job`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    },
};
