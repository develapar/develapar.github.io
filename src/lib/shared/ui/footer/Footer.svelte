<script lang="ts">
	import { ExternalLink } from '$shared/ui';
	// boring stuff here
	const linkClass =
		'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 transition';
</script>

<footer class="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
	<hr class="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
	<slot />
	<div class="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
		<div class="flex flex-col space-y-4">
			<a sapper:prefetch href="/" class="{linkClass}" aria-label="{'Footer home link'}"
				>Home</a
			>
			<a sapper:prefetch href="/about" class="{linkClass}" aria-label="{'Footer about link'}">
				About
			</a>
			<a sapper:prefetch href="/blog" class="{linkClass}" aria-label="{'Footer about link'}">
				Blog
			</a>
			<a
				sapper:prefetch
				href="/projects"
				class="{linkClass}"
				aria-label="{'Footer about link'}"
			>
				Projects
			</a>
		</div>
		<div class="flex flex-col space-y-4">
			<ExternalLink
				href="https://www.linkedin.com/in/asnavneetsharma/"
				cssClasses="{linkClass}"
				ariaLabel="{'Footer LinkedIn link'}">LinkedIn</ExternalLink
			>
			<ExternalLink
				href="https://github.com/navneetsharmaui"
				cssClasses="{linkClass}"
				ariaLabel="{'Footer GitHub link'}">GitHub</ExternalLink
			>
			<ExternalLink
				href="https://twitter.com/asnavneetsharma"
				cssClasses="{linkClass}"
				ariaLabel="{'Footer Twitter link'}">Twitter</ExternalLink
			>
			<ExternalLink
				href="https://www.instagram.com/asnavneetsharma/"
				cssClasses="{linkClass}"
				ariaLabel="{'Footer Instagram link'}">Instagram</ExternalLink
			>
		</div>
		<div class="flex flex-col space-y-4">
			<a
				sapper:prefetch
				href="/snippets"
				class="{linkClass}"
				aria-label="{'Footer Snippets link'}">Snippets</a
			>
			<a sapper:prefetch href="/tags" class="{linkClass}" aria-label="{'Footer tags link'}"
				>Tags</a
			>
			<a
				sapper:prefetch
				href="/dashboard"
				class="{linkClass}"
				aria-label="{'Footer dashobard link'}"
			>
				Dashboard
			</a>
		</div>
	</div>
</footer>
