# Quy định tạo API

* METHOD - URL:
    * GET  /api/product/new                      lấy danh sách sản phẩm mới nhất.
    * GET  /api/product/best-seller:             lấy danh sách sản phẩm bán chạy nhất.
    * GET  /api/product/:productID               lấy 1 sản phẩm theo mã sản phẩm
    * GET  /api/product/publisher/:publisherID       lấy danh sách sản phẩm theo hãng sản phẩm
    * GET  /api/product/category/:categoryID     lấy danh sách sản phẩm theo loại sản phẩm
    * POST /api/product/publisher                  thêm mới 1 hãng sản xuất
    * POST /api/product/category                 thêm mới 1 loại sản phẩm
    * POST /api/product                          thêm mới 1 sản phẩm