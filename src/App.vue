<template>
	<div id="app">
		<b-navbar
			toggleable="sm"
			type="light"
			variant="light"
			style="min-height: 100px"
			class="border bg-white"
		>
			<div class="bar fixed-top w-100 bg-primary"></div>
			<b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

			<b-container>
				<b-navbar-brand to="/">CourseApp</b-navbar-brand>
				<b-collapse id="nav-text-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item to="/" exact>Courses</b-nav-item>
						<b-nav-item to="/newCourse" exact>New Course</b-nav-item>
						<b-nav-item to="/about">About</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-container>
		</b-navbar>

		<b-container>
			<b-row>
				<b-card
					class="w-100 my-5 rounded-lg shadow"
					style="min-height: 70vh"
					:header="$route.name"
				>
					<transition name="fade" mode="out-in">
						<router-view />
					</transition>
				</b-card>
			</b-row>
		</b-container>

		<b-container fluid class="fixed-bottom text-center text-secondary mb-2">
			<div>{{
				`&copy; Codeigniter Vue Course App ${new Date().getFullYear()}`
			}}</div>
		</b-container>
	</div>
</template>

<style lang="scss">
.bar {
	height: 8px;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
	transform: translateX(50px);
}

.fade-enter-active,
.fade-leave-active {
	transition: all 0.15s;
}
</style>
