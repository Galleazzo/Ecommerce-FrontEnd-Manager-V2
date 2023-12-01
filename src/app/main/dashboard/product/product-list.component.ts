import {Component, OnInit} from '@angular/core'
import {InfiniteRowModelModule} from "@ag-grid-community/infinite-row-model"
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model"
import {HttpClient} from "@angular/common/http"
import {ColDef, GridOptions} from "@ag-grid-community/core"
import { ProductService } from '@youpez/services/product.service'
import { FormGroup } from '@angular/forms'
import { Product } from '@youpez/model/Product'



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public modules = [InfiniteRowModelModule, ClientSideRowModelModule];
  public gridOptions: GridOptions = {};
  public loading: boolean = false;
  public defaultColDef = {};
  public sort: any = {order: "desc", sort: "id"}

  public productList: Product[] = [];

  constructor(private http: HttpClient, private productService: ProductService) {
    
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.getColumnsTable();

    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result;
      this.loading = false;
      this.productList.forEach(product => {
        if (product.active == true) {
          return product.active = "Ativo";
        }
        return product.active = "Inativo"
      })

      this.gridOptions.api?.setRowData(this.productList); // Set row data after fetching
    })
    

  }

  getColumnsTable() {
    const columnDefs: Array<ColDef> = [
      {
        headerName: 'ID',
        field: 'id',
        cellClass: 'cell-flex-middle overflow-hidden',

        width: 150,
        
      },
      {
        headerName: 'Nome',
        field: 'name',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right font-bold'
      },
      {
        headerName: 'QTD',
        field: 'quantity',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right',

      },
      {
        headerName: 'Status',
        field: 'active',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right',

      },
      {
        headerName: 'Avaliações',
        field: 'reviews',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right',

      },
      {
        headerName: 'Preço',
        field: 'price',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right'
      }
    ]

    this.gridOptions = {
      columnDefs: columnDefs,
      rowData: [],
      rowHeight: 75,
      headerHeight: 40,
      defaultColDef: {
        editable: true,
        sortable: true,
        resizable: true,
      },
      pagination: true,
      paginationPageSize: 10,
      groupSelectsChildren: true,
    }
  }
}