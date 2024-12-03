<script lang="ts">
  import * as config from '$lib/config';
</script>

<footer>
  <p>
    {config.title} &copy 2005-{new Date().getFullYear()}
  </p>
</footer>

<style>
  footer {
    padding-block: var(--size-7);
    border-top: 1px solid var(--border);
  }

  p {
    color: var(--text-1);
  }
</style>

