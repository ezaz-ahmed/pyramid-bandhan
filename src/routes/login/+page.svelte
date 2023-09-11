<script lang="ts">
	import RegHead from '$lib/components/RegHead.svelte';
	import RegRight from '$lib/components/RegRight.svelte';

	let state: 'login' | 'register' = 'login';
	// import Hero from '$lib/sections/Hero.svelte';
</script>

<section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
	<div class="container h-full p-10">
		<div
			class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
		>
			<div class="w-full">
				<div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
					<div class="g-0 lg:flex lg:flex-wrap">
						{#if state === 'login'}
							<!-- Left column start-->
							<div class="px-4 md:px-0 lg:w-6/12">
								<div class="md:mx-6 md:p-12">
									<!--Logo-->
									<RegHead />

									<form>
										<p class="mb-4 text-2xl">একাউন্টে লগইন করুন</p>
										<!--Username input-->
										<div class="relative mb-4" data-te-input-wrapper-init>
											<input
												type="text"
												class="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleFormControlInput1"
												placeholder="Username"
											/>
											<label
												for="exampleFormControlInput1"
												class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
											>
												ইমেইল
											</label>
										</div>

										<!--Password input-->
										<div class="relative mb-4" data-te-input-wrapper-init>
											<input
												type="password"
												class="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleFormControlInput11"
												placeholder="পাসওয়ার্ড"
											/>
											<label
												for="exampleFormControlInput11"
												class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
											>
												পাসওয়ার্ড
											</label>
										</div>

										<!--Submit button-->
										<div class="mb-12 pb-1 pt-1 text-center">
											<button
												class="mb-3 inline-block text-xl w-full rounded px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
												type="button"
												data-te-ripple-init
												data-te-ripple-color="light"
												style="
											background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
										"
											>
												লগইন
											</button>

											<!--Forgot password link-->
											<a href="/forgot-password" class=" text-xl">পাসওয়ার্ড মনে নেই?</a>
										</div>

										<!--Register button-->
										<div class="flex items-center justify-between pb-6">
											<p class="mb-0 mr-2 text-xl">আপনার একাউন্ট নেই?</p>
											<button
												type="button"
												class="btn variant-ringed rounded-md text-xl"
												on:click={() => (state = 'register')}
											>
												রেজিস্ট্রেশন করুন
											</button>
										</div>
									</form>
								</div>
							</div>
							<!-- Left column End-->

							<RegRight />
						{:else}
							<RegRight />

							<div class="px-4 md:px-0 lg:w-6/12">
								<div class="md:mx-6 md:p-12">
									<!--Logo-->
									<RegHead />

									<form>
										<p class="mb-4 text-xl">নতুন একাউন্ট খুলুন</p>
										<!--Username input-->
										<div class="relative mb-4" data-te-input-wrapper-init>
											<input
												type="text"
												class="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleFormControlInput1"
												placeholder="সম্পূর্ণ নাম"
											/>
											<label
												for="exampleFormControlInput1"
												class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
											>
												সম্পূর্ণ নাম
											</label>
										</div>

										<!--Email input-->
										<div class="relative mb-4" data-te-input-wrapper-init>
											<input
												type="text"
												class="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleFormControlInput1"
												placeholder="ইমেইল"
											/>
											<label
												for="exampleFormControlInput1"
												class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
											>
												ইমেইল
											</label>
										</div>

										<!--Password input-->
										<div class="relative mb-4" data-te-input-wrapper-init>
											<input
												type="password"
												class="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleFormControlInput11"
												placeholder="পাসওয়ার্ড"
											/>
											<label
												for="exampleFormControlInput11"
												class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
											>
												পাসওয়ার্ড
											</label>
										</div>

										<!--Submit button-->
										<div class="mb-12 pb-1 pt-1 text-center">
											<button
												class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
												type="button"
												data-te-ripple-init
												data-te-ripple-color="light"
												style="
											background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
										"
											>
												একাউন্ট খুলুন
											</button>
										</div>

										<!--Register button-->
										<div class="flex items-center justify-between pb-6">
											<p class="mb-0 mr-2 text-xl">আপনার একাউন্ট আছে?</p>
											<button
												type="button"
												class="btn variant-ringed rounded-md text-xl"
												on:click={() => (state = 'login')}
											>
												লগইন করুন
											</button>
										</div>
									</form>
								</div>
							</div>
							<!-- Left column End-->
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
