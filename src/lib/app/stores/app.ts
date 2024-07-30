import { writable } from "svelte/store";
import LoadingState from "$lib/app/enums/LoadingState";

export const state = writable<LoadingState>(LoadingState.None);
export const messages = writable<Array<Message>>([]);

