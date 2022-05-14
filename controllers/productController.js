class productController {
  pay = (request, response, next) => {
    response.json("The payment is done");
  };
}

const ProductController = new productController();

export default ProductController;
