<template>
	<div class="file">
		
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'file',
		data() {
			return {
				obj: {}
			}
		},
		mounted() {
			this.obj = this.$store.getters.changeObj;
			console.log(this.obj);
			console.log(this.obj['url']);
		}
	}
</script>