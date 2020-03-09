<template>
	<b-form @submit.prevent="onSubmit" @reset="onReset">
		<b-form-group label="Course Title" label-for="input-1">
			<b-form-input
				id="input-1"
				v-model="course.title"
				type="text"
				required
				placeholder="Title"
			></b-form-input>
		</b-form-group>

		<b-form-group label="Coupon Code" label-for="input-2">
			<b-form-input
				id="input-2"
				v-model="course.couponCode"
				type="text"
				required
				placeholder="Coupon code"
			></b-form-input>
		</b-form-group>

		<b-form-group label="Course Price" label-for="input-3">
			<b-form-input
				id="input-3"
				v-model="course.price"
				type="number"
				step="1.00"
				min="0"
				required
				placeholder="Course price"
			></b-form-input>
		</b-form-group>

		<div class="d-flex justify-content-end align-items-center">
			<b-button type="reset" variant="link" class="text-danger"
				>Cancel</b-button
			>
			<b-button type="submit" variant="primary" class="ml-3">{{
				this.$route.name
			}}</b-button>
		</div>
	</b-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { capitalize } from '../utils/settings';

export default {
	name: 'CourseForm',
	data() {
		return {
			course: {
				id: '',
				title: '',
				couponCode: '',
				price: ''
			}
		};
	},
	mounted() {
		if (this.$route.name === 'Edit Course' && this.$route.params.id) {
			const id = this.$route.params.id;
			this.fetchSingle({ id }).then((res) => {
				this.course = this.getUpdCourse[0];
			});
		} else {
			this.course = {
				id: '',
				title: '',
				couponCode: '',
				price: ''
			};
		}
	},
	watch: {
		$route(val) {
			if (val.name === 'Add Course') {
				this.course = {
					id: '',
					title: '',
					couponCode: '',
					price: ''
				};
			}
		}
	},
	computed: {
		...mapGetters(['getUpdCourse'])
	},
	methods: {
		...mapActions(['addCourse', 'fetchSingle', 'updateCourse']),
		onSubmit() {
			const course = {
				title: capitalize(this.course.title),
				couponCode: this.course.couponCode.toUpperCase(),
				price: parseInt(this.course.price).toFixed(2)
			};
			if (this.$route.name === 'Add Course') {
				this.addCourse(course).then(() => this.$router.push('/'));
			} else {
				const course = {
					id: this.course.id,
					title: capitalize(this.course.title),
					couponCode: this.course.couponCode.toUpperCase(),
					price: parseInt(this.course.price).toFixed(2)
				};
				this.updateCourse(course).then(() => this.$router.push('/'));
			}
		},
		onReset() {
			this.$router.push('/');
			this.course.title = '';
			this.course.couponCode = '';
			this.course.price = '';
		}
	}
};
</script>
