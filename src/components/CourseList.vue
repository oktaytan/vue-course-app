<template>
	<div>
		<table class="table table-borderless table-hover table-sm">
			<thead class="thead-light">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Coupon Code</th>
					<th scope="col">Price</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				<course
					v-for="course in courses"
					:key="course.id"
					:course="course"
					@course-removed="setCourses"
				/>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Course from './Course';
import CourseForm from './CourseForm';

export default {
	name: 'CourseList',
	components: {
		course: Course,
		'course-form': CourseForm
	},
	data() {
		return {
			courses: []
		};
	},
	computed: {
		...mapGetters(['getCourses'])
	},
	mounted() {
		this.setCourses();
	},
	methods: {
		...mapActions(['fetchCourses']),
		setCourses() {
			this.fetchCourses().then(() => (this.courses = this.getCourses));
		}
	}
};
</script>
