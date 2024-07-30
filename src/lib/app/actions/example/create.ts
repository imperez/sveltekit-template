import { post } from "$lib/app/services/api"

export default async (name: string, initials: string, sizeTypeId: string): Promise<Example> => {
    const json = await post('example', {
        name
    });
    return json?.data;
}