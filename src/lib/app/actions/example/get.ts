import { get } from "$lib/app/services/api";

export default async (id: string): Promise<Example> => {
    const json = await get(`companies/${id}`);
    const example = json.data;

    return example;
}
