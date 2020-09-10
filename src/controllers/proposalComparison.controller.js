import ProposalComparison from "../models/ProposalComparison";
import Document from "../models/Document";

export async function getProposalComparisons(req, res) {
  try {
    const proposalComparisons = await ProposalComparison.findAll();
    res.json({
      proposalComparisons: proposalComparisons,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getProposalComparison(req, res) {
  const { id } = req.params;
  try {
    const proposalComparison = await ProposalComparison.findOne({
      where: {
        id,
      },
    });
    res.json({
      proposalComparison: proposalComparison,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getPCD(req, res) {
  const { id } = req.params;
  try {
    const proposalComparison = await ProposalComparison.findOne({
      where: {
        id,
      },
      include: [{
        model: Document,
        as: 'documents',
        required: false,
      // Pass in the Document attributes that you want to retrieve
        attributes: ['id', 'name','type','src','status','createDate']
      }]
    });
    res.json({
      proposalComparison: proposalComparison,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createProposalComparison(req, res) {
  const { code, description,provider } = req.body;
  try {
    let newProposalComparison = await ProposalComparison.create(
      {
        code,
        description,
        provider,
      },
      {
        fields: ["code", "description","provider"],
      }
    );
    if (newProposalComparison) {
      return res.json({
        message: "ProposalComparison Created",
        proposalComparison: newProposalComparison,
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

export async function updateProposalComparison(req, res) {
  const { id } = req.params;
  const { code, description,provider } = req.body;

  try {
    const proposalComparisons = await ProposalComparison.findAll({
      attributes: ['id', 'code', 'description','provider'],
      where: {
        id,
      },
    });
    if (proposalComparisons.length > 0) {
      proposalComparisons.forEach(async (proposalComparison) => {
        await proposalComparison.update({
          code,
          description,
          provider
        });
      });
    }

    return res.json({
      message: "ProposalComparison Updated Succesfully",
      proposalComparison: proposalComparisons,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteProposalComparison(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await ProposalComparison.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "ProposalComparison Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}
