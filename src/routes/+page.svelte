<script lang="ts">
    let name: string = 1; // error
    let obj: {a: string, b: number} = {foo: 'bar'};

    function greet(name: string) {
        alert(`Hello, ${name}!`);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
