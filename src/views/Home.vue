<template>
	<div class="home">
		<course-list />
	</div>
</template>

<script>
import CourseList from '../components/CourseList';

export default {
	name: 'Home',
	components: {
		'course-list': CourseList
	},
	mounted() {},
	methods: {}
};
</script>
