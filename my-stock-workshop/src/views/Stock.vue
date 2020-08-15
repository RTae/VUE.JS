<template>
  <v-container id="stock">
    <!-- Summary Section -->
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="TOTAL"
          subtitle="1,800"
          avatar_BG="#00a65a"
          avatar_ICON="mdi-cart-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="SOLD-OUT"
          subtitle="12"
          avatar_BG="#f39c12"
          avatar_ICON="mdi-flask-empty-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="RETURN"
          subtitle="2"
          avatar_BG="#dd4b39"
          avatar_ICON="mdi-keyboard-return"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="DISCOUNT"
          subtitle="101"
          avatar_BG="#00c0ef"
          avatar_ICON="mdi-gift-outline"
        />
      </v-col>
    </v-row>
    <!-- Table Section -->
    <v-card>
      <v-data-table :search="search" :headers="headers" :items="mDataArray">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="label"
              id="search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="$router.push('/stock-create')"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>New product</span>
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-img
                :src="item.image | imageUrl"
                max-width="50"
                max-height="50"
                aspect-ratio="1"
                lazy-src="../../backend/uploaded/images/112.jpg"
              />
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency("฿") }}</td>
            <td>{{ item.stock | number("0,0") }} pcs.</td>
            <td>
              <v-icon class="ma-2" @click="editItem(item)">
                edit
              </v-icon>
              <span class="ma-1"></span>
              <v-icon class="ma-2" @click="deleleItem(item)">
                delete
              </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
      <v-dialog v-model="confirmDeleteDlg" max-width="290">
        <v-card>
          <v-card-title class="headline">Confirm Delete</v-card-title>
          <v-card-text class="body">
            Are you sure to delete this product? You cannot restore it after
            clicking confirm
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="confirmDeleteDlg = false">Cancle</v-btn>
            <v-btn text color="error" @click="confirmDelete">Confirm</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
import StockCard from "../components/cards/StockCard";
import api from "../service/api";

export default {
  name: "Stock",
  components: {
    StockCard
  },
  data() {
    return {
      mDataArray: [],
      headers: [
        {
          text: "id",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Action", value: "action" }
      ],
      search: "",
      selectedProductId: "",
      confirmDeleteDlg: false
    };
  },
  mounted() {
    this.loadProduct();
  },
  methods: {
    editItem(item) {
      this.$router.push(`/stock-edit/${item.id}`);
    },
    deleleItem(item) {
      this.selectedProductId = item.id;
      this.confirmDeleteDlg = true;
    },
    async confirmDelete() {
      await api.deleteProduct(this.selectedProductId);
      this.confirmDeleteDlg = false;
      this.loadProduct();
    },
    async loadProduct() {
      let result = await api.getProducts();
      this.mDataArray = result.data;
    }
  }
};
</script>

<style></style>
