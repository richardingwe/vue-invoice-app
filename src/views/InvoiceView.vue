<template>
	<div v-if="currentInvoice" class="invoice-view container">
		<router-link class="nav-link flex" :to="{ name: 'Home' }">
			<img src="@/assets/icon-arrow-left.svg" alt="" /> Go Back
		</router-link>
		<div class="header flex">
			<div class="left flex">
				<span>Status</span>
				<div
					class="status-button flex"
					:class="{
						paid: currentInvoice.invoicePaid,
						draft: currentInvoice.invoiceDraft,
						pending: currentInvoice.invoicePending,
					}"
				>
					<span v-if="currentInvoice.invoicePaid">Paid</span>
					<span v-if="currentInvoice.invoiceDraft">Draft</span>
					<span v-if="currentInvoice.invoicePending">Pending</span>
				</div>
			</div>
		</div>
	</div>
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
		created() {
			this.getCurrentInvoice();
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

<style lang="scss" scoped>
	.invoice-view {
		.nav-link {
			margin-bottom: 32px;
			align-items: center;
			color: #fff;
			font-size: 12px;
			img {
				margin-right: 16px;
				width: 7px;
				height: 10px;
			}
		}
		.header,
		.invoice-details {
			background-color: #1e2139;
			border-radius: 20px;
		}
		.header {
			align-items: center;
			padding: 24px 32px;
			font-size: 12px;
			.left {
				align-items: center;
				span {
					color: #dfe3fa;
					margin-right: 16px;
				}
			}
			.right {
				flex: 1;
				justify-content: flex-end;
				button {
					color: #fff;
				}
			}
		}
		.invoice-details {
			padding: 48px;
			margin-top: 24px;
			.top {
				div {
					color: #dfe3fa;
					flex: 1;
				}
				.left {
					font-size: 12px;
					p:first-child {
						font-size: 24px;
						text-transform: uppercase;
						color: #fff;
						margin-bottom: 8px;
					}
					p:nth-child(2) {
						font-size: 16px;
					}
					span {
						color: #888eb0;
					}
				}
				.right {
					font-size: 12px;
					align-items: flex-end;
				}
			}
			.middle {
				margin-top: 50px;
				color: #dfe3fa;
				gap: 16px;
				h4 {
					font-size: 12px;
					font-weight: 400;
					margin-bottom: 12px;
				}
				p {
					font-size: 16px;
				}
				.bill,
				.payment {
					flex: 1;
				}
				.payment {
					h4:nth-child(3) {
						margin-top: 32px;
					}
					p {
						font-weight: 600;
					}
				}
				.bill {
					p:nth-child(2) {
						font-size: 16px;
					}
					p:nth-child(3) {
						margin-top: auto;
					}
					p {
						font-size: 12px;
					}
				}
				.send-to {
					flex: 2;
				}
			}
			.bottom {
				margin-top: 50px;
				.billing-items {
					padding: 32px;
					border-radius: 20px 20px 0 0;
					background-color: #252945;
					.heading {
						color: #dfe3fa;
						font-size: 12px;
						margin-bottom: 32px;
						p:first-child {
							flex: 3;
							text-align: left;
						}
						p {
							flex: 1;
							text-align: right;
						}
					}
					.item {
						margin-bottom: 32px;
						font-size: 13px;
						color: #fff;
						&:last-child {
							margin-bottom: 0;
						}
						p:first-child {
							flex: 3;
							text-align: left;
						}
						p {
							flex: 1;
							text-align: right;
						}
					}
				}
				.total {
					color: #fff;
					padding: 32px;
					background-color: rgba(12, 14, 22, 0.7);
					align-items: center;
					border-radius: 0 0 20px 20px;
					p {
						flex: 1;
						font-size: 12px;
					}
					p:nth-child(2) {
						font-size: 28px;
						text-align: right;
					}
				}
			}
		}
	}
</style>
