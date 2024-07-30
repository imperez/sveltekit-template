<script lang="ts">
    export let list: Array<Message> = [];
</script>

<ul>
    {#each list as message}
        <li class={message.type}>{message.description}</li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
        overflow-y: scroll;
        padding: var(--size-2);
        max-height: 300px;
    }
    li {
        font-size: var(--size-4);
        font-weight: var(--weight-semibold);
        padding: var(--size-2);
        width: 100%;
    }
    li.error {
        background-color: var(--color-red);
        color: var(--color-white);
    }
    li.info {
        background-color: var(--color-blue);
        color: var(--color-white);
    }
    li.warning {
        background-color: var(--color-yellow);
        color: var(--color-white);
    }
    li.success {
        background-color: var(--color-green);
        color: var(--color-white);
    }
</style>
