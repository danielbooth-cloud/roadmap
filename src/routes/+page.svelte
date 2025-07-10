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
				<button 
					class="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-80"
					style="background-color: rgba(254, 254, 253, 0.1); color: var(--color-palette-light); border: 1px solid var(--color-palette-light);"
				>
					Tertiary Button
				</button>
			</div>
		</section>

		<!-- Progress & Status Section -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Progress & Status Indicators
			</h2>
			<div class="space-y-4">
				<!-- Progress Bar -->
				<div>
					<label class="block text-sm font-medium mb-2" style="color: var(--color-palette-light);">
						Project Progress (75%)
					</label>
					<div class="w-full rounded-full h-3" style="background-color: rgba(254, 254, 253, 0.1);">
						<div class="h-3 rounded-full transition-all duration-300" style="width: 75%; background-color: var(--color-palette-pink);"></div>
					</div>
				</div>

				<!-- Status Badges -->
				<div class="flex gap-3 flex-wrap">
					<span class="px-3 py-1 rounded-full text-sm font-medium" style="background-color: var(--color-palette-pink); color: var(--color-palette-light);">
						Active
					</span>
					<span class="px-3 py-1 rounded-full text-sm font-medium border" style="border-color: var(--color-palette-light); color: var(--color-palette-light); background-color: transparent;">
						Pending
					</span>
					<span class="px-3 py-1 rounded-full text-sm font-medium" style="background-color: rgba(255, 26, 117, 0.2); color: var(--color-palette-pink); border: 1px solid var(--color-palette-pink);">
						In Review
					</span>
				</div>
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

		<!-- Data Table Section -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Data Table
			</h2>
			<div class="overflow-x-auto rounded-lg" style="background-color: rgba(254, 254, 253, 0.05);">
				<table class="w-full">
					<thead>
						<tr class="border-b" style="border-color: var(--color-palette-pink);">
							<th class="px-6 py-3 text-left font-semibold" style="color: var(--color-palette-light);">
								Project
							</th>
							<th class="px-6 py-3 text-left font-semibold" style="color: var(--color-palette-light);">
								Status
							</th>
							<th class="px-6 py-3 text-left font-semibold" style="color: var(--color-palette-light);">
								Progress
							</th>
							<th class="px-6 py-3 text-left font-semibold" style="color: var(--color-palette-light);">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b border-opacity-20" style="border-color: var(--color-palette-light);">
							<td class="px-6 py-4" style="color: var(--color-palette-light);">
								SvelteKit Demo
							</td>
							<td class="px-6 py-4">
								<span class="px-2 py-1 rounded text-xs" style="background-color: var(--color-palette-pink); color: var(--color-palette-light);">
									Active
								</span>
							</td>
							<td class="px-6 py-4" style="color: var(--color-palette-light);">
								85%
							</td>
							<td class="px-6 py-4">
								<button class="text-sm hover:underline" style="color: var(--color-palette-pink);">
									View
								</button>
							</td>
						</tr>
						<tr class="border-b border-opacity-20" style="border-color: var(--color-palette-light);">
							<td class="px-6 py-4" style="color: var(--color-palette-light);">
								Theme System
							</td>
							<td class="px-6 py-4">
								<span class="px-2 py-1 rounded text-xs border" style="border-color: var(--color-palette-light); color: var(--color-palette-light);">
									Completed
								</span>
							</td>
							<td class="px-6 py-4" style="color: var(--color-palette-light);">
								100%
							</td>
							<td class="px-6 py-4">
								<button class="text-sm hover:underline" style="color: var(--color-palette-pink);">
									Edit
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Alert/Notification Section -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Notifications & Alerts
			</h2>
			<div class="space-y-4">
				<!-- Success Alert -->
				<div class="p-4 rounded-lg border-l-4" style="background-color: rgba(255, 26, 117, 0.1); border-left-color: var(--color-palette-pink);">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<span class="text-lg" style="color: var(--color-palette-pink);">✓</span>
						</div>
						<div class="ml-3">
							<p class="font-medium" style="color: var(--color-palette-light);">
								Theme successfully applied!
							</p>
							<p class="text-sm opacity-80" style="color: var(--color-palette-light);">
								Your custom color palette is now active across all components.
							</p>
						</div>
					</div>
				</div>

				<!-- Info Alert -->
				<div class="p-4 rounded-lg border" style="background-color: rgba(254, 254, 253, 0.05); border-color: var(--color-palette-light);">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<span class="text-lg" style="color: var(--color-palette-light);">ℹ</span>
						</div>
						<div class="ml-3">
							<p class="font-medium" style="color: var(--color-palette-light);">
								Did you know?
							</p>
							<p class="text-sm opacity-80" style="color: var(--color-palette-light);">
								This demo showcases CSS custom properties with Tailwind CSS integration.
							</p>
						</div>
					</div>
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
				<a 
					href="#" 
					class="hover:underline transition-colors duration-200"
					style="color: var(--color-palette-pink);"
				>
					Blog
				</a>
			</nav>
		</section>

		<!-- Toggle/Switch Section -->
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4" style="color: var(--color-palette-light);">
				Toggles & Switches
			</h2>
			<div class="space-y-4">
				<div class="flex items-center justify-between p-4 rounded-lg" style="background-color: rgba(254, 254, 253, 0.05);">
					<div>
						<h3 class="font-medium" style="color: var(--color-palette-light);">
							Enable Notifications
						</h3>
						<p class="text-sm opacity-80" style="color: var(--color-palette-light);">
							Receive updates about your projects
						</p>
					</div>
					<div class="relative">
						<input type="checkbox" class="sr-only" id="toggle1">
						<label for="toggle1" class="flex items-center cursor-pointer">
							<div class="relative">
								<div class="w-12 h-6 rounded-full transition-colors duration-200" style="background-color: var(--color-palette-pink);"></div>
								<div class="absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-200 transform translate-x-6" style="background-color: var(--color-palette-light);"></div>
							</div>
						</label>
					</div>
				</div>

				<div class="flex items-center justify-between p-4 rounded-lg" style="background-color: rgba(254, 254, 253, 0.05);">
					<div>
						<h3 class="font-medium" style="color: var(--color-palette-light);">
							Dark Mode
						</h3>
						<p class="text-sm opacity-80" style="color: var(--color-palette-light);">
							Currently enabled with custom theme
						</p>
					</div>
					<div class="relative">
						<input type="checkbox" class="sr-only" id="toggle2">
						<label for="toggle2" class="flex items-center cursor-pointer">
							<div class="relative">
								<div class="w-12 h-6 rounded-full transition-colors duration-200" style="background-color: rgba(254, 254, 253, 0.2);"></div>
								<div class="absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-200" style="background-color: var(--color-palette-light);"></div>
							</div>
						</label>
					</div>
				</div>
			</div>
		</section>

		<!-- Form Section -->
		<section class="mb-8">
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
						Project Type
					</label>
					<select 
						class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
						style="background-color: rgba(254, 254, 253, 0.1); border-color: var(--color-palette-light); color: var(--color-palette-light); --tw-ring-color: var(--color-palette-pink);"
					>
						<option value="">Select a type</option>
						<option value="web">Web Application</option>
						<option value="mobile">Mobile App</option>
						<option value="desktop">Desktop Software</option>
					</select>
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
				<div class="flex items-center space-x-2">
					<input 
						type="checkbox" 
						id="newsletter"
						class="rounded focus:ring-2"
						style="accent-color: var(--color-palette-pink); --tw-ring-color: var(--color-palette-pink);"
					/>
					<label for="newsletter" class="text-sm" style="color: var(--color-palette-light);">
						Subscribe to newsletter
					</label>
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

		<!-- Footer Section -->
		<footer class="mt-12 pt-8 border-t" style="border-color: rgba(254, 254, 253, 0.2);">
			<div class="text-center">
				<p class="opacity-60" style="color: var(--color-palette-light);">
					© 2024 SvelteKit Demo. Built with custom theme palette.
				</p>
				<div class="mt-4 flex justify-center gap-6">
					<a href="#" class="hover:underline" style="color: var(--color-palette-pink);">Privacy</a>
					<a href="#" class="hover:underline" style="color: var(--color-palette-pink);">Terms</a>
					<a href="#" class="hover:underline" style="color: var(--color-palette-pink);">Support</a>
				</div>
			</div>
		</footer>
	</main>
</div>
