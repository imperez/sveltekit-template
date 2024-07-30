import { put } from "$lib/app/services/api"

export default async (id: string, name: string): Promise<Example > => {
    const json = await put(`example/${id}`, {
        name
    });
    const example = json?.data as Example;
    return example;
}