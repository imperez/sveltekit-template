import { setDefaults } from "$lib/app/services/api";

export async function handle({ event, resolve }) {
    // make sure all API calls use Svelte's fetch method
    setDefaults({fetch: event.fetch});

    return await resolve(event);
}

export async function handleFetch({ event, request, fetch }) {
    let modifiedBody = null;
    
    // pass the auth token to the request for proper client auth
    const authToken = event.cookies.get('user_token');
    if (authToken) {
        request.headers.set('Authorization', `Bearer ${authToken}`);
    }

    if (request.bodyUsed) {
        modifiedBody = await request.formData();

        // NOTE: pass any data stored locally to the fe 
        // modifiedBody.append('<field>', event.cookies.get('<field>>'));
    }

    const newRequest = new Request(request.url, {
        ...request,
        headers: request.headers,
        body: modifiedBody
    });
    
    return await fetch(newRequest);
}
