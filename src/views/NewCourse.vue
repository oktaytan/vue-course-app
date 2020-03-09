<template>
	<div>
		<course-form />
	</div>
</template>

<script>
import CourseForm from '../components/CourseForm.vue';

export default {
	name: 'NewCourse',
	components: {
		'course-form': CourseForm
	}
};
</script>
