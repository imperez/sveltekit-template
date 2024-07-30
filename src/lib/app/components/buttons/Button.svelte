<script lang="ts">
    import ButtonDisplay from "$lib/app/enums/ButtonDisplay";
    import LoadingState from "$lib/app/enums/LoadingState";
    import Loader from "$lib/app/components/loaders/Loader.svelte";
    import ButtonSize from "$lib/app/enums/ButtonSize";

    export let active = false;
    export let disabled = false;
    export let label: string;
    export let name: string | null = null;
    export let value: string | null = null;
    export let href: string | null = null;
    export let loadingState: LoadingState = LoadingState.None;
    export let display: ButtonDisplay = ButtonDisplay.Button;
    export let size: ButtonSize = ButtonSize.Regular;
</script>

{#if href}
    <a
        class="button" {href} on:click
        class:active={active}
        class:ghost={display.is(ButtonDisplay.Ghost)}
        class:small={size.is(ButtonSize.Small)}
        class:large={size.is(ButtonSize.Large)}
    >
        {label}
    </a>
{:else if loadingState.is(LoadingState.Loading)}
    <button class="button">
        <Loader />
    </button>
{:else}
    <button
        class="button" {name} {value} {disabled} on:click
        class:active={active}
        class:ghost={display.is(ButtonDisplay.Ghost)}
        class:small={size.is(ButtonSize.Small)}
        class:large={size.is(ButtonSize.Large)}
    >
        {label}
    </button>
{/if}

<style>
    .button {
        align-content: center;
        background-color: var(--brand-secondary);
        border: 1px solid var(--color-gray-lighter);
        color: var(--color-black);
        font-size: var(--size-4);
        font-weight: var(--weight-semibold);
        padding: var(--size-2) var(--size-4);
        text-align: center;
        text-transform: capitalize;
        transition: all 0.4s ease-out;
    }
    .button.small {
        font-size: var(--size-3);
        padding: var(--size-1) var(--size-2);
    }
    .button.large {
        font-size: 140%;
    }

    .ghost {
        background-color: transparent;
        border: 1px solid transparent;
        color: var(--color-black);
        padding: var(--size-2);
        width: auto;
    }

    .button:hover,
    .active {
        background-color: var(--brand-highlight);
        border: 1px solid var(--brand-highlight);
        color: var(--color-black);
        cursor: pointer;
    }
    .button:disabled {
        background-color: var(--color-gray-lighter);
        border: 1px solid var(--color-gray);
        cursor: auto;
    }
</style>
