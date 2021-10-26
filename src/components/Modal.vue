<template>
	<div class="modal flex">
		<div class="modal-content">
			<p>Are you sure you want to exit? Your changes will not be saved?</p>
			<div class="actions flex">
				<button @click="closeModal" class="purple">Return</button>
				<button @click="closeInvoice" class="red">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
