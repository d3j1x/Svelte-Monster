<script>
    import '$lib/034/patch-process';
    import { afterUpdate } from 'svelte';
    import { derived } from 'svelte/store';
    import { createDraft, finishDraft } from 'immer';

    let [state, draft] = getImmerStore({
        user1: {
            firstName: 'Lihau',
            lastName: 'tan',
        },
        user2: {
            firstName: 'someone',
            lastName: 'special',
        },
    });

    const user1 = derived(state, ($state) => $state.user1);
    const user2 = derived(state, ($state) => $state.user2);

    let prevState = $state;

    afterUpdate(() => {
        console.log(
            prevState === $state,
            prevState.user1 === $state.user1,
            prevState.user2 === $state.user2
        );
        prevState = $state;
    });

    $: console.log($state.user1);
    $: console.log('user1',$user1);
    $: console.log('user2',$user2);


    function getImmerStore(obj) {
        let state = obj;
        let draft = createDraft(state);
        let draftSubscribers = new Set();
        let stateSubscribers = new Set();
        let timeouId;

        const draftStore = {
            subscribe(fn) {
                fn(draft);
                draftSubscribers.add(fn);

                return () => {
                    draftSubscribers.delete(fn);
                };
            },
            set(value) {
                if (timeouId) clearTimeout(timeouId);
                timeouId = setTimeout(() => {
                    timeouId = null;
                    state = finishDraft(value);
                    draft = createDraft(state);
                    draftSubscribers.forEach(fn => fn(draft));
                    stateSubscribers.forEach(fn => fn(state));
                },100);
            }
        };
        const stateStore = {
            subscribe(fn) {
                fn(state);
                stateSubscribers.add(fn);

                return () => {
                    stateSubscribers.delete(fn);
                }
            }
        };
        return [stateStore, draftStore];
    }

</script>


<h4 style="text-align: center;color:blue">
    # # # Immer for immutable svelte store # # #
</h4>

<div>
    <input value={$state.user1.firstName} on:input={e => {
        $draft.user1.firstName = e.target.value;
    }}/>
    <input value={$state.user1.lastName} on:input={e => {
        $draft.user1.lastName = e.target.value;
    }}/>

    <h1>Hello, {$state.user1.firstName} {$state.user1.lastName}</h1>

    <input value={$state.user2.firstName} on:input={e => {
        $draft.user2.firstName = e.target.value;
    }}/>
    <input value={$state.user2.lastName} on:input={e => {
        $draft.user2.lastName = e.target.value;
    }}/>

    <h1>Hello, {$state.user2.firstName} {$state.user2.lastName}</h1>
</div>


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>

<svelte:options immutable={true} />