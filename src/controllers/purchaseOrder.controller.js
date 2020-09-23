import PurchaseOrder from "../models/PurchaseOrder";
import Document from "../models/Document"

export async function getPurchaseOrders(req, res) {
  try {
    const purchaseOrders = await PurchaseOrder.findAll();
    res.json({
      purchaseOrders: purchaseOrders,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPurchaseOrder(req, res) {
  const { id } = req.params;
  try {
    const purchaseOrder = await PurchaseOrder.findOne({
      where: {
        id,
      },
    });
    res.json({
      purchaseOrder: purchaseOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getPOD(req, res) {
  const { id } = req.params;
  try {
    const purchaseOrder = await PurchaseOrder.findOne({
      where: {
        id,
      },
      include: [{
        model: Document,
        as: 'documents',
        required: false,
      // Pass in the Document attributes that you want to retrieve
        attributes: ['id', 'name','type','src','status','createDate','fileName']
      }]
    });
    res.json({
      purchaseOrder: purchaseOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createPurchaseOrder(req, res) {
  const { code, description } = req.body;
  try {
    let newPurchaseOrder = await PurchaseOrder.create(
      {
        code,
        description,
      },
      {
        fields: ["code", "description"],
      }
    );
    if (newPurchaseOrder) {
      return res.json({
        message: "PurchaseOrder Created",
        purchaseOrder: newPurchaseOrder,
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

export async function updatePurchaseOrder(req, res) {
  const { id } = req.params;
  const { code, description } = req.body;

  try {
    const purchaseOrders = await PurchaseOrder.findAll({
      attributes: ['id', 'code', 'description'],
      where: {
        id,
      },
    });
    if (purchaseOrders.length > 0) {
      purchaseOrders.forEach(async (purchaseOrder) => {
        await purchaseOrder.update({
          code,
          description,
        });
      });
    }

    return res.json({
      message: "PurchaseOrder Updated Succesfully",
      purchaseOrder: purchaseOrders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deletePurchaseOrder(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await PurchaseOrder.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "PurchaseOrder Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}
