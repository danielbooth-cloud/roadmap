<div class="min-h-screen" style="background-color: var(--color-palette-dark);">
	<!-- Header Section -->
	<header class="p-8">
		<h1 class="text-4xl font-bold mb-4" style="color: var(--color-palette-light);">
			Welcome to SvelteKit
		</h1>
		<p class="text-lg opacity-80" style="color: var(--color-palette-light);">
			Demonstrating the custom theme palette
		</p>
	</header>

	<!-- Main Content -->
	<main class="px-8 pb-8">
		<!-- Button Section -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Interactive Elements
			</h2>
			<div class="flex gap-4 flex-wrap">
				<button 
					class="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
					style="background-color: var(--color-palette-pink); color: var(--color-palette-light);"
				>
					Primary Button
				</button>
				<button 
					class="px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200 hover:scale-105"
					style="border-color: var(--color-palette-pink); color: var(--color-palette-pink); background-color: transparent;"
				>
					Secondary Button
				</button>
			</div>
		</section>

		<!-- Card Section -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Content Cards
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="p-6 rounded-lg border" style="background-color: rgba(255, 26, 117, 0.1); border-color: var(--color-palette-pink);">
					<h3 class="text-xl font-semibold mb-2" style="color: var(--color-palette-light);">
						Feature One
					</h3>
					<p class="opacity-80" style="color: var(--color-palette-light);">
						This card demonstrates the theme with a subtle pink background tint.
					</p>
				</div>
				<div class="p-6 rounded-lg border" style="background-color: rgba(254, 254, 253, 0.05); border-color: var(--color-palette-light);">
					<h3 class="text-xl font-semibold mb-2" style="color: var(--color-palette-light);">
						Feature Two
					</h3>
					<p class="opacity-80" style="color: var(--color-palette-light);">
						This card uses a light border with subtle background highlighting.
					</p>
				</div>
				<div class="p-6 rounded-lg" style="background-color: var(--color-palette-pink);">
					<h3 class="text-xl font-semibold mb-2" style="color: var(--color-palette-light);">
						Feature Three
					</h3>
					<p class="opacity-90" style="color: var(--color-palette-light);">
						This card showcases the full pink background for emphasis.
					</p>
				</div>
			</div>
		</section>

		<!-- Navigation/Link Section -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Navigation & Links
			</h2>
			<nav class="flex gap-6 flex-wrap">
				<a 
					href="https://svelte.dev/docs/kit" 
					class="hover:underline transition-colors duration-200"
					style="color: var(--color-palette-pink);"
				>
					SvelteKit Documentation
				</a>
				<a 
					href="#" 
					class="hover:underline transition-colors duration-200"
					style="color: var(--color-palette-pink);"
				>
					About
				</a>
				<a 
					href="#" 
					class="hover:underline transition-colors duration-200"
					style="color: var(--color-palette-pink);"
				>
					Contact
				</a>
			</nav>
		</section>

		<!-- Form Section -->
		<section>
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Form Elements
			</h2>
			<form class="max-w-md space-y-4">
				<div>
					<label class="block text-sm font-medium mb-2" style="color: var(--color-palette-light);">
						Email Address
					</label>
					<input 
						type="email" 
						class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
						style="background-color: rgba(254, 254, 253, 0.1); border-color: var(--color-palette-light); color: var(--color-palette-light); --tw-ring-color: var(--color-palette-pink);"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium mb-2" style="color: var(--color-palette-light);">
						Message
					</label>
					<textarea 
						rows="4" 
						class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
						style="background-color: rgba(254, 254, 253, 0.1); border-color: var(--color-palette-light); color: var(--color-palette-light); --tw-ring-color: var(--color-palette-pink);"
						placeholder="Your message here..."
					></textarea>
				</div>
				<button 
					type="submit"
					class="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
					style="background-color: var(--color-palette-pink); color: var(--color-palette-light);"
				>
					Send Message
				</button>
			</form>
		</section>
	</main>
</div>
