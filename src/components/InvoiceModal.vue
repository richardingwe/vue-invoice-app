<template>
	<h1>
		Invoice
	</h1>
</template>

<script>
	export default {
		name: 'invoiceModal',
		data() {
			return {
				dateOptions: { year: 'numeric', month: 'short', day: 'numeric' },
				docId: null,
				loading: null,
				billerStreetAddress: null,
				billerCity: null,
				billerZipCode: null,
				billerCountry: null,
				clientName: null,
				clientEmail: null,
				clientStreetAddress: null,
				clientCity: null,
				clientZipCode: null,
				clientCountry: null,
				invoiceDateUnix: null,
				invoiceDate: null,
				paymentTerms: null,
				paymentDueDateUnix: null,
				paymentDueDate: null,
				productDescription: null,
				invoicePending: null,
				invoiceDraft: null,
				invoiceItemList: [],
				invoiceTotal: 0,
			};
		},
	};
</script>

<style></style>
