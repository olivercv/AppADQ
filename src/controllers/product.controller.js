import Product from "../models/Product";

export async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json({
      products: products,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    res.json({
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createProduct(req, res) {
  const { name, description, quantity, price, requestId } = req.body;
  try {
    let newProduct = await Product.create(
      {
        name,
        description,
        quantity,
        price,
        requestId
      },
      {
        fields: ["name", "description", "quantity", "price", "requestId"],
      }
    );
    if (newProduct) {
      return res.json({
        message: "Product Created",
        product: newProduct,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, description, quantity, price, requestId } = req.body;

  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'description', 'quantity', 'price', 'requestId'],
      where: {
        id,
      },
    });
    if (products.length > 0) {
      products.forEach(async (product) => {
        await product.update({
          name,
          description,
          quantity,
          price,
          requestId
        });
      });
    }

    return res.json({
      message: "Product Updated Succesfully",
      product: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Product.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Product Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}
