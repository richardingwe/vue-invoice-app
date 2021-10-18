<template>
	<div
		@click="checkClick"
		ref="invoiceWrap"
		class="invoice-wrap flex flex-column"
	>
		<form @submit.prevent="submitForm" class="invoice-content">
			<!-- Bill from -->
			<div class="bill-from flex flex-column">
				<h4>Bill From</h4>
				<div class="input flex flex-column">
					<label for="billersStreetAddress">Street Address</label>
					<input
						type="text"
						required
						id="billersStreetAddress"
						v-model="billersStreetAddress"
					/>
				</div>
				<div class="location-details flex">
					<div class="input flex flex-column">
						<label for="billerCity">City</label>
						<input type="text" required id="billerCity" v-model="billerCity" />
					</div>
					<div class="input flex flex-column">
						<label for="billersZipCode">Zip Code</label>
						<input
							type="text"
							required
							id="billersZipCode"
							v-model="billersZipCode"
						/>
					</div>
					<div class="input flex flex-column">
						<label for="billerCountry">Country</label>
						<input
							type="text"
							required
							id="billerCountry"
							v-model="billerCountry"
						/>
					</div>
				</div>
			</div>

			<!-- Bill To -->
			<div class="bill-to flex flex-column">
				<h4>Bill To</h4>
				<div class="input flex flex-column">
					<label for="clientName">CLient's name</label>
					<input type="text" required id="clientName" v-model="clientName" />
				</div>
				<div class="input flex flex-column">
					<label for="clientEmail">Client's email</label>
					<input type="text" required id="clientEmail" v-model="clientEmail" />
				</div>
				<div class="input flex flex-column">
					<label for="clientStreetAddress">Street Address</label>
					<input
						type="text"
						required
						id="clientStreetAddress"
						v-model="clientStreetAddress"
					/>
				</div>
				<div class="location-details flex">
					<div class="input flex flex-column">
						<label for="clientCity">City</label>
						<input type="text" required id="clientCity" v-model="clientCity" />
					</div>
					<div class="input flex flex-column">
						<label for="clientZipCode">Zip Code</label>
						<input
							type="text"
							required
							id="clientZipCode"
							v-model="clientZipCode"
						/>
					</div>
					<div class="input flex flex-column">
						<label for="clientCountry">Country</label>
						<input
							type="text"
							required
							id="clientCountry"
							v-model="clientCountry"
						/>
					</div>
				</div>
			</div>

			<!-- Invoice Work Details -->
			<div class="invoice-work flex flex-column">
				<div class="payment flex">
					<div class="input flex flex-column">
						<label for="invoiceDate">Invoice Date</label>
						<input
							disabled
							type="text"
							required
							id="invoiceDate"
							v-model="invoiceDate"
						/>
					</div>
					<div class="input flex flex-column">
						<label for="paymentDueDate">Payment Due</label>
						<input
							disabled
							type="text"
							required
							id="paymentDueDate"
							v-model="paymentDueDate"
						/>
					</div>
				</div>
				<div class="input flex flex-column">
					<label for="paymentTerms">Payment Terms</label>
					<select type="text" required id="paymentTerms" v-model="paymentTerms">
						<option value="30">Net 30 Days</option>
						<option value="60">Net 60 Days</option>
					</select>
				</div>
				<div class="input flex flex-column">
					<label for="productDescription">Product Description</label>
					<input
						type="text"
						required
						id="productDescription"
						v-model="productDescription"
					/>
				</div>
				<div class="work-items">
					<h3>Item List</h3>
					<table class="item-List">
						<tr class="table-heading flex">
							<th class="item-name">Item Name</th>
							<th class="qty">Qty</th>
							<th class="price">Price</th>
							<th class="total">Total</th>
						</tr>
						<tr
							class="table-items flex"
							v-for="(item, index) in invoiceItemList"
							:key="index"
						>
							<td class="item-name">
								<input type="text" v-model="item.itemName" />
							</td>
							<td class="qty">
								<input type="text" v-model="item.qty" />
							</td>
							<td class="price">
								<input type="text" v-model="item.price" />
							</td>
							<td class="total flex">
								${{ (item.total = item.qty * item.price) }}
							</td>
							<img
								@click="deleteInvoiceItem(item.id)"
								src="@/assets/icon-delete.svg"
								alt=""
							/>
						</tr>
					</table>

					<div @click="addNewInvoiceItem" class="flex button">
						<img src="@/assets/icon-plus.svg" alt="" />
						Add New Item
					</div>
				</div>
			</div>
		</form>
	</div>
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
