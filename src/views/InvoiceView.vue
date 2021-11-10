<template>
	<div></div>
</template>

<script>
	import { mapMutations, mapState } from 'vuex';
	export default {
		name: 'invoiceView',
		data() {
			return {
				currentInvoice: null,
			};
		},
		methods: {
			...mapMutations(['SET_CURRENT_INVOICE']),

			getCurrentInvoice() {
				this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
				this.currentInvoice = this.currentInvoiceArray[0];
			},
		},
		computed: {
			...mapState(['currentInvoiceArray', 'editInvoice']),
		},
	};
</script>

<style></style>
