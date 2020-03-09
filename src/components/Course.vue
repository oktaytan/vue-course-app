<template>
	<tr>
		<th scope="row">{{ course.id }}</th>
		<td>{{ course.title }}</td>
		<td>{{ course.couponCode }}</td>
		<td>{{ course.price }}</td>
		<td>
			<b-button v-b-tooltip.hover title="Update" variant="link"
				><b-icon icon="pencil" @click="updateCourse(course.id)"></b-icon
			></b-button>
			<b-button
				v-b-tooltip.hover
				title="Remove"
				variant="link"
				class="text-danger"
				@click="removeCourse(course.id)"
				><b-icon icon="trash"></b-icon
			></b-button>
		</td>
	</tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'Course',
	props: {
		course: {
			type: Object,
			required: true
		}
	},
	methods: {
		...mapActions(['deleteCourse', 'fetchCourses']),
		removeCourse(id) {
			this.deleteCourse({ id }).then((res) => {
				if (res.data && res.status == 200) {
					this.$emit('course-removed');
				}
			});
		},
		updateCourse(id) {
			this.$router.push({ name: 'Edit Course', params: { id } });
		}
	}
};
</script>
