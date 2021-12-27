<template>
  <div class="ag-theme-alpine" style="height: 100%">
    <ag-grid-vue
      style="width: 100%; height: 100%"
      domLayout="autoHeight"
      :columnDefs="columnDefs"
      @grid-ready="onGridReady"
      :rowData="rowData.value"
      pagination="true"
      paginationPageSize="40"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted } from "vue";

export default {
  name: "Products",
  components: {
    AgGridVue,
  },

  setup() {
    let rowData = reactive([]);

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((remoteRowData) => (rowData.value = remoteRowData));

      // fetch("https://www.ag-grid.com/example-assets/small-row-data.json")
      //   .then((result) => {
      //     console.log(result);
      //     console.log(result.json());
      //     // JSON.parse(response)
      //   })
      //   .then((remoteRowData) => (rowData.value = remoteRowData));

      // .then((json) => console.log(json))
    });

    return {
      columnDefs: [
        { field: "userId", sortable: true, filter: true },
        { field: "title", sortable: true, filter: true },
        { field: "body", sortable: true, filter: true },
      ],
      rowData,
    };
  },
  methods: {
    onGridReady(params) {
      console.log(params);
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

      params.api.sizeColumnsToFit();
    },
  },
};
</script>