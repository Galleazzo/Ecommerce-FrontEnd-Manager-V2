import {Component, OnInit} from '@angular/core'
import {InfiniteRowModelModule} from "@ag-grid-community/infinite-row-model"
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model"
import {HttpClient} from "@angular/common/http"
import {ColDef, GridOptions} from "@ag-grid-community/core"
import { ProductService } from '@youpez/services/product.service'


const categories = {
  'Utilities': '#edb879',
  'Technology Services': '#1979a9',
  'Transportation': '#e07b39',
  'Retail Trade': '#80391e',
  'Producer Manufacturing': '#042f66',
  'Health Technology': '#042f66',
  'Health Services': '#521799',
  'Finance': '#991717',
  'Energy Minerals': '#805C33',
  'Electronic Technology': '#003A52',
  'Consumer Services': '#008580',
  'Consumer Non-Durables': '#D1C400',
  'Consumer Durables': '#850200',
  'Communications': '#001FD1',
}



const createRowHelper = (_1, _2, _3, _4, _5, _6) => {
  return {
    id: _1,
    name: _2,
    quantity: _3,
    sku: _4,
    price: _5,
    rating: _6,
  }
}

const parseCSV = (csv) => {
  return csv.split('\n').map(row => row.split(',')).filter(row => row[0])
}


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public gridOptions: GridOptions = {}
  public loading: boolean = false
  public defaultColDef = {}

  constructor(private http: HttpClient, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.createTable()
  }

  createTable() {
    this.loading = true
    const columnDefs: Array<ColDef> = [
      {
        headerName: 'ID',
        field: 'id',
        cellClass: 'cell-flex-middle overflow-hidden',

        width: 50,
        pinned: true,
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      {
        headerName: 'Produto/Nome',
        field: 'name',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right font-bold'
      },
      {
        headerName: 'Quantidade',
        field: 'quantity',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right',
 
      },
      {
        headerName: 'SKU',
        field: 'sku',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right',

      },
      {
        headerName: 'Preço',
        field: 'price',
        headerClass: 'cell-flex-center',
        cellClass: 'cell-flex-middle',

      },
      {
        headerName: 'Nota',
        field: 'rating',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right'
      }
    ]

    this.productService.getByCriteria("", 0, 10, "id", "asc").subscribe((result) => {
      const data = result.map(row => createRowHelper(row[0], row[1], row[2], row[3], row[4], row[5]))
      this.gridOptions = {
        columnDefs: columnDefs,
        rowData: data,
        rowHeight: 40,
        headerHeight: 40,
        rowSelection: 'multiple',
        defaultColDef: {
          editable: true,
          sortable: true,
          resizable: true,
        },
        pagination: true,
        paginationPageSize: 30,
        groupSelectsChildren: true,
      }
      this.loading = false
    })

    
  }

}
